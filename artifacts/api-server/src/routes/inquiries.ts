import { Router, type IRouter } from "express";
import { db, inquiriesTable, quotesTable } from "@workspace/db";
import { SubmitInquiryBody, SubmitQuoteBody } from "@workspace/api-zod";
import { sendInquiryEmail, sendQuoteEmail } from "../lib/mailer.js";

const router: IRouter = Router();

router.post("/inquiries", async (req, res): Promise<void> => {
  const parsed = SubmitInquiryBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [inquiry] = await db
    .insert(inquiriesTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      company: parsed.data.company ?? null,
      product: parsed.data.product ?? null,
      message: parsed.data.message,
      type: "inquiry",
    })
    .returning();

  req.log.info({ id: inquiry.id }, "Inquiry submitted");

  // Send email — awaited so errors are logged; DB record is already saved so form still succeeds
  try {
    await sendInquiryEmail(parsed.data);
    req.log.info({ id: inquiry.id }, "Inquiry email sent");
  } catch (err) {
    req.log.error({ err, id: inquiry.id }, "Inquiry email failed — DB record saved");
  }

  res.status(201).json({
    id: inquiry.id,
    success: true,
    message: "Thank you for your inquiry. We will get back to you shortly.",
  });
});

router.post("/inquiries/quote", async (req, res): Promise<void> => {
  const parsed = SubmitQuoteBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [quote] = await db
    .insert(quotesTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      company: parsed.data.company ?? null,
      product: parsed.data.product,
      quantity: parsed.data.quantity,
      specifications: parsed.data.specifications ?? null,
      message: parsed.data.message ?? null,
    })
    .returning();

  req.log.info({ id: quote.id }, "Quote request submitted");

  try {
    await sendQuoteEmail(parsed.data);
    req.log.info({ id: quote.id }, "Quote email sent");
  } catch (err) {
    req.log.error({ err, id: quote.id }, "Quote email failed — DB record saved");
  }

  res.status(201).json({
    id: quote.id,
    success: true,
    message: "Your quote request has been received. We will send you a quote within 24 hours.",
  });
});

export default router;
