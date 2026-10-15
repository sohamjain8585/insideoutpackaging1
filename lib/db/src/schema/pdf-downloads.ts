import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const pdfDownloadRequestsTable = pgTable("pdf_download_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  document: text("document").notNull(),
  consentedAt: timestamp("consented_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type PdfDownloadRequest = typeof pdfDownloadRequestsTable.$inferSelect;
