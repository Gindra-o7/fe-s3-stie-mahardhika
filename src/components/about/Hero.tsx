import heroImage from "@/assets/components/about/hero/hero.webp";

const Hero = () => {
  return (
    <section
      className="relative h-[630px] w-full flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Hero;
