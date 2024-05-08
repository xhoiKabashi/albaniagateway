import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/homepage/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albania Gateway",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} flex flex-col gap-2 justify-center items-center`}
      >
        <Header />
        <main className=" w-full h-full">{children}</main>
      </body>
    </html>
  );
}
