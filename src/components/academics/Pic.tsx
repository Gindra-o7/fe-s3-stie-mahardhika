import heroImage from "@/assets/components/academics/pic/pic.webp";

const Pic = () => {
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

export default Pic;
