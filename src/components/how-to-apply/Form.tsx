import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center mb-12">
          <div className="w-fit flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide text-center">FORMULIR APLIKASI</h2>
            <div className="h-1 bg-[#00BCD4] mt-4 w-full" />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto border border-gray-300 rounded-lg p-8 md:p-12 bg-[#EAECEE]">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase">INFORMASI PRIBADI</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">First Name</label>
                <input {...register("firstName")} placeholder="Enter First Name" className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">Last Name</label>
                <input {...register("lastName")} placeholder="Enter Last Name" className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">Date of Birth</label>
                <input {...register("dateOfBirth")} placeholder="Enter your Date of Birth" className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">Nationality</label>
                <input {...register("nationality")} placeholder="Enter Nationality" className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">Email</label>
                <input {...register("email")} placeholder="Enter your Email" className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold text-sm">Phone</label>
                <input {...register("phone")} placeholder="Enter Phone Number" className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-semibold text-sm">Current Address</label>
              <input {...register("address")} placeholder="Enter your Address" className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700" />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-semibold text-sm">Message</label>
              <textarea {...register("message")} rows={5} placeholder="Enter your Message here..." className="w-full p-3 rounded bg-white border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700 resize-none" />
            </div>

            <div className="flex justify-center pt-6">
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
                Send Your Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;
