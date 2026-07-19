"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/actions/contact";

const initialState = null;

export default function Contact() {
  const [state, action, pending] = useActionState(submitContact, initialState);
  const loadedAt = useRef(Date.now().toString());

  // Reset loadedAt on each render of the form (re-mount after success reset)
  useEffect(() => {
    loadedAt.current = Date.now().toString();
  }, []);

  return (
    <section
      id="contact"
      className="bg-(--espresso) py-[clamp(80px,11vw,160px)] px-[clamp(24px,6vw,96px)]"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap gap-[clamp(40px,6vw,96px)] items-start">
        {/* Left — copy */}
        <div className="grow shrink basis-[420px] min-w-[280px] pt-2">
          <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40) m-0 mb-[14px]">
            Still here?
          </p>
          <h2 className="font-normal text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-(--cream) m-0">
            <span className="text-(--cream-40)">You've seen the work.</span>{" "}
            Let's make yours.
          </h2>
          <p className="font-light text-lg leading-[1.6] text-(--cream-75) max-w-[44ch] m-0 mt-[26px]">
            One project at a time, properly. Tell me what you're building and
            roughly what it needs to do — I'll tell you honestly whether I'm
            the right person for it.
          </p>
        </div>

        {/* Right — form */}
        <div className="grow shrink basis-[400px] min-w-[280px]">
          {state?.success ? (
            <div className="flex flex-col gap-5 py-4">
              <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40) m-0">
                Message sent
              </p>
              <p className="font-normal text-[clamp(1.4rem,2.5vw,2rem)] leading-[1.15] tracking-[-0.02em] text-(--cream) m-0">
                Got it — I'll be in touch soon.
              </p>
              <p className="font-light text-base leading-[1.6] text-(--cream-60) m-0">
                Usually within a day.
              </p>
            </div>
          ) : (
            <form action={action} noValidate className="flex flex-col gap-5">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                aria-hidden="true"
                className="sr-only"
                autoComplete="off"
              />
              <input type="hidden" name="_loaded_at" value={loadedAt.current} />

              {/* Name */}
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor="cf-name"
                  className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40)"
                >
                  Name
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="h-[48px] px-4 bg-(--cream-10) border border-(--cream-15) rounded-[2px] text-(--cream) text-sm placeholder:text-(--cream-25) focus:outline-none focus:border-(--cream-40) transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor="cf-email"
                  className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40)"
                >
                  Email
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-[48px] px-4 bg-(--cream-10) border border-(--cream-15) rounded-[2px] text-(--cream) text-sm placeholder:text-(--cream-25) focus:outline-none focus:border-(--cream-40) transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor="cf-message"
                  className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40)"
                >
                  What are you building?
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the project — what it is, what it needs to do, rough timeline if you have one."
                  className="px-4 py-3 bg-(--cream-10) border border-(--cream-15) rounded-[2px] text-(--cream) text-sm leading-[1.6] placeholder:text-(--cream-25) focus:outline-none focus:border-(--cream-40) transition-colors duration-200 resize-none"
                />
              </div>

              {/* Error */}
              {state?.error && (
                <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--latte-soft) m-0">
                  {state.error}
                </p>
              )}

              {/* Submit */}
              <div className="flex items-center gap-5 mt-1">
                <button
                  type="submit"
                  disabled={pending}
                  className="le-btn-outline h-[52px] py-0 px-7 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  {pending ? "Sending…" : "Send message  →"}
                </button>
                <span className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40)">
                  Usually replies within a day
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
