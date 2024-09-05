import { getFAQ } from "@/actions/getFAQItems";
import About from "@/views/about/about";
import Contact from "@/views/contact/contact";
import FAQ from "@/views/faq/faq";
import Gallery from "@/views/gallery/gallery";
import Hero from "@/views/hero/hero";

export default async function Home() {
  const faqData = await getFAQ();
  return (
    <main className="snap-y px-2 mx-auto max-w-[1200px] pb-8">
      <Hero />
      <About />
      <Gallery />
      <FAQ faqItems={faqData} />
      <Contact />
    </main>
  );
}
