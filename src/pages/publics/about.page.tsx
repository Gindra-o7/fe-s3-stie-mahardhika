import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/global/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";

import Hero from "@/components/about/Hero";
import About from "@/components/about/About";
import Testimonials from "@/components/about/Testimonials";
import Department from "@/components/about/Department";
import OurPeople from "@/components/about/OurPeople";
import ScrollToTop from "@/components/global/ScrollToTop";

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = BackgroundImage1;
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
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
        <About />
        <Testimonials />
        <OurPeople />
        <Department />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
