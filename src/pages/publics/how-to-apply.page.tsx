import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/landing/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";

import Hero from "@/components/how-to-apply/Hero";
import Information from "@/components/how-to-apply/Information";
import Form from "@/components/how-to-apply/Form";
import Cost from "@/components/how-to-apply/Cost";

const HowToApplyPage = () => {
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
        <Information />
        <Form />
        <Cost />
      </main>
      <Footer />
    </div>
  );
};

export default HowToApplyPage;
