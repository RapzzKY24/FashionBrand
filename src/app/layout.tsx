import type { Metadata } from "next";
import { Roboto, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "Reflect Fashion",
  description: "Clone Design Website Reflect Fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
