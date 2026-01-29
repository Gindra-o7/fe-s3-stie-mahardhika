import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  avatar: string;
  name: string;
  index?: number;
}

const TestimonialCard = ({ quote, avatar, name, index = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Quote */}
      <p className="text-gray-700 leading-relaxed mb-6">{quote}</p>

      {/* Divider */}
      <div className="border-t border-gray-200 -mx-6"></div>

      {/* Footer */}
      <div className="flex items-center justify-between bg-gray-50 -mx-6 px-6 py-4 -mb-6 rounded-b-lg">
        {/* Avatar & Name */}
        <div className="flex items-center gap-3">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <span className="text-sm font-semibold text-gray-900">{name}</span>
        </div>

        {/* Read Full Story */}
        <motion.button className="text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Read Full Story
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
