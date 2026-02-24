import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

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
          <TitleText>{t("academic.competence.title")}</TitleText>
          <motion.p className="mt-2 text-gray-600 max-w-3xl leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
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
