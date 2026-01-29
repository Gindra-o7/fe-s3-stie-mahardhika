import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

import heroImage from "@/assets/components/how-to-apply/hero/hero.webp";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative h-[630px] w-full flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-40 relative z-10">
        <motion.div className="max-w-2xl ml-auto text-right" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-5xl text-white mb-4 leading-tight">{t("apply.hero.title")}</h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
