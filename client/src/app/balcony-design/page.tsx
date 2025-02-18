"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import BalconyDesigns from "@/components/BalconyDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/balcony-design" && <BalconyDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
