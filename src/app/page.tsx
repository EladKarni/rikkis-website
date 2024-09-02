import { faqItems } from "@/consts/faqItems";
import About from "@/views/about/about";
import Contact from "@/views/contact/contact";
import FAQ from "@/views/faq/faq";
import Gallery from "@/views/gallery/gallery";
import Hero from "@/views/hero/hero";

export default function Home() {
  return (
    <main className="snap-y px-2 mx-auto max-w-[1200px]">
      <Hero />
      <About />
      <Gallery />
      <FAQ faqItems={faqItems} />
      <Contact />
    </main>
  );
}
