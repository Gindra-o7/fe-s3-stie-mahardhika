import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Competence = () => {
  const { t } = useLanguage();

  const competencies = [
    {
      title: t("academic.competence.items.0.title"),
      description: t("academic.competence.items.0.description"),
    },
    {
      title: t("academic.competence.items.1.title"),
      description: t("academic.competence.items.1.description"),
    },
    {
      title: t("academic.competence.items.2.title"),
      description: t("academic.competence.items.2.description"),
    },
    {
      title: t("academic.competence.items.3.title"),
      description: t("academic.competence.items.3.description"),
    },
  ];

  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4 md:px-20">
        <div className="mb-12">
          <motion.div className="inline-block relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">{t("academic.competence.title")}</h2>
            <motion.div className="h-1 bg-[#00BCD4] mt-4" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
          </motion.div>

          <motion.p className="mt-6 text-gray-600 max-w-3xl leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            {t("academic.competence.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competence;
