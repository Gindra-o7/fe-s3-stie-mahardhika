import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import TestimonialCard from "@/components/ui/testimonial-card";
import user1 from "@/assets/components/landing/testimonials/user-1.webp";
import user2 from "@/assets/components/landing/testimonials/user-2.webp";
import user3 from "@/assets/components/landing/testimonials/user-3.webp";
import user4 from "@/assets/components/landing/testimonials/user-4.webp";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonialsData = [
    {
      quote: t("testimonials.items.0.quote"),
      avatar: user1,
      name: t("testimonials.items.0.name"),
    },
    {
      quote: t("testimonials.items.1.quote"),
      avatar: user2,
      name: t("testimonials.items.1.name"),
    },
    {
      quote: t("testimonials.items.2.quote"),
      avatar: user3,
      name: t("testimonials.items.2.name"),
    },
    {
      quote: t("testimonials.items.3.quote"),
      avatar: user4,
      name: t("testimonials.items.3.name"),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-20">
        {/* Header */}
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-4xl">{t("testimonials.description")}</p>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} avatar={testimonial.avatar} name={testimonial.name} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
