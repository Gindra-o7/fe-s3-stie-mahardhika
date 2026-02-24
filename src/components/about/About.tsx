import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Column: Text */}
          <motion.div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-left md:text-justify" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="mb-4">{t("about.description")}</p>
          </motion.div>

          {/* Right Column: Title */}
          <motion.div className="w-full md:w-1/2 flex justify-start md:justify-end" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="flex flex-col items-start md:items-end w-full">
              <TitleText className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight uppercase tracking-wide text-left md:text-right">
                {t("about.title")
                  .split(" ")
                  .map((word, i) => (
                    <span key={i}>
                      {word} {i === 1 ? <br className="hidden md:block" /> : " "}
                    </span>
                  ))}
              </TitleText>
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {[0, 1, 2].map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              className="border-3 border-[#08C9EC] rounded-lg p-6 md:p-8 bg-white"
            >
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 md:mb-8" style={{ WebkitTextStroke: "1px #111827" }}>
                {t(`about.cards.${idx}.title`)}
              </h3>
              <h4 className="font-bold text-gray-900 text-base mb-2">{t(`about.cards.${idx}.subtitle`)}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{t(`about.cards.${idx}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
