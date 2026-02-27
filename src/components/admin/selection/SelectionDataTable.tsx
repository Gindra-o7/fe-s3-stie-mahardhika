import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Printer } from "lucide-react";

export interface SelectionPendaftar {
  noPendaftaran: string;
  nama: string;
  statusWawancara: "Selesai" | "Belum Dijadwalkan";
  prodiOptions: { value: string; label: string }[];
  selectedProdi: string;
  prodiDiterima: string;
  status: string;
  actionStatus: string;
  cetakStatus: string;
  isToggled: boolean;
  isAccepted?: boolean;
}

interface SelectionDataTableProps {
  data: SelectionPendaftar[];
  onCetakData: () => void;
  onRowProdiChange: (noPendaftaran: string, newProdi: string) => void;
  onRowToggle: (noPendaftaran: string, toggled: boolean) => void;
  onSelectAllToggle: (toggled: boolean) => void;
  onRowCetak: (noPendaftaran: string) => void;
  onTerima: () => void;
}

const SelectionDataTable = ({ data, onCetakData, onRowProdiChange, onRowToggle, onSelectAllToggle, onRowCetak, onTerima }: SelectionDataTableProps) => {
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);

  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter((d) => d.noPendaftaran.toLowerCase().includes(q) || d.nama.toLowerCase().includes(q));
  }, [data, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goTo = (page: number) => setCurrentPage(Math.max(1, Math.min(totalPages, page)));

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    onSelectAllToggle(checked);
  };

  const hasSelection = data.some((r) => r.isToggled && !r.isAccepted);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide">DATA SELEKSI PENDAFTAR</h2>
        <button onClick={onCetakData} className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-sm text-sm">
          <Printer className="w-4 h-4" />
          Cetak Data
        </button>
      </div>

      {/* Terima Button - Wide Green Button */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={onTerima}
          disabled={!hasSelection}
          className={`font-semibold py-2.5 px-6 rounded shadow-sm w-full md:w-auto md:min-w-100 transition-colors text-sm ${
            hasSelection ? "bg-[#5CB85C] hover:bg-green-600 text-white cursor-pointer" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Terima
        </button>
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
            className="border border-gray-300 rounded px-2 py-1 text-sm bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {[10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <label className="text-sm text-gray-600 whitespace-nowrap">Search:</label>
          <div className="relative w-full sm:w-48">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-1.5 bg-gray-200 border border-gray-300 rounded text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto border border-gray-200 rounded-sm">
        <table className="w-full min-w-300 text-sm border-collapse">
          <thead>
            <tr className="bg-white border-b border-gray-300">
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200 align-top">
                <div className="flex items-center justify-between">
                  No Pendaftaran <span className="text-gray-400 text-[10px]">↕</span>
                </div>
              </th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200 align-top">
                <div className="flex items-center justify-between">
                  Nama <span className="text-gray-400 text-[10px]">↕</span>
                </div>
              </th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200 align-top">
                <div className="flex items-center justify-between">
                  Status
                  <br />
                  Wawancara <span className="text-gray-400 text-[10px]">↕</span>
                </div>
              </th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200 align-top">
                <div className="flex items-center justify-between">
                  Prodi <span className="text-gray-400 text-[10px]">↕</span>
                </div>
              </th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200 align-top">
                <div className="flex items-center justify-between">
                  Prodi Diterima <span className="text-gray-400 text-[10px]">↕</span>
                </div>
              </th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200 align-top">
                <div className="flex items-center justify-between">
                  Status <span className="text-gray-400 text-[10px]">↕</span>
                </div>
              </th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700 border-r border-gray-200 align-top">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1 w-full justify-center">
                    Action <span className="text-gray-400 text-[10px]">↕</span>
                  </div>
                  <input type="checkbox" checked={selectAll} onChange={(e) => handleSelectAll(e.target.checked)} className="mt-1 cursor-pointer w-3.5 h-3.5" />
                </div>
              </th>
              {/* Empty columns for the action buttons/toggle to match screenshot padding and borders */}
              <th className="text-center px-2 py-3 border-r border-gray-200 bg-white"></th>
              <th className="text-center px-2 py-3 border-r border-gray-200 bg-white"></th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 align-top">
                <div className="flex items-center justify-between">
                  Cetak <span className="text-gray-400 text-[10px]">↕</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center py-10 text-gray-400">
                  Tidak ada data ditemukan.
                </td>
              </tr>
            ) : (
              paginated.map((row) => (
                <tr key={row.noPendaftaran} className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-[#f9f9f9] even:bg-white text-gray-700">
                  <td className="px-3 py-3 border-r border-gray-200">{row.noPendaftaran}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{row.nama}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{row.statusWawancara}</td>
                  <td className="px-3 py-3 border-r border-gray-200">
                    {row.prodiOptions.length > 0 ? (
                      <div className="flex flex-col gap-1">
                        {row.prodiOptions.map((opt) => (
                          <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-xs mb-1 last:mb-0">
                            <input
                              type="radio"
                              name={`prodi-${row.noPendaftaran}`}
                              value={opt.value}
                              checked={row.selectedProdi === opt.value}
                              onChange={() => onRowProdiChange(row.noPendaftaran, opt.value)}
                              className="w-3.5 h-3.5 text-blue-600 cursor-pointer"
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-700">-</span>
                    )}
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200">{row.prodiDiterima}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{row.status}</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-center">{row.actionStatus}</td>
                  <td className="px-2 py-3 border-r border-gray-200 text-center w-32.5">
                    <span className={`inline-block whitespace-nowrap text-[11px] font-bold px-3 py-1.5 rounded-sm ${row.cetakStatus === "Belum Diterima" ? "bg-[#F0AD4E] text-white" : "bg-green-500 text-white"}`}>{row.cetakStatus}</span>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200 text-center w-15">
                    {row.isAccepted ? (
                      <span className="text-gray-500">-</span>
                    ) : (
                      <input type="checkbox" checked={row.isToggled} onChange={(e) => onRowToggle(row.noPendaftaran, e.target.checked)} className="w-4 h-4 cursor-pointer align-middle" />
                    )}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <button
                      onClick={() => onRowCetak(row.noPendaftaran)}
                      className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-semibold px-3 py-1.5 rounded transition-colors cursor-pointer text-xs flex items-center justify-center gap-1 mx-auto shadow-sm"
                    >
                      <Printer className="w-3.5 h-3.5" />
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-3">
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
                className={`w-8 h-8 rounded text-sm font-medium transition-colors cursor-pointer ${page === currentPage ? "bg-blue-500 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-100"}`}
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

export default SelectionDataTable;
