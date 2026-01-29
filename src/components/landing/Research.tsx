import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Research = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white relative overflow-hidden">    
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
        className="text-center mb-16" 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}>
          <p className="text-gray-600 text-lg">{t("research.title")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
