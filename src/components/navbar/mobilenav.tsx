import { useState } from "react";
import { navLinks } from "@/consts/navLinks";
import Link from "next/link";

const MobileNavMenu = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="align-middle"
        onClick={() => setIsOpenMobileMenu(true)}
        aria-label="Hambuger Nav Menu"
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
      </button>

      <div
        onClick={() => setIsOpenMobileMenu(false)}
        id="mobileMenuOverlay"
        className={`fixed top-0 right-0 w-full h-[100dvh] bg-base-200 bg-opacity-50 z-[9999999] duration-100 ${isOpenMobileMenu
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none delay-300"
          }`}
      >
        <div
          className={`w-[80%] sm:w-[300px] justify-between bg-base-200 h-full duration-300 flex flex-col float-right	${isOpenMobileMenu ? "translate-x-0 delay-200" : "translate-x-full"
            }`}
        >
          <div className="text-end mr-2 pr-2 z-50 pt-7" id="mobileMenuX">
            <span
              className="p-8 mt-[-16px] float-right max-w-[20px] text-off-white cursor-pointer"
              onClick={() => setIsOpenMobileMenu(false)}
            >
              X
            </span>
          </div>
          <ul className="menu absolute p-4 w-full min-h-full bg-base-200 gap-8 text-center flex flex-col justify-center items-center h-screen">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;