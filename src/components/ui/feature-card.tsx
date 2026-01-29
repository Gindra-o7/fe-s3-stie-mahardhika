import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard = ({ number, title, description, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Number */}
      <div className="flex justify-end mb-4">
        <h3 className="text-5xl md:text-6xl font-bold text-gray-900">{number}</h3>
      </div>

      {/* Content */}
      <div className="space-y-2 mb-8 py-10">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Arrow Icon */}
      <div className="flex justify-end">
        <motion.div 
        className="bg-gray-200 hover:bg-[#00BCD4] p-2 rounded-lg cursor-pointer group transition-colors duration-300" 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }}>
          <ArrowUpRight className="w-5 h-5 text-[#08C9EC] group-hover:text-white transition-colors duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
