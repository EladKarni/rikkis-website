import Image from "next/image";
import Logo from "/public/logo-full.png";
import HeroImage from "/public/images/hero.png";
import HeroMask from "/public/images/mask.svg";
import Button from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-112px)] grid md:grid-cols-2 md:w-full container mx-auto gap-6"
    >
      <div className="flex flex-col gap-8 my-auto mx-auto items-center">
        <Image
          className="aspect-square w-full"
          src={Logo}
          alt="text of three rivers face paiting with a brush of different colors"
        />
        <p className="font-semibold lg:text-2xl text-black/80 text-center">
          Painting smiles on kids and adults since 2011
        </p>
        <Button link="#contact">Contact</Button>
      </div>
      <div className="grid-col-subgrid my-auto relative hidden md:block md:col-start-2">
        <Image
          className="object-cover object-center h-full aspect-square rounded-xl"
          src={HeroImage}
          alt="little girl with face painting making claws with her hands and smiling at the camera"
        />
        <Image
          className="absolute w-full h-full z-10 top-0"
          src={HeroMask}
          alt="white mask for hero image"
        />
        <div className="w-16 h-16 lg:w-24 lg:h-24 bg-primary rounded-lg absolute -left-8 -bottom-8 lg:-left-11 lg:-bottom-11 z-20"></div>
        <div className="w-16 h-16 lg:w-24 lg:h-24 bg-primary rounded-lg absolute left-20 -top-8 lg:-bottom-16 -z-10"></div>
      </div>
    </section>
  );
};

export default Hero;
