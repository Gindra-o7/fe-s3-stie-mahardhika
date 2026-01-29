import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Network = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#EAECEE]">
      <div className="container mx-auto px-4 md:px-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">{t("people.network.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{t("people.network.stats.0.value")}</h3>
            <p className="text-gray-600">{t("people.network.stats.0.label")}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{t("people.network.stats.1.value")}</h3>
            <p className="text-gray-600">{t("people.network.stats.1.label")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Network;
