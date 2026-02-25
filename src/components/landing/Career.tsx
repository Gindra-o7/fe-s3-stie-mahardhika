import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Career = () => {
  const { t } = useLanguage();

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className="py-16 bg-white shrink-0">
      <div className="container mx-auto px-4 md:px-20">
        {/* Header Section */}
        <div className="mb-12">
          <TitleText>{t("landing_career.title")}</TitleText>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((index) => {
            const title = t(`landing_career.items.${index}.title`);
            const description = t(`landing_career.items.${index}.description`);

            return (
              <div key={index} className="bg-white border-2 border-gray-400 rounded-xl p-6 md:p-8 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="font-medium text-gray-700 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
