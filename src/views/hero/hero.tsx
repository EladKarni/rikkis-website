import Image from "next/image";
import Logo from "../../../public/logo-full.svg";
import Button from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-112px)] w-full container mx-auto gap-6 flex justify-center items-center overflow-x-hidden"
    >
      <div className="flex flex-col gap-8 my-auto mx-auto items-center w-full z-10">
        <Image
          className="aspect-square w-2/5"
          src={Logo}
          alt="text of three rivers face paiting with a brush of different colors"
          priority
        />
        <p className="font-semibold lg:text-2xl text-black/80 text-center">
          Painting smiles on kids and adults since 2011
        </p>
        <Button link="#contact">Contact</Button>
      </div>
    </section>
  );
};

export default Hero;
