import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/global/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";

import Hero from "@/components/our-people/Hero";
import Title from "@/components/our-people/Title";
import Opportunity from "@/components/our-people/Opportunity";
import Testimonials from "@/components/our-people/Testimonials";
import Network from "@/components/our-people/Network";

const OurPeoplePage = () => {
  const [isLoading, setIsLoading] = useState(!sessionStorage.getItem('hasVisited'));

  useEffect(() => {
    const img = new Image();
    img.src = BackgroundImage1;
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 1000);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="bg-light-grey font-sans">
      <Header />
      <main>
        <Hero />
        <Title />
        <Opportunity />
        <Testimonials />
        <Network />
      </main>
      <Footer />
    </div>
  );
};

export default OurPeoplePage;
