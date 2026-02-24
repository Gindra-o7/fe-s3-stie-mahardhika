import { Trans } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";
import { motion } from "framer-motion";

const Curriculum = () => {
  const { t } = useLanguage();

  const items = [0, 1, 2, 3, 4, 5];

  return (
    <section className="py-16 bg-white shrink-0">
      <div className="container mx-auto px-4 md:px-20">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <TitleText>{t("landing_curriculum.title")}</TitleText>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-5xl mt-2 [&>span]:font-extrabold [&>span]:text-gray-900">
            <Trans i18nKey="landing_curriculum.description" components={[<span key="0" />, <span key="1" />, <span key="2" />]} />
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((index) => {
            const name = t(`landing_curriculum.items.${index}.name`);
            const lecturers = t(`landing_curriculum.items.${index}.lecturers`, { returnObjects: true }) as unknown as string[];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-400 rounded-xl p-8 transition-colors"
              >
                <h3 className="text-xl font-bold text-center text-gray-900 mb-8">Curriculum {name}</h3>
                <div className="text-sm font-medium text-gray-700 mb-2">{t("landing_curriculum.taught_by", { name })}</div>
                <ul className="list-disc list-inside text-sm font-medium text-gray-700 space-y-2 ml-1">
                  {Array.isArray(lecturers) &&
                    lecturers.map((lecturer, idx) => (
                      <li key={idx} className="marker:text-gray-400">
                        {lecturer}
                      </li>
                    ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
