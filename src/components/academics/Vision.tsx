import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trans } from "react-i18next";
import { TitleText } from "@/components/ui/title-text";

const Vision = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Column: Text */}
          <motion.div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-justify" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="mb-4 font-bold">
              <Trans
                i18nKey="academic.vision.description"
                components={{
                  0: <span className="font-bold text-gray-900" />,
                }}
              />
            </p>
          </motion.div>

          {/* Right Column: Title */}
          <div className="w-full md:w-1/2 flex justify-center">
            <TitleText className="text-4xl md:text-5xl leading-tight text-center md:text-left">
              {t("academic.vision.title")
                .split(" ")
                .map((word, i, arr) => (
                  <span key={i}>
                    {word} {i === Math.floor(arr.length / 2) - 1 ? <br /> : " "}
                  </span>
                ))}
            </TitleText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
