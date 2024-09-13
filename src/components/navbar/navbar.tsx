"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useWindowScroll } from "react-use";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import { useMounted } from "@/hooks/useMounted";
import MobileNavMenu from "./mobilenav";

interface NavBarProps {
  children?: ReactNode;
}

const NavBar: FC<NavBarProps> = ({ children }) => {
  const { y } = useWindowScroll();
  const isMounted = useMounted();
  return (
    <header
      className={clsx(
        "sticky top-0 left-0 w-full px-2 z-30 duration-200 min-w-[290px]",
        isMounted && y > 50 && "shadow-primary-900 shadow-md"
      )}
    >
      <div className="w-full divbar p-0 bg-base-100 flex-row-reverse px-4 lg:flex-row lg:container lg:px-0 py-4 md:max-w-[1198px] mx-auto">

        <div className="flex justify-between items-center relative">
          <div className="flex-1">
            <Link href="/">
              <Image src={Logo} alt="Three Rivvers Face Painting logo" width={64} priority />
            </Link>
          </div>

          <MobileNavMenu />
          <div className="flex-none lg:hidden">
          </div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
