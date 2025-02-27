"use client";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Features from "@/components/Features";
import InteriorDesign from "@/components/InteriorDesign";

export default function Home() {
  const pathname = usePathname();

  return (
    <Container className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
      {pathname === "/interior-design" && <InteriorDesign />}
      <Features />
    </Container>
  );
}
