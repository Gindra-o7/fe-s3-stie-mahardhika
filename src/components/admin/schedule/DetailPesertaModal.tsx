import { useState } from "react";
import { X, UserRound, GraduationCap, FileText, CheckCircle, CreditCard, Clock } from "lucide-react";
import { ScheduleParticipant } from "./ScheduleTable";

interface DetailPesertaModalProps {
  isOpen: boolean;
  participant: ScheduleParticipant | null;
  onClose: () => void;
}

const DetailPesertaModal = ({ isOpen, participant, onClose }: DetailPesertaModalProps) => {
  const [activeTab, setActiveTab] = useState<"biodata" | "dokumen" | "riwayat">("biodata");

  if (!isOpen || !participant) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl my-auto flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 md:p-6 border-b border-gray-100 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl uppercase shrink-0">{participant.nama.substring(0, 2)}</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 leading-tight">{participant.nama}</h2>
              <p className="text-sm text-gray-500 mt-1">
                No. Pend: {participant.noPendaftaran} • {participant.prodi}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 md:px-6 border-b border-gray-100 flex gap-6 overflow-x-auto hide-scrollbar">
          {(["biodata", "dokumen", "riwayat"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-2 capitalize">
                {tab === "biodata" && <UserRound className="w-4 h-4" />}
                {tab === "dokumen" && <FileText className="w-4 h-4" />}
                {tab === "riwayat" && <Clock className="w-4 h-4" />}
                {tab === "biodata" ? "Biodata Lengkap" : tab === "dokumen" ? "Dokumen Pendukung" : "Riwayat"}
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5 md:p-6 overflow-y-auto flex-1 bg-gray-50/30">
          {activeTab === "biodata" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <UserRound className="w-4 h-4 text-blue-600" /> Informasi Pribadi
                </h3>
                <div className="bg-white p-4 rounded-xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-500 text-xs mb-1">Nama Lengkap</span>
                    <span className="font-medium text-gray-900">{participant.nama}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs mb-1">NIK</span>
                    <span className="font-medium text-gray-900">3501192837465012</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs mb-1">Tempat, Tanggal Lahir</span>
                    <span className="font-medium text-gray-900">Surabaya, 15 Agustus 1995</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs mb-1">Jenis Kelamin</span>
                    <span className="font-medium text-gray-900">Laki-laki</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="block text-gray-500 text-xs mb-1">Alamat</span>
                    <span className="font-medium text-gray-900">Jl. Pahlawan No. 123, Kel. Alun-alun, Kec. Pusat, Surabaya</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-600" /> Akademik & Program
                </h3>
                <div className="bg-white p-4 rounded-xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-500 text-xs mb-1">Pilihan Program Studi</span>
                    <span className="font-medium text-gray-900">{participant.prodi}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs mb-1">Jalur Pendaftaran</span>
                    <span className="font-medium text-gray-900">Mandiri (Reguler)</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs mb-1">Asal Instansi/Perusahaan</span>
                    <span className="font-medium text-gray-900">PT Maju Mundur Sejahtera</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs mb-1">Pendidikan Terakhir</span>
                    <span className="font-medium text-gray-900">S2 Manajemen Keuangan</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "dokumen" && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" /> Berkas Pendaftaran
              </h3>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden text-sm">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-600 border-b border-gray-100">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Nama Dokumen</th>
                      <th className="px-4 py-3 font-semibold text-center">Status</th>
                      <th className="px-4 py-3 font-semibold text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { name: "KTP", status: "Valid" },
                      { name: "Ijazah S2 & Transkrip", status: "Valid" },
                      { name: "Proposal Disertasi", status: "Menunggu" },
                      { name: "Pas Foto", status: "Valid" },
                    ].map((doc, i) => (
                      <tr key={i} className="hover:bg-gray-50 hover:text-blue-600 transition-colors">
                        <td className="px-4 py-3 font-medium">{doc.name}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${doc.status === "Valid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{doc.status}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <button className="text-blue-600 font-semibold text-xs hover:underline cursor-pointer">Lihat</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "riwayat" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" /> Status Pendaftaran
                </h3>
                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between text-sm">
                  <div>
                    <span className="block font-medium text-gray-900 mb-1">Administrasi</span>
                    <span className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded border border-green-200">{participant.statusAdministrasi}</span>
                  </div>
                  <div className="text-right">
                    <span className="block font-medium text-gray-900 mb-1">Jadwal Seleksi/Wawancara</span>
                    {participant.statusWawancara === "Belum Dijadwalkan" ? (
                      <span className="text-gray-500 font-medium">Belum Diatur</span>
                    ) : (
                      <>
                        <span className="block text-blue-600 font-semibold">
                          {participant.tanggalWawancara} {participant.waktuWawancara}
                        </span>
                        <span className="text-xs text-gray-500">
                          [{participant.metodeWawancara}] {participant.lokasi}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-600" /> Riwayat Pembayaran Pendaftaran
                </h3>
                <div className="bg-white p-4 rounded-xl border border-gray-100 text-sm flex items-center justify-between">
                  <div>
                    <span className="block font-medium text-gray-900">Biaya Formulir S3 PMB</span>
                    <span className="block text-gray-500 text-xs mt-1">Metode: Virtual Account BCA</span>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-gray-900">Rp 1.000.000</span>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-800 text-[10px] uppercase font-bold rounded-full tracking-wide">Lunas</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPesertaModal;
