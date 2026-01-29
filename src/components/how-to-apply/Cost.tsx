import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Cost = () => {
  const { t } = useLanguage();

  const costs = [
    { label: t("apply.cost.items.0.label"), value: t("apply.cost.items.0.value") },
    { label: t("apply.cost.items.1.label"), value: t("apply.cost.items.1.value") },
    { label: t("apply.cost.items.2.label"), value: t("apply.cost.items.2.value") },
  ];

  const additionalCosts = [
    { label: t("apply.cost.additional.0.label"), value: t("apply.cost.additional.0.value") },
    { label: t("apply.cost.additional.1.label"), value: t("apply.cost.additional.1.value") },
  ];

  return (
    <section className="py-20 px-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">{t("apply.cost.title")}</h2>
          <div className="h-1 bg-[#00BCD4] mt-4 w-24" />
        </div>

        <div className="w-full space-y-6">
          {/* First Row: 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {costs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg border border-black p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300 min-h-[160px]"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{item.label}</h3>
                <p className="text-gray-600 font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Second Row: 2 Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalCosts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="bg-white rounded-lg border border-black p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300 min-h-[160px]"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{item.label}</h3>
                <p className="text-gray-600 font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cost;
