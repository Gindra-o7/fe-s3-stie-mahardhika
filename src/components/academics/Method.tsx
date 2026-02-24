import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Method = () => {
  const { t } = useLanguage();
  const methods = [
    {
      title: t("academic.method.items.0.title"),
      description: t("academic.method.items.0.description"),
    },
    {
      title: t("academic.method.items.1.title"),
      description: t("academic.method.items.1.description"),
    },
    {
      title: t("academic.method.items.2.title"),
      description: t("academic.method.items.2.description"),
    },
    {
      title: t("academic.method.items.3.title"),
      description: t("academic.method.items.3.description"),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="mb-12">
          <TitleText>{t("academic.method.title")}</TitleText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methods.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-black p-8 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-center min-h-45"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
