// "use client";
// import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Features from "@/components/Features";
import InteriorDesign from "@/components/InteriorDesign";

export default function Home() {
  // const pathname = usePathname();

  return (
    <Container className="min-h-screen">
      {/* {pathname === "/designs/interior-design" && <InteriorDesign />} */}
      <InteriorDesign />
      <Features />
    </Container>
  );
}
