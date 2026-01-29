import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trans } from "react-i18next";

const Curriculum = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Column: Text */}
          <motion.div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-justify" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="mb-4">
              <Trans
                i18nKey="academic.curriculum.description"
                components={{
                  0: <span className="font-bold text-gray-900" />,
                  1: <span className="font-bold text-gray-900" />,
                  2: <span className="font-bold text-gray-900" />,
                }}
              />
            </p>
          </motion.div>

          {/* Right Column: Title */}
          <motion.div className="w-full md:w-1/2 flex justify-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight uppercase tracking-wide">
                {t("academic.curriculum.title")
                  .split(" ")
                  .map((word, i, arr) => (
                    <span key={i}>
                      {word} {i === Math.floor(arr.length / 2) - 1 ? <br /> : " "}
                    </span>
                  ))}
              </h2>
              <motion.div className="h-1.5 bg-[#00BCD4] mt-6 w-full" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
