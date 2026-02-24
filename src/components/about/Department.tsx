import { motion } from "framer-motion";
import LogoMahardhika from "@/assets/BOLD_MAHARDHIKA.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Department = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.img
          src={LogoMahardhika}
          alt="Logo STIE Mahardhika"
          className="h-28 md:h-36 object-contain mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.h2 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-2 md:mb-3 tracking-wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          {t("department.title")}
        </motion.h2>
        <motion.p className="text-lg md:text-2xl text-gray-600 mt-1 md:mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          {t("department.subtitle")}
        </motion.p>
      </div>
    </section>
  );
};

export default Department;
