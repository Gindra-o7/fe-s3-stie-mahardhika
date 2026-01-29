import { motion } from "framer-motion";
import CourseCard from "@/components/ui/course-card";
import courses1 from "@/assets/components/landing/courses/courses-1.webp";
import courses2 from "@/assets/components/landing/courses/courses-2.webp";
import courses3 from "@/assets/components/landing/courses/courses-3.webp";
import courses4 from "@/assets/components/landing/courses/courses-4.webp";

const Courses = () => {
  const coursesData = [
    {
      image: courses1,
      duration: "12 Weeks",
      level: "Ipsum",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: courses2,
      duration: "12 Weeks",
      level: "Ipsum",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: courses3,
      duration: "12 Weeks",
      level: "Ipsum",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: courses4,
      duration: "12 Weeks",
      level: "Ipsum",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#FFFFFF] to-[#DEDFE3]">
      <div className="container mx-auto px-20">
        {/* Header */}
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Courses</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {coursesData.map((course, index) => (
            <CourseCard key={index} image={course.image} duration={course.duration} level={course.level} title={course.title} description={course.description} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-20">
          <motion.button className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-3 rounded-lg font-semibold transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            View All
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
