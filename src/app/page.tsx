"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import Homepage from "@/components/Homepage"; 

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      <HeroSection />
      {pathname === "/" && <Homepage />}
      <Features />
      <Disclaimer />
      <Footer />
    </Container>
  );
}
