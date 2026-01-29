import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";

type FormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phone: string;
  address: string;
  message: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { t } = useLanguage();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center mb-12">
          <div className="w-fit flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide text-center">{t("apply.form.title")}</h2>
            <div className="h-1 bg-[#00BCD4] mt-4 w-full" />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto border border-gray-300 rounded-lg p-8 md:p-12 bg-[#EAECEE]">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase">{t("apply.form.personal_info")}</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">{t("apply.form.fields.first_name.label")}</label>
                <input {...register("firstName")} placeholder={t("apply.form.fields.first_name.placeholder")} className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">{t("apply.form.fields.last_name.label")}</label>
                <input {...register("lastName")} placeholder={t("apply.form.fields.last_name.placeholder")} className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">{t("apply.form.fields.dob.label")}</label>
                <input {...register("dateOfBirth")} placeholder={t("apply.form.fields.dob.placeholder")} className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">{t("apply.form.fields.nationality.label")}</label>
                <input {...register("nationality")} placeholder={t("apply.form.fields.nationality.placeholder")} className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">{t("apply.form.fields.email.label")}</label>
                <input {...register("email")} placeholder={t("apply.form.fields.email.placeholder")} className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">{t("apply.form.fields.phone.label")}</label>
                <input {...register("phone")} placeholder={t("apply.form.fields.phone.placeholder")} className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-semibold text-sm">{t("apply.form.fields.address.label")}</label>
              <input {...register("address")} placeholder={t("apply.form.fields.address.placeholder")} className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-semibold text-sm">{t("apply.form.fields.message.label")}</label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder={t("apply.form.fields.message.placeholder")}
                className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700 resize-none"
              />
            </div>

            <div className="flex justify-center pt-6">
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
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
