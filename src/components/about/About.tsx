import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Column: Text */}
          <motion.div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-justify" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="mb-4">
              Dengan pengalaman di dunia pendidikan lebih dari 30 tahun, STIE Mahardhika melalui Program MM (Magister Manajemen) telah terbukti menghasilkan lulusan profesional dan pakar dibidang manajemen, yang mampu menjadi perencana,
              pengembang, dan pemecah masalah di era society 5.0.Melalui Program ini, peserta akan dibimbing untuk menghasilkan berbagai inovasi di bidang Manajemen yang dapat digunakan untuk peningkatan mutu di tingkat daerah, nasional
              maupun internasional. Di dukung dosen praktisi bergelar Doktor dan Profesor serta dilengkapi dengan berbagai fasilitas berteknologi terkini.STIE Mahardhika menciptakan sebuah suasana akademik yang intensif dan kondusif untuk
              menghadapi persaingan di dunia Ekonomi Digital.
            </p>
          </motion.div>

          {/* Right Column: Title */}
          <motion.div className="w-full md:w-1/2 flex justify-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight uppercase tracking-wide text-right">
                ABOUT STIE <br /> MAHARDHIKA
              </h2>
              <motion.div className="h-1.5 bg-[#00BCD4] mt-6 w-full" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
