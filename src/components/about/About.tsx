import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Column: Text */}
          <div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-left md:text-justify">
            <p className="mb-4">{t("about.description")}</p>
          </div>

          {/* Right Column: Title */}
          <div className="w-full md:w-1/2 flex justify-start md:justify-end">
            <div className="flex flex-col items-start md:items-end w-full">
              <TitleText>
                {t("about.title")
                  .split(" ")
                  .map((word, i) => (
                    <span key={i}>
                      {word} {i === 1 ? <br className="hidden md:block" /> : " "}
                    </span>
                  ))}
              </TitleText>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {[0, 1, 2].map((idx) => (
            <div key={idx} className="border-3 border-[#08C9EC] rounded-lg p-6 md:p-8 bg-white">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 md:mb-8" style={{ WebkitTextStroke: "1px #111827" }}>
                {t(`about.cards.${idx}.title`)}
              </h3>
              <h4 className="font-bold text-gray-900 text-base mb-2">{t(`about.cards.${idx}.subtitle`)}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{t(`about.cards.${idx}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
