"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import HomeOfficeDesigns from "@/components/HomeOfficeDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/home-office-design" && <HomeOfficeDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
