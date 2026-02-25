import { useLanguage } from "@/contexts/LanguageContext";
import pic_1 from "@/assets/components/landing/quotes/pic_1.webp";

const Quotes = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#08C9EC]/8 shrink-0 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-20 min-h-100 md:min-h-125 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        {/* Left Col - Text */}
        <div className="w-full md:w-1/2 pt-16 md:pt-0 flex items-center justify-center md:justify-start md:pl-10 lg:pl-16 xl:pl-20">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#08C9EC] uppercase tracking-wide text-center md:text-left leading-tight drop-shadow-sm whitespace-nowrap" style={{ WebkitTextStroke: "1px #08C9EC" }}>
            {t("landing_quotes.title")}
          </h1>
        </div>

        {/* Right Col - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end self-end pt-8 md:pt-16 pointer-events-none">
          <img src={pic_1} alt="Students" className="w-[85%] sm:w-[70%] md:w-[90%] lg:w-[85%] max-w-150 h-auto object-contain object-bottom -mb-2" />
        </div>
      </div>
    </section>
  );
};

export default Quotes;
