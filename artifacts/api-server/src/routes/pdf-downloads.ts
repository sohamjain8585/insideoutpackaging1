import { Router, type IRouter } from "express";
import { RequestPdfDownloadBody } from "@workspace/api-zod";
import { db, pdfDownloadRequestsTable } from "@workspace/db";
import {
  downloadableDocuments,
  getPrivateDocumentFile,
  type DownloadableDocumentId,
} from "../lib/privateDocuments.js";
import { sendPdfDownloadEmail } from "../lib/mailer.js";

const router: IRouter = Router();

router.post("/pdf-downloads", async (req, res): Promise<void> => {
  const parsed = RequestPdfDownloadBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Please complete all required fields and accept the privacy notice." });
    return;
  }

  const { document, name, email, company } = parsed.data;
  const documentId = document as DownloadableDocumentId;
  const documentInfo = downloadableDocuments[documentId];

  let file;
  let contents: Buffer;
  try {
    file = await getPrivateDocumentFile(documentId);
    [contents] = await file.download();
  } catch (error) {
    req.log.error({ err: error, document: documentId }, "Requested PDF unavailable");
    res.status(503).json({ error: "This document is temporarily unavailable. Please try again later." });
    return;
  }

  const [request] = await db
    .insert(pdfDownloadRequestsTable)
    .values({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      document: documentId,
    })
    .returning({ id: pdfDownloadRequestsTable.id, createdAt: pdfDownloadRequestsTable.createdAt });

  try {
    await sendPdfDownloadEmail({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      document: documentInfo.label,
      requestedAt: request.createdAt,
    });
  } catch (error) {
    req.log.error({ err: error, requestId: request.id }, "PDF download notification email failed; request is recorded");
  }

  res
    .status(200)
    .set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${documentInfo.filename}"`,
      "Cache-Control": "private, no-store, max-age=0",
      Pragma: "no-cache",
      "X-Content-Type-Options": "nosniff",
    })
    .send(contents);
});

export default router;
