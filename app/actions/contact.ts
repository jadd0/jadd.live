'use server'

import { headers } from 'next/headers'
import { z } from 'zod'
import { Resend } from 'resend'
import { contactRatelimit } from '@/lib/ratelimit'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
})

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactResult = { success: boolean; error?: string }

export async function submitContact(
  _prev: ContactResult | null,
  formData: FormData
): Promise<ContactResult> {
  // 1. Honeypot
  if (formData.get('website')) {
    return { success: false, error: 'Bot detected.' }
  }

  // 2. Time check
  const loadedAt = formData.get('_loaded_at')
  if (!loadedAt || Date.now() - Number(loadedAt) < 3000) {
    return { success: false, error: 'Submission too fast.' }
  }

  // TODO: add Cloudflare Turnstile token verification here

  // 3. Rate limit
  const headersList = await headers()
  const forwarded = headersList.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'

  const { success: allowed, reset } = await contactRatelimit.limit(ip)
  if (!allowed) {
    const retryAfterSec = Math.ceil((reset - Date.now()) / 1000)
    return {
      success: false,
      error: `Too many submissions. Try again in ${retryAfterSec} seconds.`,
    }
  }

  // 4. Zod validation
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors
    const first = Object.values(fieldErrors).flat()[0]
    return { success: false, error: first ?? 'Invalid input.' }
  }

  const { name, email, message } = parsed.data

  console.log('Sending contact email from', email, 'with name', name, "contact emaikl is", process.env.CONTACT_EMAIL)

  // 5. Send email
  const { error: sendError } = await resend.emails.send({
    from: 'Contact Form <' + process.env.EMAIL_FROM + '>',
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  })

  console.log('Email send error:', sendError)

  if (sendError) {
    return { success: false, error: 'Failed to send message. Please try again.' }
  }

  return { success: true }
}
