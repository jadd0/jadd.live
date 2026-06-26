"use client";

import Marquee from "react-fast-marquee";

const SpiralIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,255,255,0.45)"
    strokeWidth="1.4"
    style={{ flexShrink: 0 }}
  >
    <path d="M12 12a1.6 1.6 0 1 1 1.4 1.6 a3.4 3.4 0 1 1 -4-2.6 a5.6 5.6 0 1 1 8.4 5.8 a8 8 0 1 1 -11-9.6" />
  </svg>
);

export default function MarqueeBanner() {
  return (
    <div
      style={{
        width: "100%",
        background: "var(--espresso)",
        borderBottom: "1px solid var(--cream-10)",
        padding: "clamp(18px,2.6vw,34px) 0",
        overflow: "hidden",
      }}
    >
      <Marquee speed={80} autoFill pauseOnHover>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem,7vw,6rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "var(--cream)",
            whiteSpace: "nowrap",
            marginRight: "clamp(28px,4vw,64px)",
          }}
        >
          JADD AL-KHABBAZ
        </span>
        <span style={{ marginRight: "clamp(28px,4vw,64px)" }}>
          <SpiralIcon />
        </span>
      </Marquee>
    </div>
  );
}
