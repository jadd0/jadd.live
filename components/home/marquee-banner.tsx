import Marquee from "react-fast-marquee";

function Item() {
  return (
    <div className="flex items-center h-[16vh] sm:h-[22vh] lg:h-[33.33vh] [@media(min-width:1024px)_and_(max-height:720px)]:h-[clamp(80px,18vh,120px)]">
      <span className="text-[12vh] sm:text-[16vh] lg:text-[24vh] [@media(min-width:1024px)_and_(max-height:720px)]:text-[clamp(58px,13vh,88px)] leading-[16vh] sm:leading-[22vh] lg:leading-[33.33vh] [@media(min-width:1024px)_and_(max-height:720px)]:leading-[clamp(80px,18vh,120px)] tracking-[-0.02em] whitespace-nowrap text-white m-0 block">
        Jadd Al-Khabbaz
      </span>
      <span
        className="text-[12vh] sm:text-[16vh] lg:text-[24vh] [@media(min-width:1024px)_and_(max-height:720px)]:text-[clamp(58px,13vh,88px)] leading-[16vh] sm:leading-[22vh] lg:leading-[33.33vh] [@media(min-width:1024px)_and_(max-height:720px)]:leading-[clamp(80px,18vh,120px)] tracking-[-0.02em] whitespace-nowrap text-white block mx-[0.25em] my-0 select-none"
        aria-hidden="true"
      >
        •
      </span>
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="h-[16vh] sm:h-[22vh] lg:h-[33.33vh] [@media(min-width:1024px)_and_(max-height:720px)]:h-[clamp(80px,18vh,120px)] max-w-[100vw]">
      <Marquee autoFill className="h-full overflow-hidden bg-(--latte)">
        <Item />
      </Marquee>
    </div>
  );
}
