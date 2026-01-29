import { useState } from "react";
import { motion } from "framer-motion";

import { ModalRegisOnline } from "./ModalRegisOnline";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/components/landing/hero/hero.webp";

const Hero = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-20 relative z-10">
        <motion.div className="max-w-2xl text-left" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{t("hero.title")}</h1>

          <p className="text-base md:text-lg text-gray-700 mb-8">{t("hero.description")}</p>

          <div className="flex flex-wrap gap-4">
            <motion.button className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-6 py-3 rounded-lg font-semibold transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsModalOpen(true)}>
              {t("hero.cta")}
            </motion.button>

            <motion.button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {t("hero.learnMore")}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <ModalRegisOnline isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
