import Marquee from "react-fast-marquee";

function Item() {
  return (
    <div className="flex items-center h-[33.33vh]">
      <span className="text-[24vh] leading-[33.33vh] tracking-[-0.02em] whitespace-nowrap text-white m-0 block">
        Jadd Al-Khabbaz
      </span>
      <span
        className="text-[24vh] leading-[33.33vh] tracking-[-0.02em] whitespace-nowrap text-white block mx-[0.25em] my-0 select-none"
        aria-hidden="true"
      >
        •
      </span>
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="h-[33.33vh] max-w-[100vw]">
      <Marquee autoFill className="h-full overflow-hidden bg-(--latte)">
        <Item />
      </Marquee>
    </div>
  );
}
