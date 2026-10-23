import Image from "next/image";
import type { ReactNode } from "react";
import { MarqueeStrip } from "@/components/shared/marquee-strip";

// Grey and dimmed at rest, the client's own colours on hover or focus.
const MARK =
  "flex items-center gap-3 grayscale opacity-50 transition-[filter,opacity] duration-(--dur-base) ease-(--ease-out) hover:grayscale-0 hover:opacity-100 focus-visible:grayscale-0 focus-visible:opacity-100";

const sites: { name: string; href: string; mark: ReactNode }[] = [
  {
    name: "Wirral Bears Basketball Club",
    href: "https://www.wirralbears.com",
    mark: (
      <>
        <Image src="/logos/wirral-bears.png" width={378} height={400} alt="" className="h-12 w-auto" />
        <span className="font-bold text-lg tracking-[-0.01em] text-[#b3121a] whitespace-nowrap">
          Wirral Bears
        </span>
      </>
    ),
  },
  {
    name: "Kanti Skincare",
    href: "https://www.kantiskincare.com",
    mark: <Image src="/logos/kanti.png" width={1200} height={338} alt="" className="h-9 w-auto" />,
  },
  {
    name: "Thornton Hough Village Club",
    href: "https://www.thorntonhoughvillageclub.com",
    mark: (
      <span className="font-(family-name:--font-thvc) text-[22px] leading-none tracking-[0.04em] uppercase text-(--espresso) whitespace-nowrap">
        Thornton·Hough<span className="opacity-70">·Village·Club</span>
      </span>
    ),
  },
  {
    name: "umbo",
    href: "https://www.umbo.uk",
    mark: <Image src="/logos/umbo.svg" width={3223} height={730} alt="" className="h-7 w-auto" />,
  },
  {
    name: "JDB Garden Services",
    href: "https://www.jdbgardeningservices.com",
    mark: <Image src="/logos/jdb-gardening.png" width={400} height={400} alt="" className="h-14 w-auto" />,
  },
  {
    name: "GigPlan",
    href: "https://www.gigplan.co.uk",
    mark: (
      <>
        <Image src="/logos/gigplan.svg" width={512} height={512} alt="" className="h-9 w-auto rounded-lg" />
        <span className="font-bold text-xl tracking-tight whitespace-nowrap">
          <span className="text-[#1f4a38]">Gig</span>
          <span className="text-[#b5842b]">Plan</span>
        </span>
      </>
    ),
  },
  {
    name: "Crow Hockey",
    href: "https://jaypatel-chi.vercel.app/",
    mark: <Image src="/logos/crow-hockey.png" width={586} height={146} alt="" className="h-10 w-auto" />,
  },
];

export default function PastWork() {
  return (
    <div className="mb-[clamp(72px,9vw,128px)] -mx-[clamp(24px,6vw,96px)] [--wall-ground:var(--oat)] [--wall-hairline:var(--espresso-15)] [--wall-muted:var(--mocha)]">
      <div className="max-w-7xl mx-auto px-[clamp(24px,6vw,96px)]">
        <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--mocha) m-0">
          Brands I&#8217;ve worked with &#183; Hover to see them properly
        </p>
      </div>
      <MarqueeStrip
        label=""
        ruled
        monochrome={false}
        durationSeconds={45}
        className="py-10! mt-6"
        logos={sites.map((site) => (
          <a
            key={site.name}
            href={site.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${site.name}`}
            className={`${MARK} cursor-pointer no-underline`}
          >
            {site.mark}
          </a>
        ))}
      />
    </div>
  );
}
