"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import SpaceSavingDesigns from "@/components/SpaceSavingDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/space-saving-design" && <SpaceSavingDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
