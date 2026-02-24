import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Title = () => {
  const { t } = useLanguage();

  const leftColumnIndices = [0, 1, 2, 3, 4];
  const rightColumnIndices = [5, 6, 7, 8, 9];

  const Card = ({ index }: { index: number }) => {
    return (
      <motion.div
        className="bg-white border-2 border-gray-800 rounded-lg p-6 md:p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
      >
        <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">{t(`landing_career.items.${index}.title`)}</h3>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{t(`landing_career.items.${index}.description`)}</p>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex justify-end mb-16">
          <div className="w-full md:w-1/2 flex justify-end">
            <TitleText className="text-3xl md:text-4xl text-right">{t("landing_career.title")}</TitleText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            {leftColumnIndices.map((idx) => (
              <Card key={idx} index={idx} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {rightColumnIndices.map((idx) => (
              <Card key={idx} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
