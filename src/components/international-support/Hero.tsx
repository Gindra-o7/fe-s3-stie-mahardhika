import heroImage from "@/assets/components/international-support/hero/hero.webp";

const Hero = () => {
  return (
    <section
      className="relative h-157.5 w-full flex items-center"
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
