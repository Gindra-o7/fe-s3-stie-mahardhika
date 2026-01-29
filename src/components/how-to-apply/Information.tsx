import { motion } from "framer-motion";
import { ClipboardList, FolderOpen, ClipboardCheck } from "lucide-react";

const Information = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-16">
          {/* Left Column: Text */}
          <motion.div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-justify" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="mb-4"></p>
          </motion.div>

          {/* Right Column: Title */}
          <motion.div className="w-full md:w-1/2 flex justify-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight uppercase tracking-wide">INFORMASI PENDAFTARAN</h2>
              <motion.div className="h-1.5 bg-[#00BCD4] mt-6 w-full" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} />
            </div>
          </motion.div>
        </div>

        {/* Requirements & Upload Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Persyaratan */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-2 border-slate-800 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 uppercase">Persyaratan</h3>
            <ul className="space-y-3 text-gray-700">
              {["Gelar Sarjana / D4", "IPK minimal 2,75", "Transkrip nilai", "KTP", "Foto berwarna 4x6", "Lulus Tes Potensi Akademik"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-800 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Unggah Dokumen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-slate-800 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800 uppercase">Unggah Dokumen</h3>
            <p className="text-gray-600 mb-6 text-sm">Gunakan formulir online untuk mengunggah/upload dokumen:</p>
            <ul className="space-y-3 text-gray-700">
              {["CV / Curriculum Vitae", "Transkrip nilai", "SOP (Statement of Purpose)/ Surat rekomendasi", "Bukti kemampuan Bahasa Inggris", "KTP Bagi WNI atau Paspor Bagi WNA"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-800 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Registration Scheme */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="border-2 border-slate-800 rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-center mb-16 text-gray-800 uppercase">Skema Pendaftaran</h3>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <ClipboardList className="w-12 h-12 text-slate-800" strokeWidth={1.5} />
                <h4 className="text-lg font-bold">1. REGISTRASI</h4>
              </div>
              <div className="text-sm space-y-2 text-gray-700">
                <p>ISI BIO DATA</p>
                <p>DATA: NAMA, EMAIL, WA, NO. KTP</p>
                <p>BAYAR RP 3.000.000</p>
                <p>VIA BANK/ E-WALLET DAN UNGGAH BUKTI CEK EMAIL/ WA UNTUK USERNAME & PASSWORD</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <FolderOpen className="w-12 h-12 text-slate-800" strokeWidth={1.5} />
                <h4 className="text-lg font-bold">2. LENGKAPI BERKAS</h4>
              </div>
              <div className="text-sm space-y-2 text-gray-700">
                <p>UNGGAH DOKUMEN POKOK:</p>
                <p>KTP, KK, IJAZAH & TRANSKRIP S2 LEGALISASI, AKREDITASI BAN-PT</p>
                <p>DOKUMEN PENDUKUNG: KARYA ILMIAH/SERTIFIKAT, SERTIFIKAT INGGRIS, IDE DISERTASI, 2 SURAT REKOMENDASI</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <ClipboardCheck className="w-12 h-12 text-slate-800" strokeWidth={1.5} />
                <h4 className="text-lg font-bold">3. SELEKSI</h4>
              </div>
              <div className="text-sm space-y-2 text-gray-700">
                <p>CETAK KARTU SPMB</p>
                <p>TUNGGU JADWAL WAWANCARA</p>
                <p>IKUTI WAWANCARA ONLINE</p>
                <p>TERIMA KODE SSO DAN KODE E-LEARNING</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Information;
