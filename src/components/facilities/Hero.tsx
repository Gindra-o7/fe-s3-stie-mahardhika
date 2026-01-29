import { motion } from "framer-motion";

import heroImage from "@/assets/components/facilities/hero/hero.webp";

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
    >
      {/* Content */}
      <div className="container mx-auto px-20 relative z-10">
        <motion.div className="max-w-2xl ml-auto text-right" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-5xl text-gray-900 mb-4 leading-tight">FASILITAS</h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
