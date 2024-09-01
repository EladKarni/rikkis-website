import { navLinks } from "@/consts/navLinks";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-8 text-center flex flex-col justify-center">
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
  );
};

export default MobileNavigation;
