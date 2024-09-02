"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { navLinks } from "@/consts/navLinks";
import { useMounted } from "@/hooks/useMounted";
import clsx from "clsx";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const { y } = useWindowScroll();
  const isMounted = useMounted();
  return (
    <header
      className={clsx(
        "sticky top-0 left-0 w-full px-2 z-50 duration-200 min-w-[290px]",
        isMounted && y > 50 && "shadow-primary-900 shadow-md"
      )}
    >
      <nav className="w-full navbar p-0 bg-base-100 flex-row-reverse px-4 lg:flex-row lg:container lg:px-0 py-4 md:max-w-[1198px] mx-auto">
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
              <a
                className="btn max-w-fit bg-primary text-white px-8 hover:bg-primary/40 duration-200 hover:text-black font-semibold uppercase border-0"
                href="https://venmo.com/code?user_id=3350785886781440357&created=1694052648.623518&printed=1"
                target="_blank"
              >
                <span className=" text-lg flex justify-center align-middle">
                  Tip / Pay
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
