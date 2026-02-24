import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Cost = () => {
  const { t } = useLanguage();

  const headers = [
    t("apply.detailed_cost.table.headers.termin"),
    t("apply.detailed_cost.table.headers.keterangan"),
    t("apply.detailed_cost.table.headers.waktu"),
    t("apply.detailed_cost.table.headers.ukt"),
    t("apply.detailed_cost.table.headers.dpp"),
  ];

  const notes = [t("apply.detailed_cost.table.notes.0"), t("apply.detailed_cost.table.notes.1")];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-start mb-12">
          <TitleText className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wider">{t("apply.detailed_cost.title")}</TitleText>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed text-left max-w-4xl">{t("apply.detailed_cost.description")}</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full overflow-x-auto">
          <table className="w-full min-w-max table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-400">
                {headers.map((header, index) => (
                  <th key={index} className="px-6 py-6 text-center text-gray-900 font-bold text-[17px] border-r border-gray-300 last:border-r-0">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(7)].map((_, index) => (
                <tr key={index} className="border-b border-gray-300 last:border-b-0 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 text-center text-gray-800 font-bold border-r border-gray-300">{t(`apply.detailed_cost.table.rows.${index}.termin`)}</td>
                  <td className="px-6 py-5 text-center text-gray-700 text-base border-r border-gray-300">{t(`apply.detailed_cost.table.rows.${index}.keterangan`)}</td>
                  <td className="px-6 py-5 text-center text-gray-700 text-base border-r border-gray-300">{t(`apply.detailed_cost.table.rows.${index}.waktu`)}</td>
                  <td className="px-6 py-5 text-center text-gray-700 text-base border-r border-gray-300">{t(`apply.detailed_cost.table.rows.${index}.ukt`)}</td>
                  <td className="px-6 py-5 text-center text-gray-700 text-base">{t(`apply.detailed_cost.table.rows.${index}.dpp`)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex flex-col space-y-1">
            {notes.map((note, index) => (
              <p key={index} className="text-gray-500 font-medium text-sm">
                {note}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cost;
