/**
 * MarqueeStrip — a full-bleed strip whose items run off BOTH edges. Moving or at
 * rest, the bleed is the point: it says "there are more of these than fit".
 *
 * **Serves two patterns.** It is `logo wall` kind B *and* `stats` kind C (the
 * ticker). Those two are structurally identical — full-bleed, clipped both edges,
 * duplicated track — and differ only in what rides the track: client marks in one,
 * `LABEL: value` pairs or news items in the other. Building it twice would have been
 * two near-identical files, so it takes `ReactNode[]` and does not care.
 *
 * Cross-site. Surveyed 10 captures for `logo wall` and 7 for `stats`
 * (see design/PATTERNS.md).
 *   zamp        §4  — centred trust statement, ~7 grey wordmarks bleeding off both
 *                     edges — "a marquee at rest" [inferred]
 *   rezolv      §2  — TWO staggered rows of ~16 logos, full colour, edge-bleeding
 *   bailey-hart §15 — a second, continuously scrolling strip, full-bleed
 *   primal-pastures §17 — 110px full-bleed strip in the ink colour, infinite run of
 *                     circular seals alternating with tracked uppercase claims
 * As a ticker:
 *   marketer   §4  — a thin, full-panel-width BORDERED strip of `LABEL: value` pairs
 *                    separated by VERTICAL RULES, scrolling, clipped both edges
 *   extantia   §4  — 64px orange band, underlined news items, black on orange
 *   webinar-brutalist §2 — 50px black band, mono uppercase items separated by `//`,
 *                    identical height at every viewport [derived]
 *   cafe-binocle §4 — 95px, set between two full-width rules
 *
 * Note the divergence worth knowing: rezolv keeps its logos in FULL COLOUR because
 * they are recognisable Indian lenders and the colour is the proof; every other
 * instance monochromes. Colour here is a decision about whether the marks are being
 * counted or being recognised.
 *
 * Motion is a plain CSS keyframe — no dependency. Respects prefers-reduced-motion,
 * which is what makes "a marquee at rest" the accessible default rather than a bug.
 *
 * Spec: design/components/logo-wall/logo-wall.md and design/components/stats/stats.md
 * Lives in components/shared/ because it serves both.   Verified: rendered 1280+390
 */
import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

export interface MarqueeStripProps {
  label?: string;
  logos?: ReactNode[];
  /** Seconds for one full pass. Slower reads calmer; 40–70s is the useful range. */
  durationSeconds?: number;
  /** rezolv runs two rows, staggered. */
  rows?: 1 | 2;
  /** Keep brand colour when the marks are meant to be recognised, not counted. */
  monochrome?: boolean;
  /** Vertical 1px rules between items — marketer's ticker; wrong for a logo wall. */
  dividers?: boolean;
  /** A hairline above and below, as cafe-binocle sets its ticker between two rules. */
  ruled?: boolean;
  className?: string;
}

export function MarqueeStrip({
  label = "Trusted by teams everywhere",
  logos = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="text-[18px] font-semibold tracking-tight">
      Client {i + 1}
    </span>
  )),
  durationSeconds = 50,
  rows = 1,
  monochrome = true,
  dividers = false,
  ruled = false,
  className = "",
}: MarqueeStripProps) {
  const track = [...logos, ...logos]; // duplicated so the loop has no seam
  return (
    <section
      className={`w-full overflow-hidden bg-[var(--wall-ground,#ffffff)] py-[56px] ${ruled ? "border-y border-[var(--wall-hairline,#e7e5df)]" : ""} ${className}`}
    >
      <style>{`
        @keyframes cw-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .cw-marquee:hover, .cw-marquee:focus-within { animation-play-state: paused !important; }
        @media (prefers-reduced-motion: reduce) { .cw-marquee { animation: none !important; } }
      `}</style>
      {label && (
        <p className="mb-[28px] px-[20px] text-center text-[13px] uppercase tracking-[0.08em] text-[var(--wall-muted,rgba(0,0,0,0.5))] md:px-[60px]">
          {label}
        </p>
      )}
      {Array.from({ length: rows }, (_, r) => (
        <div key={r} className={r === 1 ? "mt-[24px]" : ""}>
          <div
            className="cw-marquee flex w-max items-center gap-[56px]"
            style={{
              animation: `cw-marquee ${durationSeconds}s linear infinite`,
              animationDirection: r === 1 ? "reverse" : "normal",
            }}
          >
            {track.map((logo, i) => (
              <span
                key={i}
                // the second copy only closes the loop: hidden from screen readers and the tab
                // order, but still hoverable and clickable (inert would block the pointer too)
                aria-hidden={i >= logos.length || undefined}
                className={`shrink-0 ${
                  monochrome ? "text-[var(--wall-ink,rgba(0,0,0,0.55))] opacity-80" : ""
                } ${dividers ? "border-r border-[var(--wall-hairline,#e7e5df)] pr-[56px]" : ""}`}
              >
                {i >= logos.length && isValidElement(logo)
                  ? cloneElement(logo as ReactElement<{ tabIndex?: number }>, { tabIndex: -1 })
                  : logo}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default MarqueeStrip;
