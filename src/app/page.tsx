import About from "@/views/about/about";
import Gallery from "@/views/gallery/gallery";
import Hero from "@/views/hero/hero";
import Pricing from "@/views/pricing/pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Pricing />
    </main>
  );
}
