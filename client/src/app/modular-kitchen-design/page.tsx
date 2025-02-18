"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import ModularKitchenDesigns from "@/components/ModularKitchenDesigns";
import Disclaimer from "@/components/Disclaimer";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/modular-kitchen-design" && <ModularKitchenDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
