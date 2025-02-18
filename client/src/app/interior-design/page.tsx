"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import InteriorDesign from "@/components/InteriorDesign"
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/interior-design" && <InteriorDesign />}
      <Features />
      <Disclaimer />
      <Footer />
    </Container>
  );
}
