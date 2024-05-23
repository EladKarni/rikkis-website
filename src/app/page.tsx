import About from "@/views/about/about";
import Contact from "@/views/contact/contact";
import FAQ from "@/views/faq/faq";
import Gallery from "@/views/gallery/gallery";
import Hero from "@/views/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  );
}
