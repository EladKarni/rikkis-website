import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Drawer from "@/components/drawer/drawer";

import "./globals.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Face Painting by Rikki",
  description:
    "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth bg-base-100">
      <body className={inter.className}>
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}
