export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--espresso)",
        padding: "clamp(80px,11vw,160px) clamp(24px,6vw,96px)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(40px,6vw,96px)",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1 1 480px", minWidth: 300 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-2xs)",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
              color: "var(--cream-40)",
              margin: "0 0 14px",
            }}
          >
            Still here?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2.2rem,5vw,4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              margin: 0,
            }}
          >
            <span style={{ color: "var(--cream-40)" }}>
              You've seen the work.
            </span>{" "}
            Let's make yours.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              color: "var(--cream-75)",
              maxWidth: "48ch",
              margin: "26px 0 0",
            }}
          >
            One project at a time, properly. Tell me what you're building and
            roughly what it needs to do — I'll tell you honestly whether I'm
            the right person for it.
          </p>
        </div>

        <div
          style={{
            flex: "0 1 auto",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignItems: "flex-start",
          }}
        >
          <a
            href="mailto:hello@jadd.live"
            className="le-btn-outline"
            style={{ height: 52, padding: "0 28px" }}
          >
            hello@jadd.live&#160;&#160;&rarr;
          </a>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-2xs)",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
              color: "var(--cream-40)",
            }}
          >
            Usually replies within a day
          </span>
        </div>
      </div>
    </section>
  );
}
