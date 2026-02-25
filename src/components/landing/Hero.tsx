import { useState } from "react";
import { ModalRegisOnline } from "./ModalRegisOnline";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/components/landing/hero/hero.webp";

const Hero = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative min-h-125 md:min-h-150 flex items-center bg-position-[70%_center] md:bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/70 md:hidden"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{t("hero.title")}</h1>

          <p className="text-base md:text-lg text-gray-700 mb-8">{t("hero.description")}</p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-6 py-3 rounded-lg font-semibold transition-all" onClick={() => setIsModalOpen(true)}>
              {t("hero.cta")}
            </button>

            <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">{t("hero.learnMore")}</button>
          </div>
        </div>
      </div>

      <ModalRegisOnline isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
