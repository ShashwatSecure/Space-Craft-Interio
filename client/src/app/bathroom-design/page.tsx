"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import BathroomDesigns from "@/components/BathroomDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/bathroom-design" && <BathroomDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
