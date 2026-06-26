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
        className={`flex flex-wrap gap-[clamp(36px,5vw,80px)] items-center pt-[clamp(56px,7vw,104px)] ${isLast ? "pb-0" : "pb-[clamp(56px,7vw,104px)]"}`}
      >
        <div
          className={`grow shrink basis-[420px] min-w-[300px] ${project.reversed ? "order-2" : "order-1"}`}
        >
          <div className="shadow-[var(--shadow-card)] border border-(--espresso-15) rounded-sm">
            <div className="w-full aspect-[16/10] block bg-(--latte-soft) rounded-sm" />
          </div>
        </div>

        <div
          className={`grow shrink basis-[360px] min-w-[300px] ${project.reversed ? "order-1" : "order-2"}`}
        >
          <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--mocha) m-0 mb-3">
            {project.eyebrow}
          </p>
          <h2 className="font-normal text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.01em] text-(--espresso) m-0">
            {project.title}
          </h2>

          <p className="font-light text-lg leading-[1.6] text-(--espresso-60) mt-[18px] mb-7 max-w-[46ch]">
            {project.description}
          </p>

          <div className="border-l-2 border-l-(--latte-deep) pl-[22px] mb-[30px]">
            <p className="font-normal text-[clamp(1.25rem,1.8vw,1.55rem)] leading-[1.35] tracking-[-0.01em] text-(--espresso) m-0">
              {project.quote}
            </p>
            <span className="block mt-[14px] font-medium text-[0.625rem] tracking-wider uppercase text-(--mocha)">
              {project.attribution}
            </span>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-[46px] py-0 px-6 font-medium text-xs tracking-wide uppercase text-(--cream) bg-(--espresso) no-underline rounded-sm transition-[background] duration-(--dur-base) ease-(--ease-out)"
          >
            Visit the site&#160;&#160;&rarr;
          </a>
        </div>
      </article>

      {!isLast && (
        <hr className="h-px w-full border-0 m-0 bg-(--espresso-15)" />
      )}
    </>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="bg-(--oat) py-[clamp(72px,10vw,140px)] px-[clamp(24px,6vw,96px)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[760px] mb-[clamp(48px,6vw,88px)]">
          <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--mocha) m-0 mb-[14px]">
            Selected work &#183; 2024&#8211;2025
          </p>
          <h2 className="font-normal text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-(--espresso) m-0">
            <span className="text-(--espresso-40)">Three projects.</span>{" "}
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
