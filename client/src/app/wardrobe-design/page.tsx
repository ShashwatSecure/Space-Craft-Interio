"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import WardrobeDesigns from "@/components/WardrobeDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/wardrobe-design" && <WardrobeDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
