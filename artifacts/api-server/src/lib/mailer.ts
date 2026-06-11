import nodemailer from "nodemailer";

const RECIPIENT = "SJ.INSIDEOUT@gmail.com";

function createTransport() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.warn("[mailer] GMAIL_USER or GMAIL_APP_PASSWORD not set — email disabled");
    return null;
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

const row = (label: string, value: string) =>
  `<tr>
    <td style="padding:10px 0;color:#64748b;width:150px;vertical-align:top;font-size:14px;">${label}</td>
    <td style="padding:10px 0;font-weight:600;color:#0F2747;font-size:14px;">${value}</td>
  </tr>`;

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

  const rows = [
    row("Name", data.name),
    row("Email", data.email),
    row("Phone", data.phone),
    data.company ? row("Company", data.company) : "",
    row("Product Interested", data.product),
    row("Quantity Required", data.quantity),
    data.specifications ? row("Specifications", data.specifications) : "",
    data.message ? row("Additional Info", data.message) : "",
  ].join("");

  const html = `
<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;">
  <div style="background:#0F2747;padding:28px 32px;border-radius:8px 8px 0 0;">
    <div style="color:#F97316;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">Inside Out Packaging Industries</div>
    <h2 style="color:#ffffff;margin:0;font-size:22px;">New Quote Request</h2>
    <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">Received from website contact form</p>
  </div>
  <div style="padding:32px;background:#ffffff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
    <table style="width:100%;border-collapse:collapse;">${rows}</table>
    <div style="margin-top:28px;padding:16px 20px;background:#fff7ed;border-radius:6px;border-left:4px solid #F97316;">
      <p style="margin:0;font-size:13px;color:#92400e;font-weight:600;">How to reply</p>
      <p style="margin:6px 0 0;font-size:13px;color:#78350f;">Hit <strong>Reply</strong> in your email client — it will go directly to <strong>${data.email}</strong></p>
    </div>
  </div>
</div>`;

  await transport.sendMail({
    from: `"Inside Out Packaging — Website" <${process.env.GMAIL_USER}>`,
    to: RECIPIENT,
    replyTo: data.email,
    subject: `[QUOTE] ${data.product} — ${data.name}${data.company ? ` · ${data.company}` : ""}`,
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

  const rows = [
    row("Name", data.name),
    row("Email", data.email),
    row("Phone", data.phone),
    data.company ? row("Company", data.company) : "",
    data.product ? row("Product Interest", data.product) : "",
    row("Message", data.message),
  ].join("");

  const html = `
<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;">
  <div style="background:#0F2747;padding:28px 32px;border-radius:8px 8px 0 0;">
    <div style="color:#F97316;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">Inside Out Packaging Industries</div>
    <h2 style="color:#ffffff;margin:0;font-size:22px;">New General Inquiry</h2>
    <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">Received from website contact form</p>
  </div>
  <div style="padding:32px;background:#ffffff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
    <table style="width:100%;border-collapse:collapse;">${rows}</table>
    <div style="margin-top:28px;padding:16px 20px;background:#fff7ed;border-radius:6px;border-left:4px solid #F97316;">
      <p style="margin:0;font-size:13px;color:#92400e;font-weight:600;">How to reply</p>
      <p style="margin:6px 0 0;font-size:13px;color:#78350f;">Hit <strong>Reply</strong> — it will go directly to <strong>${data.email}</strong></p>
    </div>
  </div>
</div>`;

  await transport.sendMail({
    from: `"Inside Out Packaging — Website" <${process.env.GMAIL_USER}>`,
    to: RECIPIENT,
    replyTo: data.email,
    subject: `[INQUIRY] ${data.name}${data.company ? ` · ${data.company}` : ""} — ${data.phone}`,
    html,
  });
}
