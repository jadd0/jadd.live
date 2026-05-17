import Marquee from "react-fast-marquee";

export default function FirstSection() {
  return (
    <section className="min-h-[70vh] w-screen flex flex-col items-start p-4">
      <Marquee speed={75} autoFill>
        <h1 className="text-[300px] font-bold text-white whitespace-nowrap mr-20">
          Jadd Al-Khabbaz
        </h1>
        <h1 className="text-[300px] font-bold text-white whitespace-nowrap mr-20">
          Jadd Al-Khabbaz
        </h1>
        <h1 className="text-[300px] font-bold text-white whitespace-nowrap mr-20">
          Jadd Al-Khabbaz
        </h1>
      </Marquee>
      <h1 className="text-xl text-white whitespace-nowrap px-4">
        I turn "we just need a website" into "oh wow, that's our website".
      </h1>
    </section>
  );
}
