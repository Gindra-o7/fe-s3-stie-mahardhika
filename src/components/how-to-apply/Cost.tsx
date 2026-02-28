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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col items-center sm:items-start mb-10 md:mb-12 text-center sm:text-left">
          <TitleText>{t("apply.detailed_cost.title")}</TitleText>
          <p className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">{t("apply.detailed_cost.description")}</p>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-max table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-400">
                {headers.map((header, index) => (
                  <th key={index} className="px-3 md:px-6 py-4 md:py-6 text-center text-gray-900 font-bold text-sm md:text-[17px] border-r border-gray-300 last:border-r-0">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(7)].map((_, index) => (
                <tr key={index} className="border-b border-gray-300 last:border-b-0 hover:bg-gray-50 transition-colors">
                  <td className="px-3 md:px-6 py-3 md:py-5 text-center text-gray-800 font-bold text-sm md:text-base border-r border-gray-300">{t(`apply.detailed_cost.table.rows.${index}.termin`)}</td>
                  <td className="px-3 md:px-6 py-3 md:py-5 text-center text-gray-700 text-sm md:text-base border-r border-gray-300">{t(`apply.detailed_cost.table.rows.${index}.keterangan`)}</td>
                  <td className="px-3 md:px-6 py-3 md:py-5 text-center text-gray-700 text-sm md:text-base border-r border-gray-300">{t(`apply.detailed_cost.table.rows.${index}.waktu`)}</td>
                  <td className="px-3 md:px-6 py-3 md:py-5 text-center text-gray-700 text-sm md:text-base border-r border-gray-300">{t(`apply.detailed_cost.table.rows.${index}.ukt`)}</td>
                  <td className="px-3 md:px-6 py-3 md:py-5 text-center text-gray-700 text-sm md:text-base">{t(`apply.detailed_cost.table.rows.${index}.dpp`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-col space-y-1">
          {notes.map((note, index) => (
            <p key={index} className="text-gray-500 font-medium text-sm">
              {note}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cost;
