
import Hero from "@/components/Hero/Hero";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeServices from "@/components/Home/HomeServices";
import HomePageMarquee from "@/components/Home/HomePageMarquee";
import TheyTrust from "@/components/Home/TheyTrust";
import Team from "@/components/Home/Team";
import Testimonials from "@/components/Home/Testimonials";
import HomeCallAction from "@/components/Home/HomeCallAction";
import Image from "next/image";

export default function Home() {
  return (
   
    <>
    
    <Hero />
    <HomeAbout />
    <HomeServices />
    <HomePageMarquee />
    <TheyTrust />
    <Team />
    <Testimonials />
    <HomeCallAction />

    </>
  );
}
