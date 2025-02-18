"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import BedroomDesigns from "@/components/BedroomDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/bedroom-design" && <BedroomDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
