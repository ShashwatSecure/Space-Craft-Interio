"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import DiningRoomDesigns from "@/components/DiningRoomDesigns";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container>
      {pathname === "/dining-room-design" && <DiningRoomDesigns />}
      <Disclaimer />
      <Footer />
    </Container>
  );
}
