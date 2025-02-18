"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import KidsBedroomDesigns from "@/components/KidsBedroomDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/kids-bedroom-design" && <KidsBedroomDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
