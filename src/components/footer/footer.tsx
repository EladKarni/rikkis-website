import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/bw-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col justify-center items-center py-2">
      <Link href="/" className="text-white font-bold text-2xl">
        <Image
          src={Logo}
          alt="logo for face painting by rikki"
          width={96}
          className="m-4 mb-4"
        />
      </Link>
      <div className="p-2 text-center text-base-100 font-light">
        <p>&copy; 2024 Face Painting by Rikki. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
