import Image from "next/image";
import GalleryImage1 from "/public/images/gallery1.jpg";
import GalleryImage2 from "/public/images/gallery2.jpg";
import GalleryImage3 from "/public/images/gallery3.jpeg";
import GalleryImage4 from "/public/images/gallery4.jpeg";
import GalleryImage5 from "/public/images/gallery5.jpeg";
import GalleryImage6 from "/public/images/gallery6.jpeg";

const Gallery = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {"We didn't reinvent the wheel"}
        </h2>
        <p className="font-light text-gray-500 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">
          {`We are strategists, designers and developers. Innovators and problem
          solvers. Small enough to be simple and quick, but big enough to
          deliver the scope you want at the pace you need.`}
        </p>
        <div className="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12">
          <Image
            className=" h-full object-cover col-span-2 mb-4 sm:mb-0 rounded-lg"
            src={GalleryImage1}
            alt="content gallery 1"
          />
          <Image
            className=" h-full object-cover hidden col-span-1 sm:block rounded-lg"
            src={GalleryImage2}
            alt="content gallery 2"
          />
          <Image
            className=" h-full object-cover hidden col-span-1 sm:block rounded-lg"
            src={GalleryImage3}
            alt="content gallery 3"
          />
          <Image
            className=" h-full object-cover hidden col-span-1 sm:block rounded-lg"
            src={GalleryImage4}
            alt="content gallery 4"
          />
          <Image
            className=" h-full object-cover col-span-2 rounded-lg"
            src={GalleryImage5}
            alt="content gallery 5"
          />
          <Image
            className=" h-full object-cover hidden col-span-1 sm:block rounded-lg"
            src={GalleryImage6}
            alt="content gallery 6"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
