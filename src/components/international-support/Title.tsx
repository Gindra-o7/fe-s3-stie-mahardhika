import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Title = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
          {/* Left Column: Text */}
          <div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-left md:text-justify">
            <p className="mb-4 font-bold text-gray-800 text-lg md:text-xl">{t("support.subtitle")}</p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">{t("support.description")}</p>
          </div>

          {/* Right Column: Title */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <TitleText className="text-left">{t("support.title")}</TitleText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
