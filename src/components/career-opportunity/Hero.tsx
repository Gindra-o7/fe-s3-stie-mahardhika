import pic_1 from "@/assets/components/career-opportunity/hero/pic_1.webp";

const Hero = () => {
  return (
    <section
      className="relative h-157.5 w-full flex items-center"
      style={{
        backgroundImage: `url(${pic_1})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Hero;
