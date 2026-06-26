const LDQUO = "“";
const RDQUO = "”";

const projects = [
  {
    id: "proj-northshore",
    eyebrow: "01 · Ecommerce · 2025",
    title: "Northshore Coffee Roasters",
    description:
      "A storefront for a Wirral roaster who was tired of paying Shopify to slow his site down. Built lean, loads instantly, sells beans without getting in the way.",
    quote:
      LDQUO + "Online sales nearly doubled the first month, and I haven't had to touch it since. He just got what I wanted." + RDQUO,
    attribution: "Dan M. — Owner, Northshore Roasters",
    reversed: false,
  },
  {
    id: "proj-studio12",
    eyebrow: "02 · Landing page · 2025",
    title: "Studio Twelve",
    description:
      "A single page for a fitness studio in Hoylake with exactly one job: turn a click into a booked trial class. Everything that didn't serve that job got cut.",
    quote:
      LDQUO + "Trial bookings went up the week it went live. Clean, fast, and he didn't try to sell me things I didn't need." + RDQUO,
    attribution: "Priya K. — Founder, Studio Twelve",
    reversed: true,
  },
  {
    id: "proj-marsh",
    eyebrow: "03 · Product site · 2024",
    title: "Marsh & Co.",
    description:
      "A product site for a small homeware brand launching their first collection. Quiet, editorial, and built so they could add products themselves without calling me every week.",
    quote:
      LDQUO + "It looks like a brand ten times our size. Customers mention the site constantly — that never happened before." + RDQUO,
    attribution: "Sophie & Tom — Marsh & Co.",
    reversed: false,
  },
];

function ProjectArticle({
  project,
  isLast,
}: {
  project: (typeof projects)[0];
  isLast: boolean;
}) {
  return (
    <>
      <article
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(36px,5vw,80px)",
          alignItems: "center",
          paddingTop: "clamp(56px,7vw,104px)",
          paddingBottom: isLast ? 0 : "clamp(56px,7vw,104px)",
        }}
      >
        <div
          style={{
            flex: "1 1 420px",
            minWidth: 300,
            order: project.reversed ? 2 : 1,
          }}
        >
          <div
            style={{
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--espresso-15)",
              borderRadius: "var(--radius-sm)",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                display: "block",
                background: "var(--latte-soft)",
                borderRadius: "var(--radius-sm)",
              }}
            />
          </div>
        </div>

        <div
          style={{
            flex: "1 1 360px",
            minWidth: 300,
            order: project.reversed ? 1 : 2,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-2xs)",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
              color: "var(--mocha)",
              margin: "0 0 12px",
            }}
          >
            {project.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.8rem,3vw,2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "var(--espresso)",
              margin: 0,
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              color: "var(--espresso-60)",
              margin: "18px 0 28px",
              maxWidth: "46ch",
            }}
          >
            {project.description}
          </p>

          <div
            style={{
              borderLeft: "2px solid var(--latte-deep)",
              paddingLeft: 22,
              marginBottom: 30,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.25rem,1.8vw,1.55rem)",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
                color: "var(--espresso)",
                margin: 0,
              }}
            >
              {project.quote}
            </p>
            <span
              style={{
                display: "block",
                marginTop: 14,
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-2xs)",
                fontWeight: 500,
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--mocha)",
              }}
            >
              {project.attribution}
            </span>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 46,
              padding: "0 24px",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "var(--cream)",
              background: "var(--espresso)",
              textDecoration: "none",
              borderRadius: "var(--radius-sm)",
              transition: "background var(--dur-base) var(--ease-out)",
            }}
          >
            Visit the site&#160;&#160;&rarr;
          </a>
        </div>
      </article>

      {!isLast && (
        <hr
          style={{
            height: 1,
            width: "100%",
            border: 0,
            margin: 0,
            background: "var(--espresso-15)",
          }}
        />
      )}
    </>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      style={{
        background: "var(--oat)",
        padding: "clamp(72px,10vw,140px) clamp(24px,6vw,96px)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{ maxWidth: 760, marginBottom: "clamp(48px,6vw,88px)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-2xs)",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
              color: "var(--mocha)",
              margin: "0 0 14px",
            }}
          >
            Selected work &#183; 2024&#8211;2025
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2.2rem,5vw,4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--espresso)",
              margin: 0,
            }}
          >
            <span style={{ color: "var(--espresso-40)" }}>Three projects.</span>{" "}
            Real briefs, honest feedback.
          </h2>
        </div>

        {projects.map((project, i) => (
          <ProjectArticle
            key={project.id}
            project={project}
            isLast={i === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
