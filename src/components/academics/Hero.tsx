import { useLanguage } from "@/contexts/LanguageContext";

import heroImage from "@/assets/components/academics/hero/hero.webp";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[50vh] md:min-h-157.5 w-full flex items-center bg-top"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability on mobile */}
      <div className="absolute inset-0 bg-white/40 md:hidden"></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-20 relative z-10 flex justify-center md:justify-end">
        <div className="max-w-2xl text-center md:text-right w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight drop-shadow-sm">{t("academic.hero.title")}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
