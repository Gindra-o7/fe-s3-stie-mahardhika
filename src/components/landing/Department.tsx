import LogoMahardhika from "@/assets/BOLD_MAHARDHIKA.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Department = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <img src={LogoMahardhika} alt="Logo STIE Mahardhika" className="h-28 md:h-36 object-contain mb-6 md:mb-8" />
        <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-2 md:mb-3 tracking-wide">{t("department.title")}</h2>
        <p className="text-lg md:text-2xl text-gray-600 mt-1 md:mt-2">{t("department.subtitle")}</p>
      </div>
    </section>
  );
};

export default Department;
