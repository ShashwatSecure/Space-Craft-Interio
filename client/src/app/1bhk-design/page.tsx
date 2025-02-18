"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import OneBHKDesigns from "@/components/OneBHKDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/1bhk-design" && <OneBHKDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
