import MarqueeBanner from "@/components/home/marquee-banner";
import Hero from "@/components/home/hero";
import Work from "@/components/home/work";
import Contact from "@/components/home/contact";
import SiteFooter from "@/components/home/site-footer";

export default function Home() {
  return (
    <div style={{ width: "100%", background: "var(--oat)", overflow: "hidden" }}>
      <MarqueeBanner />
      <Hero />
      <Work />
      <Contact />
      <SiteFooter />
    </div>
  );
}
