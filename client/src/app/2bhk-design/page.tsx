"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import TwoBHKDesigns from "@/components/TwoBHKDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/2bhk-design" && <TwoBHKDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
