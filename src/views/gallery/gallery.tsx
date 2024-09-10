import Image from "next/image";

export type GalleryImageType = {
  id: string;
  url: string;
  title: string;
  width: number;
  height: number;
};

type GalleryProps = {
  images: GalleryImageType[];
};

const Gallery = ({ images }: GalleryProps) => {
  return (
    <section
      id="gallery"
      className="bg-base-100 container mx-auto scroll-mt-[100px]"
    >
      <div className="py-8 max-w-screen-xl sm:text-center lg:py-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Some of our happy customers
        </h2>
        <p className="font-semilight text-gray-700 sm:text-lg md:px-20 lg:px-38 xl:px-48">
          These are just a few of the designs offered at events. You&apos;ll
          notice some of the designs are more intricate or more simple,
          depending on how big the party is. We cater to your needs and how
          wiggly the kid is!
          <br />
          <br />
          <i className="text-gray-500">
            Please note, all photos of childen are posted with their
            grown-up&apos;s permission.
          </i>
        </p>
        <div className="flex gap-4 mt-8 md:grid md:grid-cols-4 md:grid-rows-4 md:mt-12 w-full md:max-h-[800px] overflow-x-scroll">
          <Image
            className="h-full object-cover hidden col-span-2 row-span-2 mb-4 sm:mb-0 md:block rounded-lg"
            src={`https:${images[0].url}`}
            width={images[0].width}
            height={images[0].height}
            alt={images[0].title}
          />
          <Image
            className="h-full object-cover hidden col-span-1 row-span-2 sm:block rounded-lg"
            src={`https:${images[1].url}`}
            width={images[1].width}
            height={images[1].height}
            alt={images[1].title}
          />
          <Image
            className="object-cover max-w-[80vw] col-span-1 row-span-2 sm:block rounded-lg"
            src={`https:${images[2].url}`}
            width={images[2].width}
            height={images[2].height}
            alt={images[2].title}
          />
          <Image
            className="h-full object-cover col-span-2 row-span-2 rounded-lg"
            src={`https:${images[3].url}`}
            width={images[3].width}
            height={images[3].height}
            alt={images[3].title}
          />
          <Image
            className="h-full object-cover col-span-1 row-span-1 md:block rounded-lg"
            src={`https:${images[4].url}`}
            width={images[4].width}
            height={images[4].height}
            alt={images[4].title}
          />
          <Image
            className="h-full object-cover col-span-1 row-span-3 col-start-4 row-start-1 md:block rounded-lg"
            src={`https:${images[5].url}`}
            width={images[5].width}
            height={images[5].height}
            alt={images[5].title}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
