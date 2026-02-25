import pic_1 from "@/assets/components/career-opportunity/hero/pic_1.webp";

const Hero = () => {
  return (
    <section
      className="relative min-h-[50vh] md:min-h-157.5 w-full flex items-center bg-center"
      style={{
        backgroundImage: `url(${pic_1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability on mobile */}
      <div className="absolute inset-0 bg-white/40 md:hidden"></div>
    </section>
  );
};

export default Hero;
