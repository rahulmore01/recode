"use client";
import Goal from "@/components/goal/Goal";
import HeroCards from "@/components/herocards/HeroCards";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/nav/Nav";
import Solution from "@/components/solution/Solution";
import Works from "@/components/works/Works";
import Roadmap from "@/components/roadmap/Roadmap";
import Footer from "@/components/footer/Footer";
import Team from "@/components/team/Team";
import Funding from "@/components/funding/Funding";

export default function Home() {
  return (
    <div className="relative bg-background  ">
      <Nav />
      <Hero />
      <HeroCards />
      <Goal />
      <Solution />
      <Works />
      <Funding />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}
