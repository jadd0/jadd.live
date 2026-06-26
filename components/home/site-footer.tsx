export default function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--espresso)",
        borderTop: "1px solid var(--cream-10)",
        padding: "clamp(28px,4vw,44px) clamp(24px,6vw,96px)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
          © 2026 Jadd Al-Khabbaz · West Kirby
        </span>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(20px,3vw,40px)",
          }}
        >
          {[
            { label: "Work", href: "#work" },
            { label: "Contact", href: "#contact" },
            {
              label: "GitHub",
              href: "https://github.com/jadd0",
              external: true,
            },
          ].map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-2xs)",
                fontWeight: 500,
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--cream-60)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
