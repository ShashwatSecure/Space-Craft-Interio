import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
    to: string;
    subject: string;
    html: string;
}

async function sendEmail({ to, subject, html }: SendEmailProps) {
  await resend.emails.send({
    from: 'service@mdrehandeveloper.xyz',
    to: [to],
    subject: subject,
    html: html,
  });
}

export default sendEmail