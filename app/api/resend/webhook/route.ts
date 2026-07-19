import { Resend } from "resend";

export const runtime = "nodejs"; // svix signature check needs Node crypto, not Edge

const resend = new Resend(process.env.RESEND_API_KEY!);

const FROM = process.env.EMAIL_FROM ?? "onboarding@resend.dev"; // must be a verified sending domain
const FORWARD_TO = "jaddalkwork@gmail.com";

export async function POST(req: Request) {
  // svix verification needs the raw body string, so read text() not json().
  const body = await req.text();

  let event;
  try {
    event = resend.webhooks.verify({
      payload: body,
      // SDK wants the three svix header values, not the Headers object.
      headers: {
        id: req.headers.get("svix-id")!,
        timestamp: req.headers.get("svix-timestamp")!,
        signature: req.headers.get("svix-signature")!,
      },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET!,
    });
  } catch {
    console.log("invalid signature");
    return new Response("invalid signature", { status: 400 });
  }

  // The endpoint may receive other subscribed events — only forward inbound mail.
  if (event.type !== "email.received") {
    return new Response("ignored", { status: 200 });
  }

  // The webhook payload is metadata only; the body must be fetched separately.
  const { data: full, error } = await resend.emails.receiving.get(
    event.data.email_id,
  );

  if (error || !full) {
    return new Response("fetch failed", { status: 502 });
  }

  const { data: sent, error: sendError } = await resend.emails.send({
    from: FROM,
    to: FORWARD_TO,
    replyTo: event.data.from,
    subject: `[Email] ${event.data.subject}`,
    html: full.html ?? undefined,
    text: full.text ?? "",
  });

  if (sendError) return new Response("send failed", { status: 502 });

  return new Response("ok");
}
