import { Storage, type File } from "@google-cloud/storage";

const SIDECAR_ENDPOINT = "http://127.0.0.1:1106";

const storage = new Storage({
  credentials: {
    audience: "replit",
    subject_token_type: "access_token",
    token_url: `${SIDECAR_ENDPOINT}/token`,
    type: "external_account",
    credential_source: {
      url: `${SIDECAR_ENDPOINT}/credential`,
      format: {
        type: "json",
        subject_token_field_name: "access_token",
      },
    },
    universe_domain: "googleapis.com",
  },
  projectId: "",
});

export const downloadableDocuments = {
  catalogue: {
    label: "Catalogue",
    filename: "inside-out-packaging-catalogue.pdf",
    objectName: "website-documents/barcode-printers/catalogue.pdf",
  },
  "company-profile": {
    label: "Company Profile",
    filename: "inside-out-packaging-company-profile.pdf",
    objectName: "website-documents/barcode-printers/company-profile.pdf",
  },
} as const;

export type DownloadableDocumentId = keyof typeof downloadableDocuments;

export async function getPrivateDocumentFile(
  documentId: DownloadableDocumentId,
): Promise<File> {
  const privateObjectDir = process.env.PRIVATE_OBJECT_DIR?.trim();
  if (!privateObjectDir) {
    throw new Error("Private document storage is not configured.");
  }

  const parts = privateObjectDir.replace(/^\/+|\/+$/g, "").split("/");
  const bucketName = parts.shift();
  if (!bucketName || parts.length === 0) {
    throw new Error("Private document storage path is invalid.");
  }

  const objectName = [...parts, downloadableDocuments[documentId].objectName].join("/");
  const file = storage.bucket(bucketName).file(objectName);
  const [exists] = await file.exists();
  if (!exists) {
    throw new Error(`Private document ${documentId} is not available.`);
  }
  return file;
}
