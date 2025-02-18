"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import LivingRoomDesigns from "@/components/LivingRoomDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/living-room-design" && <LivingRoomDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
