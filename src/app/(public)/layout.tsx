import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { NuqsAdapter } from "nuqs/adapters/react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NuqsAdapter>
        <Navbar />
        {children}
        <Footer />
      </NuqsAdapter>
    </>
  );
}
