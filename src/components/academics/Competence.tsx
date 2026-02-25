import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Competence = () => {
  const { t } = useLanguage();

  const competencies = [
    {
      title: t("academic.competence.items.0.title"),
      description: t("academic.competence.items.0.description"),
    },
    {
      title: t("academic.competence.items.1.title"),
      description: t("academic.competence.items.1.description"),
    },
    {
      title: t("academic.competence.items.2.title"),
      description: t("academic.competence.items.2.description"),
    },
    {
      title: t("academic.competence.items.3.title"),
      description: t("academic.competence.items.3.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <TitleText className="text-left">{t("academic.competence.title")}</TitleText>
          <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed text-base md:text-lg mx-auto md:mx-0 text-left">{t("academic.competence.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {competencies.map((item, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#08C9EC] group">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-[#08C9EC] transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competence;
