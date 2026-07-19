import MarqueeBanner from "@/components/home/marquee-banner";
import Hero from "@/components/home/hero";
import Work from "@/components/home/work";
import Contact from "@/components/home/contact";
import SiteFooter from "@/components/home/site-footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-screen">
      <Hero />
      <Work />
      <Contact />
      <SiteFooter />
    </div>
  );
}
