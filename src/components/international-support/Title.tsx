import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Title = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Column: Text */}
          <motion.div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-justify" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="mb-4 font-bold text-gray-600">{t("support.subtitle")}</p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">{t("support.description")}</p>
          </motion.div>

          {/* Right Column: Title */}
          <div className="w-full md:w-1/2 flex justify-center">
            <TitleText>{t("support.title")}</TitleText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
