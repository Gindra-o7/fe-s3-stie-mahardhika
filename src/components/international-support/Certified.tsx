import { motion } from "framer-motion";
import { Trans } from "react-i18next";

const certifications = [
  {
    acronym: "CDM",
    title: "Certified Digital Marketer",
  },
  {
    acronym: "CSMA",
    title: "Certified Strategic Management Analyst",
  },
  {
    acronym: "CHCSA",
    title: "Certified Human Capital Strategic Analyst",
  },
];

const Certified = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <motion.div className="mb-12 max-w-4xl text-gray-500 text-sm md:text-base leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="[&>strong]:font-bold [&>strong]:text-gray-800">
            <Trans i18nKey="support.certified.description" components={[<strong key="0" />]} />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-400 p-8 rounded-lg flex flex-col items-center justify-center text-center transition-shadow hover:shadow-lg min-h-35"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{cert.acronym}</h3>
              <p className="text-sm md:text-base text-gray-600">{cert.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certified;
