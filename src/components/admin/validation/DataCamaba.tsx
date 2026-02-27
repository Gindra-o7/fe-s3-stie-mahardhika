import { useState, useMemo } from "react";
import { ChevronDown, Download, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export interface Camaba {
  noPendaftaran: string;
  nama: string;
  jalur: string;
  prodi: string;
  statusPembayaran: "Sudah Bayar" | "Belum Bayar";
  tanggalDaftar: string;
}

// Dummy data
const dummyCamaba: Camaba[] = [
  { noPendaftaran: "20251110162", nama: "INTAN MAULIDA QORRY' AINA, M.PD", jalur: "Reguler (TES)", prodi: "Manajemen", statusPembayaran: "Sudah Bayar", tanggalDaftar: "2025-01-15" },
  { noPendaftaran: "20251110163", nama: "FATIHATUL FIRDA MUHIMMAH", jalur: "Reguler (TES)", prodi: "Akuntansi", statusPembayaran: "Sudah Bayar", tanggalDaftar: "2025-01-16" },
  { noPendaftaran: "20251110164", nama: "NIKEN LARASATI", jalur: "Prestasi", prodi: "Manajemen", statusPembayaran: "Sudah Bayar", tanggalDaftar: "2025-01-17" },
  { noPendaftaran: "20251110165", nama: "NAILA MAZIYAH", jalur: "Reguler (TES)", prodi: "Akuntansi", statusPembayaran: "Belum Bayar", tanggalDaftar: "2025-01-18" },
  { noPendaftaran: "20251110250", nama: "RISKA HULAIMAH", jalur: "Beasiswa", prodi: "Manajemen", statusPembayaran: "Sudah Bayar", tanggalDaftar: "2025-02-01" },
  { noPendaftaran: "20251110333", nama: "NADILA BERLIANA ARMADA", jalur: "Reguler (TES)", prodi: "Manajemen", statusPembayaran: "Sudah Bayar", tanggalDaftar: "2025-02-05" },
  { noPendaftaran: "20251110334", nama: "NAILA SALSA BILSALWA AURARA", jalur: "Prestasi", prodi: "Akuntansi", statusPembayaran: "Sudah Bayar", tanggalDaftar: "2025-02-06" },
  { noPendaftaran: "20251110335", nama: "LIDYA DINDA CAHYANI", jalur: "Reguler (TES)", prodi: "Manajemen", statusPembayaran: "Sudah Bayar", tanggalDaftar: "2025-02-07" },
];

const semesterOptions = ["Genap", "Ganjil"];
const currentYear = new Date().getFullYear();
const tahunOptions = Array.from({ length: 5 }, (_, i) => String(currentYear - i));

const DataCamaba = () => {
  const [semester, setSemester] = useState(semesterOptions[0]);
  const [tahun, setTahun] = useState(String(currentYear));
  const [showTable] = useState(false);

  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (!showTable) return [];
    if (!search.trim()) return dummyCamaba;
    const q = search.toLowerCase();
    return dummyCamaba.filter((d) => d.noPendaftaran.toLowerCase().includes(q) || d.nama.toLowerCase().includes(q));
  }, [showTable, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const goTo = (page: number) => setCurrentPage(Math.max(1, Math.min(totalPages, page)));

  const handleExportXls = () => {
    console.log("Export XLS:", { semester, tahun });
    alert("Export XLS akan diimplementasikan dengan API.");
  };

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">Data Camaba</h2>

        <div className="space-y-4 md:space-y-5">
          {/* Semester */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
            <label className="text-sm font-semibold text-gray-700 sm:w-40 shrink-0">Semester</label>
            <div className="relative flex-1">
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#08C9EC] focus:border-transparent cursor-pointer"
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
                className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#08C9EC] focus:border-transparent cursor-pointer"
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

        <div className="flex flex-wrap justify-end gap-3 mt-8">
          <button onClick={handleExportXls} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-200 text-sm cursor-pointer shadow-sm hover:shadow-md">
            <Download className="w-4 h-4" />
            Ekspor XLS
          </button>
          {/* <button
            onClick={() => {
              setShowTable(true);
              setCurrentPage(1);
            }}
            className="bg-[#08C9EC] hover:bg-[#06a8c6] text-white font-semibold py-2.5 px-8 rounded-lg transition-colors duration-200 text-sm cursor-pointer shadow-sm hover:shadow-md"
          >
            Lihat
          </button> */}
        </div>
      </div>

      {/* Table Section */}
      {showTable && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide mb-4">
            Data Camaba — {semester} {tahun}
          </h2>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Show</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded px-2 py-1 text-sm bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#08C9EC]"
              >
                {[10, 25, 50, 100].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              <span>entries</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search..."
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#08C9EC] focus:border-transparent"
              />
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left px-3 py-3 font-semibold text-gray-700">No Pendaftaran</th>
                  <th className="text-left px-3 py-3 font-semibold text-gray-700">Nama</th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-700">Jalur</th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-700">Prodi</th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-700">Status Pembayaran</th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-700">Tanggal Daftar</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-gray-400">
                      Tidak ada data ditemukan.
                    </td>
                  </tr>
                ) : (
                  paginated.map((row) => (
                    <tr key={row.noPendaftaran} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                      <td className="px-3 py-3 text-gray-800 font-medium">{row.noPendaftaran}</td>
                      <td className="px-3 py-3 text-gray-700">{row.nama}</td>
                      <td className="px-3 py-3 text-center text-gray-700">{row.jalur}</td>
                      <td className="px-3 py-3 text-center text-gray-700">{row.prodi}</td>
                      <td className="px-3 py-3 text-center">
                        <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded ${row.statusPembayaran === "Sudah Bayar" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>{row.statusPembayaran}</span>
                      </td>
                      <td className="px-3 py-3 text-center text-gray-700">{row.tanggalDaftar}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Showing {filtered.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, filtered.length)} of {filtered.length} entries
            </p>
            <div className="flex items-center gap-1">
              <button onClick={() => goTo(1)} disabled={currentPage === 1} className="p-1.5 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors">
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1.5 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
                const page = start + i;
                if (page > totalPages) return null;
                return (
                  <button
                    key={page}
                    onClick={() => goTo(page)}
                    className={`w-8 h-8 rounded text-sm font-medium transition-colors cursor-pointer ${page === currentPage ? "bg-[#08C9EC] text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-100"}`}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => goTo(totalPages)}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCamaba;
