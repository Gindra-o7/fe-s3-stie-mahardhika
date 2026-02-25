// import TestimonialCard from "@/components/ui/testimonial-card";
import { useLanguage } from "@/contexts/LanguageContext";
// import user1 from "@/assets/components/landing/testimonials/user-1.webp";
// import user2 from "@/assets/components/landing/testimonials/user-2.webp";
// import user3 from "@/assets/components/landing/testimonials/user-3.webp";
// import user4 from "@/assets/components/landing/testimonials/user-4.webp";

const Testimonials = () => {
  const { t } = useLanguage();

  // const testimonialsData = [
  //   {
  //     quote: t("people.testimonials.items.0.quote"),
  //     avatar: user1,
  //     name: t("people.testimonials.items.0.name"),
  //   },
  //   {
  //     quote: t("people.testimonials.items.1.quote"),
  //     avatar: user2,
  //     name: t("people.testimonials.items.1.name"),
  //   },
  //   {
  //     quote: t("people.testimonials.items.2.quote"),
  //     avatar: user3,
  //     name: t("people.testimonials.items.2.name"),
  //   },
  //   {
  //     quote: t("people.testimonials.items.3.quote"),
  //     avatar: user4,
  //     name: t("people.testimonials.items.3.name"),
  //   },
  // ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-20">
        {/* Header */}
        <div className="flex flex-col items-end mb-12">
          <div className="w-fit flex flex-col items-end">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide text-right">{t("people.testimonials.title")}</h2>
            <div className="h-1 bg-[#00BCD4] mt-4 w-full" />
          </div>
        </div>

        {/* Grid Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} avatar={testimonial.avatar} name={testimonial.name} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
