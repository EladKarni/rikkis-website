import Image from "next/image";
import GalleryImage1 from "/public/images/gallery1.jpg";
import GalleryImage2 from "/public/images/gallery2.jpg";
import GalleryImage3 from "/public/images/gallery3.jpeg";
import GalleryImage4 from "/public/images/gallery4.jpeg";
import GalleryImage5 from "/public/images/gallery5.jpeg";
import GalleryImage6 from "/public/images/gallery6.jpeg";

const Gallery = () => {
  return (
    <section className="bg-base-100 container mx-auto">
      <div className="py-8 mx-2 max-w-screen-xl sm:text-center lg:py-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Some of our happy customers
        </h2>
        <p className="font-light text-gray-500 sm:text-lg md:px-20 lg:px-38 xl:px-48">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          explicabo nam iusto error aliquid facere vero libero, quibusdam dicta,
          autem reiciendis fugit earum id illo voluptate. Voluptatem ut vel
          culpa!
        </p>
        <div className="gap-4 mt-8 md:grid md:grid-cols-4 md:grid-rows-4 md:mt-12 w-full md:max-h-[800px]">
          <Image
            className="h-full object-cover hidden col-span-2 row-span-2 mb-4 sm:mb-0 md:block rounded-lg"
            src={GalleryImage1}
            alt="content gallery 1"
          />

          <Image
            className="h-full object-cover hidden col-span-1 row-span-2 sm:block rounded-lg"
            src={GalleryImage3}
            alt="content gallery 3"
          />
          <Image
            className="h-full object-cover hidden col-span-1 row-span-2 sm:block rounded-lg"
            src={GalleryImage4}
            alt="content gallery 4"
          />
          <Image
            className="h-full object-cover col-span-2 row-span-2 rounded-lg"
            src={GalleryImage5}
            alt="content gallery 5"
          />
          <Image
            className="h-full object-cover hidden col-span-1 row-span-1 md:block rounded-lg"
            src={GalleryImage6}
            alt="content gallery 6"
          />
          <Image
            className="h-full object-cover hidden col-span-1 row-span-3 col-start-4 row-start-1 md:block rounded-lg"
            src={GalleryImage2}
            alt="content gallery 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
