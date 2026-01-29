import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/landing/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";

import Hero from "@/components/about/Hero";
import About from "@/components/about/About";

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
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
