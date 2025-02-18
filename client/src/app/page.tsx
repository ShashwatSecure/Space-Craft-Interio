"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage"; 
import InteriorDesign from "@/components/InteriorDesign"
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      <HeroSection />
      {pathname === "/" && <Homepage />}
      <Features />
      <Footer />
    </Container>
  );
}
