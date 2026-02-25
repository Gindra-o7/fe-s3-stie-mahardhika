import { useLanguage } from "@/contexts/LanguageContext";

const Tutorial = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-1 md:px-20">
        <div className="flex flex-col space-y-4 md:space-y-6 text-gray-700 leading-relaxed max-w-5xl mx-auto bg-gray-50/50 p-2 sm:p-4 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
          {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx} className="flex gap-3 md:gap-5">
              <span className="w-5 md:w-8 shrink-0 font-bold text-right text-base md:text-lg text-[#08C9EC] pt-0.5">{idx + 1}.</span>
              <p className="flex-1 text-sm sm:text-base md:text-lg text-gray-700 wrap-break-word">{t(`apply.tutorial.items.${idx}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
