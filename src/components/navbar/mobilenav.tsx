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
        <Link
          className="font-semibold text-2xl drop-shadow-sm"
          href="#location"
        >
          Map
        </Link>
        <Link className="font-semibold text-2xl drop-shadow-sm" href="#events">
          Events
        </Link>
        <Link className="font-semibold text-2xl drop-shadow-sm" href="#story">
          Our Story
        </Link>
        <Link className="font-semibold text-2xl drop-shadow-sm" href="#menu">
          Menu
        </Link>
        <Link
          className="font-semibold text-2xl drop-shadow-sm"
          href="#contact-section"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default MobileNavigation;
