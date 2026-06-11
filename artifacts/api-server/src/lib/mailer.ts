import nodemailer from "nodemailer";

const RECIPIENT = "SJ.INSIDEOUT@gmail.com";

function createTransport() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendQuoteEmail(data: {
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  product: string;
  quantity: string;
  specifications?: string | null;
  message?: string | null;
}) {
  const transport = createTransport();
  if (!transport) return;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
      <div style="background:#0F2747;padding:24px 32px;">
        <h2 style="color:#ffffff;margin:0;font-size:20px;">New Quote Request</h2>
        <p style="color:#94a3b8;margin:4px 0 0;font-size:14px;">Inside Out Packaging Industries — Website Form</p>
      </div>
      <div style="padding:32px;background:#ffffff;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#64748b;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.email}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Phone</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.phone}</td></tr>
          ${data.company ? `<tr><td style="padding:8px 0;color:#64748b;">Company</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.company}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#64748b;">Product</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.product}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Quantity</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.quantity}</td></tr>
          ${data.specifications ? `<tr><td style="padding:8px 0;color:#64748b;">Specifications</td><td style="padding:8px 0;color:#0F2747;">${data.specifications}</td></tr>` : ""}
          ${data.message ? `<tr><td style="padding:8px 0;color:#64748b;">Message</td><td style="padding:8px 0;color:#0F2747;">${data.message}</td></tr>` : ""}
        </table>
        <div style="margin-top:24px;padding:16px;background:#f8fafc;border-radius:6px;border-left:4px solid #F97316;">
          <p style="margin:0;font-size:13px;color:#64748b;">Reply directly to this email to respond to the customer — their address is in the Reply-To header.</p>
        </div>
      </div>
    </div>
  `;

  await transport.sendMail({
    from: `"Inside Out Packaging Website" <${process.env.GMAIL_USER}>`,
    to: RECIPIENT,
    replyTo: data.email,
    subject: `[Quote Request] ${data.product} — ${data.name} (${data.company ?? data.phone})`,
    html,
  });
}

export async function sendInquiryEmail(data: {
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  product?: string | null;
  message: string;
}) {
  const transport = createTransport();
  if (!transport) return;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
      <div style="background:#0F2747;padding:24px 32px;">
        <h2 style="color:#ffffff;margin:0;font-size:20px;">New General Inquiry</h2>
        <p style="color:#94a3b8;margin:4px 0 0;font-size:14px;">Inside Out Packaging Industries — Website Form</p>
      </div>
      <div style="padding:32px;background:#ffffff;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#64748b;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.email}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Phone</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.phone}</td></tr>
          ${data.company ? `<tr><td style="padding:8px 0;color:#64748b;">Company</td><td style="padding:8px 0;font-weight:600;color:#0F2747;">${data.company}</td></tr>` : ""}
          ${data.product ? `<tr><td style="padding:8px 0;color:#64748b;">Product</td><td style="padding:8px 0;color:#0F2747;">${data.product}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#64748b;">Message</td><td style="padding:8px 0;color:#0F2747;">${data.message}</td></tr>
        </table>
        <div style="margin-top:24px;padding:16px;background:#f8fafc;border-radius:6px;border-left:4px solid #F97316;">
          <p style="margin:0;font-size:13px;color:#64748b;">Reply directly to this email to respond to the customer.</p>
        </div>
      </div>
    </div>
  `;

  await transport.sendMail({
    from: `"Inside Out Packaging Website" <${process.env.GMAIL_USER}>`,
    to: RECIPIENT,
    replyTo: data.email,
    subject: `[Inquiry] ${data.name} (${data.company ?? data.phone})`,
    html,
  });
}
