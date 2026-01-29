import { motion } from "framer-motion";

const opportunities = ["Konsultan", "Pemasaran", "Analis Strategis", "Operasi Keuangan", "Wirausahawan", "Akademisi", "SDM", "Pemerintah"];

const Opportunity = () => {
  return (
    <section className="py-20 bg-[#EAECEE]">
      <div className="container mx-auto px-4 md:px-20">
        <div className="mb-12">
          <div className="w-fit">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">PELUANG KARIR</h2>
            <div className="h-1 bg-[#00BCD4] mt-4 w-full" />
          </div>
          <p className="mt-4 text-gray-600">Lulusan yang cocok untuk:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center"
            >
              <h3 className="text-lg font-bold text-gray-800">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
