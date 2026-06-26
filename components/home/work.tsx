import Image from "next/image";

const LDQUO = "“";
const RDQUO = "”";

const projects = [
  {
    id: "proj-crowhockey",
    eyebrow: "01 · Ecommerce · 2026",
    title: "Crow Hockey.",
    description:
      "A rebuilt storefront for a community-based hockey shop. Built lean, loads instantly, sells sticks without getting in the way.",
    quote:
      LDQUO +
      "Online sales nearly doubled the first month, and I haven't had to touch it since. He just got what I wanted." +
      RDQUO,
    attribution: "Jay P. — Owner, Crow Hockey",
    image: "/crow-hockey-screenshot.png",
    reversed: false,
    shadow: "black",
  },
  {
    id: "proj-littleeye",
    eyebrow: "02 · Landing page · 2026",
    title: "Little Eye Coffee.",
    description:
      "A landing page for a unique coffee shop in West Kirby with exactly one job: match the brand aesthetic. Everything that didn't serve that job got cut.",
    quote:
      LDQUO +
      "Walk-ins went up the week it went live. Clean, fast, and he didn't try to sell me things I didn't need." +
      RDQUO,
    attribution: "Person K. — Owner, Little Eye Coffee",
    image: "/little-eye-screenshot.png",
    reversed: true,
    shadow: "",
  },
  {
    id: "proj-dalamanairporttransfers",
    eyebrow: "03 · Service site · 2026",
    title: "24/7 Dalaman Airport Transfers.",
    description:
      "A service site for an airports tranfers company in Dalaman, Turkey. Built to convert, with both Turkish and English translations.",
    quote:
      LDQUO +
      "It looks like a brand ten times our size. Customers mention the site constantly — that never happened before." +
      RDQUO,
    attribution: "Mert D. — 24/7 Dalaman Airport Transfers",
    image: "/247dalamanairporttransfers-screenshot.png",
    reversed: false,
    shadow: "",
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
          <div className="relative">
            {project.image ? (
              <>
                <div className="absolute inset-[-12px] blur-3xl opacity-100 pointer-events-none rounded-sm overflow-hidden">
                  <Image
                    src={project.image}
                    width={1905}
                    height={937}
                    alt=""
                    className="w-full block"
                  />
                </div>
                <div className="relative rounded-sm overflow-hidden">
                  <Image
                    src={project.image}
                    width={1905}
                    height={937}
                    alt={project.title}
                    className="w-full block"
                  />
                </div>
              </>
            ) : (
              <div className="w-full aspect-16/10 bg-(--latte-soft) animate-pulse rounded-sm" />
            )}
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
            Selected work &#183; 2026
          </p>
          <h2 className="font-normal text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-(--espresso) m-0">
            <span className="text-(--espresso-40)">Three projects.</span> Real
            briefs, honest feedback.
            <span className="text-(--espresso-40)">
              <br />
              (It's always positive)
            </span>
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
