export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-(--espresso) py-[clamp(80px,11vw,160px)] px-[clamp(24px,6vw,96px)]"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap gap-[clamp(40px,6vw,96px)] items-end justify-between">
        <div className="grow shrink basis-[480px] min-w-[300px]">
          <p className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40) m-0 mb-[14px]">
            Still here?
          </p>
          <h2 className="font-normal text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-(--cream) m-0">
            <span className="text-(--cream-40)">
              You've seen the work.
            </span>{" "}
            Let's make yours.
          </h2>
          <p className="font-light text-lg leading-[1.6] text-(--cream-75) max-w-[48ch] m-0 mt-[26px]">
            One project at a time, properly. Tell me what you're building and
            roughly what it needs to do — I'll tell you honestly whether I'm
            the right person for it.
          </p>
        </div>

        <div className="grow-0 shrink basis-auto flex flex-col gap-[18px] items-start">
          <a
            href="mailto:hello@jadd.live"
            className="le-btn-outline h-[52px] py-0 px-7"
          >
            hello@jadd.live&#160;&#160;&rarr;
          </a>
          <span className="font-medium text-[0.625rem] tracking-wider uppercase text-(--cream-40)">
            Usually replies within a day
          </span>
        </div>
      </div>
    </section>
  );
}
