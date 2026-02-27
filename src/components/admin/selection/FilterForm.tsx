import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterFormProps {
  onSubmit: (filters: { jalur: string; semester: string; tahun: string }) => void;
}

const jalurOptions = ["Jalur Reguler (TES)", "Jalur Prestasi", "Jalur Beasiswa"];

const semesterOptions = ["Genap", "Ganjil"];

const currentYear = new Date().getFullYear();
const tahunOptions = Array.from({ length: 5 }, (_, i) => String(currentYear - i));

const FilterForm = ({ onSubmit }: FilterFormProps) => {
  const [jalur, setJalur] = useState(jalurOptions[0]);
  const [semester, setSemester] = useState(semesterOptions[0]);
  const [tahun, setTahun] = useState(String(currentYear));

  const handleSubmit = () => {
    onSubmit({ jalur, semester, tahun });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
      <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">DATA SELEKSI PENDAFTAR</h2>

      <div className="space-y-4 md:space-y-5">
        {/* Jalur */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
          <label className="text-sm font-semibold text-gray-700 sm:w-40 shrink-0">Jalur</label>
          <div className="relative flex-1">
            <select
              value={jalur}
              onChange={(e) => setJalur(e.target.value)}
              className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent cursor-pointer"
            >
              {jalurOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Semester */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
          <label className="text-sm font-semibold text-gray-700 sm:w-40 shrink-0">Semester</label>
          <div className="relative flex-1">
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent cursor-pointer"
            >
              {semesterOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Tahun */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
          <label className="text-sm font-semibold text-gray-700 sm:w-40 shrink-0">Tahun</label>
          <div className="relative flex-1">
            <select
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
              className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent cursor-pointer"
            >
              {tahunOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-8 rounded-lg transition-colors duration-200 text-sm cursor-pointer shadow-sm hover:shadow-md">
          Lihat
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
