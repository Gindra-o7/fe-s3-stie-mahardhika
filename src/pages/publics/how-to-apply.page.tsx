import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/global/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";

import Hero from "@/components/how-to-apply/Hero";
import Information from "@/components/how-to-apply/Information";
import Tutorial from "@/components/how-to-apply/Tutorial";
import Form from "@/components/how-to-apply/Form";
import Cost from "@/components/how-to-apply/Cost";

import pic_1 from "@/assets/components/how-to-apply/pic_1.webp";
import pic_2 from "@/assets/components/how-to-apply/pic_2.webp";
import ScrollToTop from "@/components/global/ScrollToTop";

const HowToApplyPage = () => {
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
        <Information />
        <div className="w-full overflow-hidden">
          <img src={pic_1} alt="Picture" className="w-full h-auto" />
        </div>
        <Tutorial />
        <Form />
        <div className="w-full overflow-hidden">
          <img src={pic_2} alt="Picture" className="w-full h-auto" />
        </div>
        <Cost />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default HowToApplyPage;
