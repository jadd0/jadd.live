"use client"
import MarqueeBanner from "./marquee-banner";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative w-screen min-h-screen lg:h-screen lg:max-h-screen flex flex-col bg-(--latte) overflow-hidden">
      <MarqueeBanner />

      <div className="flex-1 w-full px-6 sm:px-10 lg:px-0 pt-7 lg:pt-0 pb-14 lg:pb-0 [@media(min-width:1024px)_and_(max-height:720px)]:pt-4 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-[10vw] [@media(min-width:1024px)_and_(max-height:720px)]:gap-[6vw]">
        <div className="w-full max-w-xl lg:w-auto lg:max-w-none">
          <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-60) m-0">
            Boutique web design&nbsp;&nbsp;·&nbsp;&nbsp;West Kirby, the Wirral
          </p>

          <h1 className="font-normal text-[clamp(2.15rem,8.2vw,5.5rem)] [@media(min-width:1024px)_and_(max-height:720px)]:text-[clamp(2.2rem,7.5vh,3.2rem)] leading-[1.05] lg:leading-[1.02] tracking-[-0.02em] text-(--cream) m-0 mt-4 lg:mt-6 [@media(min-width:1024px)_and_(max-height:720px)]:mt-3">
            <span className="text-(--cream-40)">you're already here.</span>
            <br />
            <Typewriter
              options={{
                strings: ["so here's the work", "so take a look", "have a gander"],
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 20,
              }}
            />
          </h1>

          <p className="font-light text-[clamp(1rem,4vw,1.375rem)] lg:text-[clamp(1.05rem,1.4vw,1.375rem)] [@media(min-width:1024px)_and_(max-height:720px)]:text-[1rem] leading-[1.55] lg:leading-[1.6] [@media(min-width:1024px)_and_(max-height:720px)]:leading-[1.45] text-(--cream-90) max-w-[46ch] m-0 mt-6 lg:mt-7 [@media(min-width:1024px)_and_(max-height:720px)]:mt-4 border-l-2 border-l-(--cream-40) pl-4 lg:pl-5">
            I design and build boutique, sharp websites for people who'd rather
            see results than read a brochure. No pitch deck, no discovery funnel
            — just a few things I've made, what they were for, and what the
            people who paid for them actually said.
          </p>
        </div>

        <div className="flex flex-col items-center shrink-0">
          <div className="w-[min(56vw,15rem)] lg:w-[calc(56.67vh-6rem)] aspect-5/4 overflow-hidden border-(--cream-25) rounded-sm">
            <Image
              src={"/jadd-less-weird-Photoroom(1).jpg"}
              height={1248}
              width={1700}
              alt="Portrait of Jadd"
              className="w-full h-full object-cover block"
            />
          </div>
          <p className="mt-3 font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40) m-0 text-center">
            Jadd Al-Khabbaz, drawn (obviously)
          </p>
        </div>
      </div>

      {/* Scroll indicator — absolute on desktop, in-flow centered on mobile */}
      {/* <a
        href="#work"
        className="flex lg:absolute lg:bottom-[clamp(28px,4vw,48px)] lg:left-1/2 lg:-translate-x-1/2 flex-col items-center gap-2.5 no-underline text-(--cream-40) pb-8 lg:pb-0"
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
      </a> */}
    </section>
  );
}
