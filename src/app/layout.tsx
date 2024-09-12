import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import NavBar from "@/components/navbar/navbar";

import "./globals.css";
import Footer from "@/components/footer/footer";
import NavLinks from "@/components/navbar/navlinks";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Three Rivers Face Painting",
  description:
    "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth bg-base-100 ">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
      </head>
      <body className={`${inter.className} grid grid-rows-[max-content_1fr] min-h-[calc(100svh)] bg-pattern`}>
        <NavBar>
          <NavLinks />
        </NavBar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
