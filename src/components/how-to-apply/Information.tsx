import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

import files from "@/assets/components/how-to-apply/files.svg";
import register from "@/assets/components/how-to-apply/register.svg";
import task from "@/assets/components/how-to-apply/task.svg";

const Information = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-16">
          {/* Left Column: Text */}
          <motion.div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-justify" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="mb-4"></p>
          </motion.div>

          {/* Right Column: Title */}
          <div className="w-full md:w-1/2 flex justify-center">
            <TitleText className="text-3xl md:text-4xl">{t("apply.information.title")}</TitleText>
          </div>
        </div>

        {/* Requirements & Upload Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {/* Persyaratan */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-2 border-gray-600 rounded-lg p-8 hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 uppercase">{t("apply.information.requirements.title")}</h3>
            <ul className="space-y-3 text-gray-700">
              {[0, 1, 2, 3, 4].map((idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-800 rounded-full shrink-0" />
                  {t(`apply.information.requirements.items.${idx}`)}
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
            className="border-2 border-gray-600 rounded-lg p-8 hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800 uppercase">{t("apply.information.upload.title")}</h3>
            <p className="text-gray-600 mb-6 text-sm">{t("apply.information.upload.subtitle")}</p>
            <ul className="space-y-3 text-gray-700">
              {[0, 1, 2, 3, 4].map((idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-800 rounded-full shrink-0" />
                  {t(`apply.information.upload.items.${idx}`)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Registration Scheme */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-2 border-gray-600 rounded-lg p-8 md:p-12 hover:shadow-md transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-center mb-16 text-gray-800 uppercase">{t("apply.information.scheme.title")}</h3>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <img src={register} alt="" className="w-16 h-16 object-contain shrink-0 mt-1" />
              <div className="flex flex-col space-y-2">
                <h4 className="text-lg font-extrabold text-gray-900">{t("apply.information.scheme.steps.1.title")}</h4>
                <div className="text-base font-bold space-y-1.5 text-gray-700 uppercase">
                  {[0, 1, 2, 3].map((idx) => (
                    <p key={idx}>{t(`apply.information.scheme.steps.1.content.${idx}`)}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <img src={files} alt="" className="w-16 h-16 object-contain shrink-0 mt-1" />
              <div className="flex flex-col space-y-2">
                <h4 className="text-lg font-extrabold text-gray-900">{t("apply.information.scheme.steps.2.title")}</h4>
                <div className="text-base font-bold space-y-1.5 text-gray-700 uppercase">
                  {[0, 1, 2, 3].map((idx) => (
                    <p key={idx}>{t(`apply.information.scheme.steps.2.content.${idx}`)}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <img src={task} alt="" className="w-16 h-16 object-contain shrink-0 mt-1" />
              <div className="flex flex-col space-y-2">
                <h4 className="text-lg font-extrabold text-gray-900">{t("apply.information.scheme.steps.3.title")}</h4>
                <div className="text-base font-bold space-y-1.5 text-gray-700 uppercase">
                  {[0, 1, 2].map((idx) => (
                    <p key={idx}>{t(`apply.information.scheme.steps.3.content.${idx}`)}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Information;
