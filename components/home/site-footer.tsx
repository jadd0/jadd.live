export default function SiteFooter() {
  return (
    <footer className="bg-(--espresso) border-t border-t-(--cream-10) py-[clamp(28px,4vw,44px)] px-[clamp(24px,6vw,96px)]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-5 items-center justify-between">
        <span className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40)">
          © 2026 Jadd Al-Khabbaz · West Kirby
        </span>

        <nav className="flex flex-wrap gap-[clamp(20px,3vw,40px)]">
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
              className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-60) no-underline"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
