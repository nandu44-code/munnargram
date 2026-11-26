import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PackageSection from "@/components/Packages";
import OurStory from "@/components/OurStory";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PackageSection />
      <OurStory/>
    </>
  );
}
