import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

type FormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  idCard: string;
  diploma: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { t } = useLanguage();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="py-20 bg-[#EAECEE]">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center mb-12">
          <TitleText className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wider text-center">{t("apply.form.header")}</TitleText>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto border border-gray-400 p-8 md:p-12 rounded-lg">
          <div className="flex flex-col items-start mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 uppercase">{t("apply.form.title")}</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-700 font-bold text-sm tracking-wide">{t("apply.form.fields.full_name.label")}</label>
              <input {...register("fullName")} placeholder={t("apply.form.fields.full_name.placeholder")} className="w-full p-3.5 rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-bold text-sm tracking-wide">{t("apply.form.fields.email.label")}</label>
              <input {...register("email")} placeholder={t("apply.form.fields.email.placeholder")} className="w-full p-3.5 rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-bold text-sm tracking-wide">{t("apply.form.fields.whatsapp.label")}</label>
              <input {...register("whatsapp")} placeholder={t("apply.form.fields.whatsapp.placeholder")} className="w-full p-3.5 rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-bold text-sm tracking-wide">{t("apply.form.fields.id_card.label")}</label>
              <input {...register("idCard")} placeholder={t("apply.form.fields.id_card.placeholder")} className="w-full p-3.5 rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-bold text-sm tracking-wide">{t("apply.form.fields.diploma.label")}</label>
              <input {...register("diploma")} placeholder={t("apply.form.fields.diploma.placeholder")} className="w-full p-3.5 rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm" />
            </div>

            <div className="flex justify-center pt-8">
              <button type="submit" className="bg-[#FCA311] hover:bg-orange-500 text-white font-bold py-3 px-10 rounded-md transition-colors duration-300">
                {t("apply.form.submit")}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;
