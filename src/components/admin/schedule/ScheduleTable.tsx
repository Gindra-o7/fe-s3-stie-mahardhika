import { useState } from "react";
import { Eye, Calendar, ClipboardEdit, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export type WawancaraStatus = "Belum Dijadwalkan" | "Terjadwal" | "Hadir" | "Tidak Hadir" | "Selesai";

export interface ScheduleParticipant {
  id: string;
  noPendaftaran: string;
  nama: string;
  prodi: string;
  statusAdministrasi: string;
  statusWawancara: WawancaraStatus;
  tanggalWawancara?: string;
  waktuWawancara?: string;
  metodeWawancara?: "Online" | "Offline";
  pewawancara?: string;
  lokasi?: string;
}

interface ScheduleTableProps {
  data: ScheduleParticipant[];
  onDetail: (p: ScheduleParticipant) => void;
  onAturJadwal: (p: ScheduleParticipant) => void;
  onInputHasil: (p: ScheduleParticipant) => void;
  onUpdateStatus: (id: string, newStatus: WawancaraStatus) => void;
}

const getStatusColor = (status: WawancaraStatus) => {
  switch (status) {
    case "Belum Dijadwalkan":
      return "bg-gray-100 text-gray-700";
    case "Terjadwal":
      return "bg-blue-100 text-blue-700";
    case "Hadir":
      return "bg-green-100 text-green-700";
    case "Tidak Hadir":
      return "bg-red-100 text-red-700";
    case "Selesai":
      return "bg-emerald-100 text-emerald-800";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const ScheduleTable = ({ data, onDetail, onAturJadwal, onInputHasil, onUpdateStatus }: ScheduleTableProps) => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const paginated = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goTo = (page: number) => setCurrentPage(Math.max(1, Math.min(totalPages, page)));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Tampilkan</span>
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
          <span>entri</span>
        </div>
      </div>

      <div className="w-full overflow-x-auto border border-gray-200 rounded-sm">
        <table className="w-full min-w-300 text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-300">
              <th className="text-center px-3 py-3 font-semibold text-gray-700 border-r border-gray-200 w-12">No</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200">No Pendaftaran</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200">Nama Peserta</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200">Prodi</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700 border-r border-gray-200">Status Administrasi</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700 border-r border-gray-200 w-44">Status Wawancara</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700 border-r border-gray-200">Tanggal & Waktu</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-700 border-r border-gray-200">Pewawancara</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-700 w-40">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-10 text-gray-400">
                  Tidak ada jadwal atau peserta ditemukan.
                </td>
              </tr>
            ) : (
              paginated.map((row, index) => (
                <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white text-gray-700">
                  <td className="px-3 py-3 border-r border-gray-200 text-center">{(currentPage - 1) * pageSize + index + 1}</td>
                  <td className="px-3 py-3 border-r border-gray-200 font-medium">{row.noPendaftaran}</td>
                  <td className="px-3 py-3 border-r border-gray-200 font-semibold text-gray-900">{row.nama}</td>
                  <td className="px-3 py-3 border-r border-gray-200">{row.prodi}</td>
                  <td className="px-3 py-3 border-r border-gray-200 text-center">
                    <span className="inline-block px-2 py-1 bg-green-50 text-green-700 text-[11px] font-bold rounded-sm border border-green-200">{row.statusAdministrasi}</span>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200 text-center">
                    {row.statusWawancara === "Belum Dijadwalkan" ? (
                      <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(row.statusWawancara)}`}>{row.statusWawancara}</span>
                    ) : (
                      <select
                        value={row.statusWawancara}
                        onChange={(e) => onUpdateStatus(row.id, e.target.value as WawancaraStatus)}
                        className={`text-xs font-bold px-2 py-1 rounded-full border-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-center appearance-none ${getStatusColor(row.statusWawancara)}`}
                      >
                        <option value="Terjadwal">Terjadwal</option>
                        <option value="Hadir">Hadir</option>
                        <option value="Tidak Hadir">Tidak Hadir</option>
                        <option value="Selesai">Selesai</option>
                      </select>
                    )}
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200 text-center">
                    {row.tanggalWawancara ? (
                      <div className="text-sm">
                        <div className="font-semibold">{row.tanggalWawancara}</div>
                        <div className="text-xs text-gray-500">{row.waktuWawancara}</div>
                        <div className="text-[10px] mt-1 text-blue-600 bg-blue-50 inline-block px-1.5 py-0.5 rounded">{row.metodeWawancara}</div>
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-3 py-3 border-r border-gray-200">{row.pewawancara ? <span className="font-medium">{row.pewawancara}</span> : <span className="text-gray-400">-</span>}</td>
                  <td className="px-3 py-3 text-center">
                    <div className="flex flex-col gap-1.5 items-center justify-center">
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => onDetail(row)} className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-1.5 rounded transition-colors cursor-pointer" title="Detail Peserta">
                          <Eye className="w-4 h-4" />
                        </button>

                        {row.statusWawancara === "Belum Dijadwalkan" && (
                          <button onClick={() => onAturJadwal(row)} className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded transition-colors flex items-center gap-1 cursor-pointer text-xs font-semibold px-2" title="Atur Jadwal">
                            <Calendar className="w-3.5 h-3.5" /> Atur
                          </button>
                        )}

                        {(row.statusWawancara === "Selesai" || row.statusWawancara === "Hadir") && (
                          <button
                            onClick={() => onInputHasil(row)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white p-1.5 rounded transition-colors flex items-center gap-1 cursor-pointer text-xs font-semibold px-2"
                            title="Input Hasil"
                          >
                            <ClipboardEdit className="w-3.5 h-3.5" /> Input Hasil
                          </button>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-3">
        <p className="text-sm text-gray-500">
          Tampil {data.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} hingga {Math.min(currentPage * pageSize, data.length)} dari {data.length} entri
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

export default ScheduleTable;
