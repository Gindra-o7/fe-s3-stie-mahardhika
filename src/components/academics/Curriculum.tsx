import { Trans } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Curriculum = () => {
  const { t } = useLanguage();

  const items = [0, 1, 2, 3, 4, 5];

  return (
    <section className="py-16 md:py-24 bg-white shrink-0">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <TitleText>{t("landing_curriculum.title")}</TitleText>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-5xl mx-auto md:mx-0 [&>span]:font-bold [&>span]:text-gray-900 text-left">
            <Trans i18nKey="landing_curriculum.description" components={[<span key="0" />, <span key="1" />, <span key="2" />]} />
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((index) => {
            const name = t(`landing_curriculum.items.${index}.name`);
            const lecturers = t(`landing_curriculum.items.${index}.lecturers`, { returnObjects: true }) as unknown as string[];

            return (
              <div key={index} className="bg-white border-2 border-gray-200 hover:border-[#08C9EC] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg group">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
