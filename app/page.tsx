"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";

const Home = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col justify-between bg-black-100">
        <CustomCursor />
        <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
          <FloatingNav navItems={navItems} />
          <main className="flex-grow">
            <Hero />
            <Grid />
            <RecentProjects />
            <Approach />
            <Experience />
            <Clients />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
};

export default Home;
