import { useLanguage } from "@/contexts/LanguageContext";

import heroImage from "@/assets/components/how-to-apply/hero/hero.webp";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[50vh] md:min-h-157.5 w-full flex items-center bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Overlay for better readability on mobile */}
      <div className="absolute inset-0 bg-black/40 md:hidden"></div>
      {/* Content */}
      <div className="w-full px-6 md:px-20 relative z-10 flex justify-center md:justify-end">
        <div className="max-w-2xl text-center md:text-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 leading-tight drop-shadow-md">{t("apply.hero.title")}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
