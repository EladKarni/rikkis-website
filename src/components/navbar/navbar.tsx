import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { navLinks } from "@/consts/navLinks";
import Button from "../ui/button";

const Navbar = () => {
  return (
    <nav className="w-full navbar p-0 bg-base-100 flex-row-reverse px-4 lg:flex-row lg:container lg:px-0  py-4 mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <Link href="/">
          <Image src={Logo} alt="silver perk coffee logo" width={96} />
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal gap-8 px-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="relative text-center font-semibold text-lg w-fit my-auto block mb-0"
                href={link.url}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button link="#contact">Contact</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
