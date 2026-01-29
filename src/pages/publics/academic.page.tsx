import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/landing/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";

import Hero from "@/components/academics/Hero";
import Vision from "@/components/academics/Vision";
import Competence from "@/components/academics/Competence";
import Curriculum from "@/components/academics/Curriculum";
import Pic from "@/components/academics/Pic";
import Method from "@/components/academics/Method";

const AcademicPage = () => {
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
        <Vision />
        <Competence />
        <Curriculum />
        <Pic />
        <Method />
      </main>
      <Footer />
    </div>
  );
};

export default AcademicPage;
