import { client } from "@/actions/getClient";
import { faqType } from "@/types/faqType";
import About from "@/views/about/about";
import Contact from "@/views/contact/contact";
import FAQ from "@/views/faq/faq";
import Gallery, { GalleryImageType } from "@/views/gallery/gallery";
import Hero from "@/views/hero/hero";
import { Asset } from "contentful";

export default async function Home() {
  const res = await client.getEntries({ content_type: "faq" });
  const faqItems = await Promise.all(
    res.items.map(async (item) => {
      return {
        id: item.sys.id,
        question: item.fields.question as string,
        answer: item.fields.answer,
        order: item.fields.order as number,
      };
    })
  );

  const data = await client.getEntries({ content_type: "gallery" });

  const gallery_images = data.items[0].fields.album.map((image) => {
    return {
      id: image.sys.id,
      url: image.fields.file!.url, // Add null check
      title: image.fields.title,
      width: image.fields.file.details.image.width,
      height: image.fields.file.details.image.height,
    };
  });
  return (
    <main className="snap-y px-2 mx-auto max-w-[1200px] pb-8">
      <Hero />
      <About />
      <Gallery images={gallery_images as unknown as GalleryImageType[]} />
      <FAQ faqItems={faqItems as faqType[]} />
      <Contact />
    </main>
  );
}
