import { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export interface Pendaftar {
  noPendaftaran: string;
  nama: string;
  statusData: "Berkas Lulus" | "Belum Divalidasi";
  validasiData: "Telah Divalidasi" | "Validasi";
  statusPembayaran: "Sudah Bayar" | "Belum Bayar";
}

interface DataTableProps {
  data: Pendaftar[];
  onDetail: (noPendaftaran: string) => void;
  onValidasi: (noPendaftaran: string) => void;
  onReset: (noPendaftaran: string) => void;
  onCetak: (noPendaftaran: string) => void;
}

const DataTable = ({ data, onDetail, onValidasi, onReset, onCetak }: DataTableProps) => {
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter((d) => d.noPendaftaran.toLowerCase().includes(q) || d.nama.toLowerCase().includes(q));
  }, [data, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goTo = (page: number) => setCurrentPage(Math.max(1, Math.min(totalPages, page)));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
      {/* Header */}
      <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide mb-4">Data Pendaftar</h2>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="bg-[#08C9EC] hover:bg-[#06a8c6] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer">Ekspor Pendaftar</button>
        <button className="bg-[#08C9EC] hover:bg-[#06a8c6] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer">Ekspor Berkas</button>
      </div>
      <div className="mb-5">
        <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer">Lulus Verifikasi Berkas</button>
      </div>

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
        <table className="w-full min-w-[900px] text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200">
              <th className="text-left px-3 py-3 font-semibold text-gray-700">No Pendaftaran</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700">Nama</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700">Detail</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700">Status Data</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700">Validasi Data</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700">Status Pembayaran</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700">Password</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700">Formulir Pendaftaran</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-10 text-gray-400">
                  Tidak ada data ditemukan.
                </td>
              </tr>
            ) : (
              paginated.map((row) => (
                <tr key={row.noPendaftaran} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="px-3 py-3 text-gray-800 font-medium">{row.noPendaftaran}</td>
                  <td className="px-3 py-3 text-gray-700">{row.nama}</td>
                  <td className="px-3 py-3 text-center">
                    <button onClick={() => onDetail(row.noPendaftaran)} className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors cursor-pointer">
                      Detail
                    </button>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded ${row.statusData === "Berkas Lulus" ? "bg-green-600 text-white" : "bg-yellow-500 text-white"}`}>{row.statusData}</span>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <button
                      onClick={() => onValidasi(row.noPendaftaran)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded transition-colors cursor-pointer ${
                        row.validasiData === "Telah Divalidasi" ? "bg-[#08C9EC] text-white hover:bg-[#06a8c6]" : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {row.validasiData}
                    </button>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded ${row.statusPembayaran === "Sudah Bayar" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>{row.statusPembayaran}</span>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <button onClick={() => onReset(row.noPendaftaran)} className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors cursor-pointer">
                      Reset
                    </button>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <button onClick={() => onCetak(row.noPendaftaran)} className="bg-[#08C9EC] hover:bg-[#06a8c6] text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors cursor-pointer">
                      Cetak
                    </button>
                  </td>
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
  );
};

export default DataTable;
