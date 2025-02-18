"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import ThreeBHKDesigns from "@/components/ThreeBHKDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/3bhk-design" && <ThreeBHKDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
