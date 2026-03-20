import nodemailer from 'nodemailer';

const REQUIRED_FIELDS = ['name', 'email', 'message'];

const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildEnquiryHtml = ({ name, email, phone, enquiryType, message }) => `
  <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
    <h2 style="margin: 0 0 12px;">New Website Enquiry</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <tr>
        <td style="font-weight: 600; width: 140px;">Name</td>
        <td>${escapeHtml(name)}</td>
      </tr>
      <tr>
        <td style="font-weight: 600;">Email</td>
        <td>${escapeHtml(email)}</td>
      </tr>
      <tr>
        <td style="font-weight: 600;">Phone</td>
        <td>${escapeHtml(phone || 'Not provided')}</td>
      </tr>
      <tr>
        <td style="font-weight: 600;">Enquiry Type</td>
        <td>${escapeHtml(enquiryType || 'General')}</td>
      </tr>
    </table>
    <div style="margin-top: 18px;">
      <p style="font-weight: 600; margin: 0 0 6px;">Message</p>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px;">
        ${escapeHtml(message).replace(/\n/g, '<br />')}
      </div>
    </div>
  </div>
`;

const buildConfirmationHtml = ({ name }) => `
  <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
    <h2 style="margin: 0 0 12px;">We received your enquiry</h2>
    <p>Hi ${escapeHtml(name)},</p>
    <p>
      Thank you for reaching out to LifeMate Healthcare Pvt Ltd. Our team will review your message and
      get back to you shortly.
    </p>
    <p style="margin-top: 16px;">Warm regards,<br />LifeMate Healthcare Pvt Ltd</p>
  </div>
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!process.env.VERCEL) {
      try {
        const dotenv = await import('dotenv');
        dotenv.config();
      } catch {
        // Ignore if dotenv is not available; envs may already be injected.
      }
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, phone, enquiryType, message } = body || {};

    const missingRequired = REQUIRED_FIELDS.filter((field) => !String(body?.[field] || '').trim());
    if (missingRequired.length) {
      return res.status(400).json({ error: `Missing required fields: ${missingRequired.join(', ')}` });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const smtpHost = (process.env.SMTP_HOST || '').trim();
    const smtpPort = Number((process.env.SMTP_PORT || '587').trim());
    const smtpUser = (process.env.SMTP_USER || '').trim();
    const smtpPass = (process.env.SMTP_PASS || '').trim();
    const smtpFrom = (process.env.SMTP_FROM || smtpUser).trim();

    const missing = [];
    if (!smtpHost) missing.push('SMTP_HOST');
    if (!smtpUser) missing.push('SMTP_USER');
    if (!smtpPass) missing.push('SMTP_PASS');
    if (!smtpFrom) missing.push('SMTP_FROM');

    if (missing.length) {
      return res.status(500).json({
        error: `Server email configuration is incomplete: ${missing.join(', ')}`,
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const enquiryHtml = buildEnquiryHtml({ name, email, phone, enquiryType, message });
    const confirmationHtml = buildConfirmationHtml({ name });

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpUser,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: enquiryHtml,
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: email,
      subject: 'We received your enquiry',
      html: confirmationHtml,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Enquiry API error:', error);
    return res.status(500).json({ error: 'Failed to send enquiry' });
  }
}
