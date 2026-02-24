import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Tutorial = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <motion.div className="flex flex-col space-y-4 text-gray-700 leading-relaxed max-w-5xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx} className="flex gap-4">
              <span className="w-6 shrink-0 font-medium text-right">{idx + 1}.</span>
              <p className="flex-1 text-base">{t(`apply.tutorial.items.${idx}`)}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tutorial;
