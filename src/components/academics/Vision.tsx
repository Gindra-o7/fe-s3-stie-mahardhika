import { useLanguage } from "@/contexts/LanguageContext";
import { Trans } from "react-i18next";
import { TitleText } from "@/components/ui/title-text";

const Vision = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
          {/* Left Column: Text */}
          <div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-left md:text-justify text-base md:text-lg">
            <p className="mb-4 font-medium md:font-bold">
              <Trans
                i18nKey="academic.vision.description"
                components={{
                  0: <span className="font-bold text-gray-900" />,
                }}
              />
            </p>
          </div>

          {/* Right Column: Title */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <TitleText className="text-left md:text-right">
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
