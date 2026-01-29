import Header from "@/components/global/Header";
import Hero from "@/components/landing/Hero";
import Research from "@/components/landing/Research";
import Features from "@/components/landing/Features";
import Courses from "@/components/landing/Courses";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/landing/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";
import picImage from "@/assets/components/pic.png";

const Landing = () => {
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
        <Research />
        <Features />
        <Courses />
        <Testimonials />
        <div className="w-full overflow-hidden">
          <img src={picImage} alt="Picture" className="w-full h-auto -mt-20 -mb-80" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
