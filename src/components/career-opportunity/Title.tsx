import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Title = () => {
  const { t } = useLanguage();

  const leftColumnIndices = [0, 1, 2, 3, 4];
  const rightColumnIndices = [5, 6, 7, 8, 9];

  const Card = ({ index }: { index: number }) => {
    return (
      <div className="bg-white border-2 border-gray-100 hover:border-[#08C9EC] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#08C9EC] transition-colors">{t(`landing_career.items.${index}.title`)}</h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{t(`landing_career.items.${index}.description`)}</p>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex justify-center md:justify-end mb-12 md:mb-16">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <TitleText>{t("landing_career.title")}</TitleText>
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
