import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";

interface CourseCardProps {
  image: string;
  duration: string;
  level: string;
  title: string;
  description: string;
  index?: number;
}

const CourseCard = ({ image, duration, level, title, description, index = 0 }: CourseCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-auto hover:scale-105 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-gray-600 mb-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Users className="w-4 h-4" />
              <span>{level}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 font-bold text-lg">
            <span>Lorem Ipsum</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">{description}</p>

        {/* Button */}
        <motion.button className="w-full bg-gray-200 hover:bg-[#00BCD4] text-gray-700 hover:text-white py-2.5 rounded-lg font-medium transition-colors duration-300" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          Get it Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
