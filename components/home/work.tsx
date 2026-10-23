import Image from "next/image";
import PastWork from "@/components/home/past-work";

type Project = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  /** A client review, once one lands. Without it the article shows the description alone. */
  quote?: string;
  attribution?: string;
  image: string;
  reversed: boolean;
  shadow: string;
  complete: boolean;
  link: string;
};

const projects: Project[] = [
  {
    id: "proj-kanti",
    eyebrow: "01 · Ecommerce + marketing · 2026",
    title: "Kanti Skincare.",
    description:
      "A storefront for a small, family-run skincare brand built on traceable Madagascar botanicals — shop, accounts and returns, all quiet enough to let the product lead. I run their Instagram too, so every post looks like the site it points to.",
    image: "/kanti-screenshot.png",
    reversed: false,
    shadow: "",
    complete: true,
    link: "https://www.kantiskincare.com",
  },
  {
    id: "proj-thvc",
    eyebrow: "02 · Venue website · 2026",
    title: "Thornton Hough Village Club.",
    description:
      "A listening room on the Wirral, open since 1904. Gig listings, tickets, a gallery and how to find the place — built to feel like walking in on a night when the music's already started.",
    image: "/thvc-screenshot.png",
    reversed: false,
    shadow: "",
    complete: true,
    link: "https://www.thorntonhoughvillageclub.com",
  },
  {
    id: "proj-umbo",
    eyebrow: "03 · SaaS product · 2026",
    title: "umbo.",
    description:
      "My own product. umbo connects the bookings, till and bank a business already runs on, and shows what came in, what went out and what was kept. Designed, built and run end to end.",
    image: "/umbo-screenshot.png",
    reversed: false,
    shadow: "",
    complete: true,
    link: "https://www.umbo.uk",
  },
];

function VisitCta({ className = "", link }: { className?: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`items-center h-[46px] py-0 px-6 font-medium text-xs tracking-wide uppercase text-(--cream) bg-(--espresso) no-underline rounded-sm transition-[background] duration-(--dur-base) ease-(--ease-out) ${className}`}
    >
      Visit the site&#160;&#160;&rarr;
    </a>
  );
}

function ProjectArticle({
  project,
  isLast,
}: {
  project: Project;
  isLast: boolean;
}) {
  return (
    <>
      <article
        className={`flex flex-wrap gap-[clamp(36px,5vw,80px)] items-center pt-[clamp(56px,7vw,104px)] ${isLast ? "pb-0" : "pb-[clamp(56px,7vw,104px)]"}`}
      >
        <div
          className={`grow shrink basis-[420px] min-w-[300px] order-2 ${project.reversed ? "lg:order-2" : "lg:order-1"}`}
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
          className={`grow shrink basis-[360px] min-w-[300px] order-1 ${project.reversed ? "lg:order-1" : "lg:order-2"}`}
        >
          <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--mocha) m-0 mb-3">
            {project.eyebrow}
          </p>
          <h2 className="font-normal text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.01em] text-(--espresso) m-0">
            {project.title}
          </h2>
          {project.complete ? (
            <></>
          ) : (
            <span className="block mt-[6px] font-medium text-[0.625rem] tracking-wider uppercase text-(--mocha)">
              (In progress)
            </span>
          )}

          <p className="font-light text-lg leading-[1.6] text-(--espresso-60) mt-[18px] mb-7 max-w-[46ch]">
            {project.description}
          </p>

          {project.quote && (
            <div className="border-l-2 border-l-(--latte-deep) pl-[22px] mb-[30px]">
              <p className="font-normal text-[clamp(1.25rem,1.8vw,1.55rem)] leading-[1.35] tracking-[-0.01em] text-(--espresso) m-0">
                {project.quote}
              </p>
              <span className="block mt-[14px] font-medium text-[0.625rem] tracking-wider uppercase text-(--mocha)">
                {project.attribution}
              </span>
            </div>
          )}

          <VisitCta className="hidden lg:inline-flex" link={project.link} />
        </div>

        <div className="order-3 w-full flex justify-center lg:hidden">
          <VisitCta className="inline-flex" link={project.link} />
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
      <PastWork />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-[760px] mb-[clamp(48px,6vw,88px)]">
          <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--mocha) m-0 mb-[14px]">
            Selected work &#183; 2026
          </p>
          <h2 className="font-normal text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-(--espresso) m-0">
            <span className="text-(--espresso-40)">Three recent projects.</span>{" "}
            Real briefs, live sites.
            <span className="text-(--espresso-40)">
              <br />
              (Reviews on their way)
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
