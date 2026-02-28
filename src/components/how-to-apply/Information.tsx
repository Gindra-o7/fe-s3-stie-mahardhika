import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

import files from "@/assets/components/how-to-apply/files.svg";
import register from "@/assets/components/how-to-apply/register.svg";
import task from "@/assets/components/how-to-apply/task.svg";

const Information = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 mb-12 md:mb-16">
          {/* Left Column: Text */}
          <div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-left md:text-justify">
            <p className="mb-4"></p>
          </div>

          {/* Right Column: Title */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <TitleText >{t("apply.information.title")}</TitleText>
          </div>
        </div>

        {/* Requirements & Upload Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Persyaratan */}
          <div className="border-2 border-gray-200 hover:border-[#08C9EC] rounded-2xl p-6 md:p-10 hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-xl md:text-2xl font-extrabold text-center mb-6 md:mb-8 text-gray-800 uppercase group-hover:text-[#08C9EC] transition-colors">{t("apply.information.requirements.title")}</h3>
            <ul className="space-y-4 text-gray-700 text-sm md:text-base">
              {[0, 1, 2, 3, 4].map((idx) => (
                <li key={idx} className="flex items-start gap-3 leading-relaxed">
                  <span className="w-2 h-2 mt-1.5 bg-[#08C9EC] rounded-full shrink-0" />
                  <span>{t(`apply.information.requirements.items.${idx}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Unggah Dokumen */}
          <div className="border-2 border-gray-200 hover:border-[#08C9EC] rounded-2xl p-6 md:p-10 hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-xl md:text-2xl font-extrabold text-center mb-3 md:mb-4 text-gray-800 uppercase group-hover:text-[#08C9EC] transition-colors">{t("apply.information.upload.title")}</h3>
            <p className="text-gray-500 mb-6 md:mb-8 text-center text-sm md:text-base font-medium">{t("apply.information.upload.subtitle")}</p>
            <ul className="space-y-4 text-gray-700 text-sm md:text-base">
              {[0, 1, 2, 3, 4].map((idx) => (
                <li key={idx} className="flex items-start gap-3 leading-relaxed">
                  <span className="w-2 h-2 mt-1.5 bg-[#08C9EC] rounded-full shrink-0" />
                  <span>{t(`apply.information.upload.items.${idx}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Registration Scheme */}
        <div className="border-2 border-gray-200 hover:border-[#08C9EC] rounded-2xl p-6 md:p-12 hover:shadow-xl transition-all duration-300 bg-gray-50/50">
          <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-10 md:mb-16 text-gray-900 uppercase">{t("apply.information.scheme.title")}</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left relative z-10">
              <div className="bg-white p-4 rounded-full shadow-md border border-gray-100 shrink-0">
                <img src={register} alt="" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="flex flex-col mt-2">
                <h4 className="text-lg md:text-xl font-extrabold text-gray-900 mb-3">{t("apply.information.scheme.steps.1.title")}</h4>
                <div className="text-sm md:text-base font-semibold space-y-2 text-gray-600 uppercase">
                  {[0, 1, 2, 3].map((idx) => (
                    <p key={idx}>{t(`apply.information.scheme.steps.1.content.${idx}`)}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left relative z-10">
              <div className="bg-white p-4 rounded-full shadow-md border border-gray-100 shrink-0">
                <img src={files} alt="" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="flex flex-col mt-2">
                <h4 className="text-lg md:text-xl font-extrabold text-gray-900 mb-3">{t("apply.information.scheme.steps.2.title")}</h4>
                <div className="text-sm md:text-base font-semibold space-y-2 text-gray-600 uppercase">
                  {[0, 1, 2, 3].map((idx) => (
                    <p key={idx}>{t(`apply.information.scheme.steps.2.content.${idx}`)}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left relative z-10">
              <div className="bg-white p-4 rounded-full shadow-md border border-gray-100 shrink-0">
                <img src={task} alt="" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="flex flex-col mt-2">
                <h4 className="text-lg md:text-xl font-extrabold text-gray-900 mb-3">{t("apply.information.scheme.steps.3.title")}</h4>
                <div className="text-sm md:text-base font-semibold space-y-2 text-gray-600 uppercase">
                  {[0, 1, 2].map((idx) => (
                    <p key={idx}>{t(`apply.information.scheme.steps.3.content.${idx}`)}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
