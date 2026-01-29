import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import FeatureCard from "@/components/ui/feature-card";

const Features = () => {
  const { t } = useLanguage();

  const featureData = [
    {
      number: "01",
      title: t("features.quality"),
      description: t("features.quality.desc"),
    },
    {
      number: "02",
      title: t("features.faculty"),
      description: t("features.faculty.desc"),
    },
    {
      number: "03",
      title: t("features.facility"),
      description: t("features.facility.desc"),
    },
    {
      number: "04",
      title: t("features.quality"),
      description: t("features.quality.desc"),
    },
    {
      number: "05",
      title: t("features.faculty"),
      description: t("features.faculty.desc"),
    },
    {
      number: "06",
      title: t("features.facility"),
      description: t("features.facility.desc"),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-20">
        {/* Header */}
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("features.title")}</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">{t("features.description")}</p>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featureData.map((feature, index) => (
            <FeatureCard 
            key={feature.number} 
            number={feature.number} 
            title={feature.title} 
            description={feature.description} 
            index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <motion.button 
          className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-3 rounded-lg font-semibold transition-all" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}>
            {t("features.buttonViewAll")}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Features;
