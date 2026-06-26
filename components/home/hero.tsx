export default function Hero() {
  return (
    <section
      style={{
        background: "var(--latte)",
        height: "100vh",
        maxHeight: "100vh",
        padding:
          "clamp(64px,9vw,128px) clamp(24px,6vw,96px) clamp(56px,8vw,112px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          gap: "clamp(40px,6vw,80px)",
        }}
      >
        <div style={{ flex: "1 1 460px", minWidth: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-2xs)",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
              color: "var(--cream-60)",
              margin: 0,
            }}
          >
            Boutique web design&nbsp;&nbsp;·&nbsp;&nbsp;West Kirby, the Wirral
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2.8rem,7vw,5.5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              margin: "24px 0 0",
            }}
          >
            <span style={{ color: "var(--cream-40)" }}>
              you're already here.
            </span>
            <br />
            so here's the work.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "clamp(1.05rem,1.4vw,1.375rem)",
              lineHeight: 1.6,
              color: "var(--cream-90)",
              maxWidth: "46ch",
              margin: "28px 0 0",
              borderLeft: "2px solid var(--cream-40)",
              paddingLeft: 20,
            }}
          >
            I design and build small, sharp websites for people who'd rather see
            results than read a brochure. No pitch deck, no discovery funnel —
            just a few things I've made, what they were for, and what the people
            who paid for them actually said.
          </p>
        </div>

        <div style={{ flex: "0 1 300px", minWidth: 240 }}>
          <div style={{ transform: "rotate(-2.2deg)" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                display: "block",
                border: "1px solid var(--cream-25)",
                borderRadius: "var(--radius-sm)",
                background: "var(--cream-10)",
              }}
            />
          </div>
          <div style={{ marginTop: 18, textAlign: "right" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-2xs)",
                fontWeight: 500,
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--cream-40)",
                margin: 0,
              }}
            >
              The designer, drawn by the designer
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#work"
        style={{
          position: "absolute",
          bottom: "clamp(28px,4vw,48px)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          color: "var(--cream-40)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-2xs)",
            fontWeight: 500,
            letterSpacing: "var(--tracking-wider)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-scroll-arrow"
        >
          <path d="M9 3v12M3 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
