import HeroSection from "@/components/HeroSection";
import HowWeBringSection from "@/components/HowWeBringSection";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhyUsSection from "@/components/WhyUsSection";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col">
     <HeroSection />
     <WhyUsSection />
     <WhatWeDoSection />
     <HowWeBringSection />
     <InfiniteCarousel />
   

      <Link className="link" href={'/about'} > About us page</Link>
      <Link className="link" href={'/blog'} > Blog page</Link>
      <Link className="link" href={'/services'} > Services page</Link>
      <Link className="link" href={'/contact'} > Contact us page</Link>
      <Link className="link" href={'/portfolio'} > Portfolio page</Link>
      <Link className="link" href={'/careers'} > Careers page</Link>
      <Link className="link" href={'/login'} > Login page</Link>
      <Link className="link" href={'/admin'} > Admin page</Link>
    </div>
  );
}
