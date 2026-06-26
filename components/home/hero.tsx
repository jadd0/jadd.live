import MarqueeBanner from "./marquee-banner";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen max-h-screen flex flex-col items-center bg-(--latte)">
      <MarqueeBanner />

      <div className="max-w-7xl my-0 mx-auto w-full flex flex-wrap items-end gap-[clamp(40px,6vw,80px)]">
        <div className="grow shrink basis-115 min-w-0">
          <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-60) m-0">
            Boutique web design&nbsp;&nbsp;·&nbsp;&nbsp;West Kirby, the Wirral
          </p>

          <h1 className="font-normal text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.02em] text-(--cream) m-0 mt-6">
            <span className="text-(--cream-40)">you're already here.</span>
            <br />
            so here's the work.
          </h1>

          <p className="font-light text-[clamp(1.05rem,1.4vw,1.375rem)] leading-[1.6] text-(--cream-90) max-w-[46ch] m-0 mt-7 border-l-2 border-l-(--cream-40) pl-5">
            I design and build boutique, sharp websites for people who'd rather
            see results than read a brochure. No pitch deck, no discovery funnel
            — just a few things I've made, what they were for, and what the
            people who paid for them actually said.
          </p>
        </div>

        <div className="grow-0 shrink basis-75 min-w-60">
          <div className="rotate-[-2.2deg]">
            <div className="absolute top-40 right-60 w-35 rotate-[15.2deg]">
              <Image src={"/arrow.jpg"} width={1254} height={1254} alt="An arrow pointing towards a portrait"/>
            </div>
            <div className="w-full aspect-4/5 block border-(--cream-25) rounded-sm ">
              <Image
                src={"/jadd-less-weird-Photoroom.jpg"}
                height={1448}
                width={1086}
                alt="Portrait of Jadd"
              />
            </div>
          </div>
          <div className="mt-[18px] text-center">
            <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40) m-0">
              Jadd Al-Khabbaz, drawn (obviously)
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#work"
        className="absolute bottom-[clamp(28px,4vw,48px)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 no-underline text-(--cream-40)"
      >
        <span className="font-medium text-[0.625rem] tracking-wider uppercase">
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
