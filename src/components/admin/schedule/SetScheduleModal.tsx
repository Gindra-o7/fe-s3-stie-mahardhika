import { useState } from "react";
import { X, Calendar, Clock, MapPin, Video, Users, FileText } from "lucide-react";
import { ScheduleParticipant } from "./ScheduleTable";

interface SetScheduleModalProps {
  isOpen: boolean;
  participant: ScheduleParticipant | null;
  onClose: () => void;
  onSave: (data: { tanggal: string; jamMulai: string; jamSelesai: string; metode: "Online" | "Offline"; pewawancara: string; lokasi: string; catatan: string }) => void;
}

const SetScheduleModal = ({ isOpen, participant, onClose, onSave }: SetScheduleModalProps) => {
  const [tanggal, setTanggal] = useState("");
  const [jamMulai, setJamMulai] = useState("");
  const [jamSelesai, setJamSelesai] = useState("");
  const [metode, setMetode] = useState<"Online" | "Offline">("Online");
  const [pewawancara, setPewawancara] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [catatan, setCatatan] = useState("");

  if (!isOpen || !participant) return null;

  const handleSave = () => {
    // Validate inputs
    if (!tanggal || !jamMulai || !jamSelesai || !pewawancara || !lokasi) {
      alert("Mohon lengkapi semua isian wajib.");
      return;
    }

    onSave({ tanggal, jamMulai, jamSelesai, metode, pewawancara, lokasi, catatan });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Atur Jadwal Wawancara</h2>
            <p className="text-sm text-gray-500 mt-1">
              Peserta: <span className="font-semibold text-gray-700">{participant.nama}</span> ({participant.noPendaftaran})
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6 space-y-5">
          {/* Waktu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-600" /> Tanggal Wawancara <span className="text-red-500">*</span>
              </label>
              <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" /> Jam Mulai <span className="text-red-500">*</span>
                </label>
                <input type="time" value={jamMulai} onChange={(e) => setJamMulai(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  &nbsp;Jam Selesai <span className="text-red-500">*</span>
                </label>
                <input type="time" value={jamSelesai} onChange={(e) => setJamSelesai(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>

          {/* Metode & Lokasi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <Video className="w-4 h-4 text-blue-600" /> Metode <span className="text-red-500">*</span>
              </label>
              <select
                value={metode}
                onChange={(e) => setMetode(e.target.value as "Online" | "Offline")}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="Online">Online (Zoom / GMeet)</option>
                <option value="Offline">Offline (Tatap Muka)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600" /> {metode === "Online" ? "Link Meeting" : "Ruang/Lokasi"} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder={metode === "Online" ? "https://zoom.us/..." : "Lab Komputer 1..."}
                value={lokasi}
                onChange={(e) => setLokasi(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Pewawancara */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-600" /> Pewawancara <span className="text-red-500">*</span>
            </label>
            <select value={pewawancara} onChange={(e) => setPewawancara(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
              <option value="" disabled>
                -- Pilih Pewawancara --
              </option>
              <option value="Dosen A">Dosen A</option>
              <option value="Dosen B">Dosen B</option>
              <option value="Prof. Budi">Prof. Budi</option>
            </select>
          </div>

          {/* Catatan */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-600" /> Catatan Admin (Opsional)
            </label>
            <textarea
              rows={3}
              placeholder="Tambahkan instruksi khusus..."
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg text-xs md:text-sm">
            <span className="font-semibold">Info:</span> Setelah jadwal disimpan, sistem akan otomatis mengirimkan notifikasi Email dan WhatsApp berisi detail wawancara kepada peserta.
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 md:p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50 rounded-b-xl">
          <button onClick={onClose} className="px-5 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            Batal
          </button>
          <button onClick={handleSave} className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-sm">
            Simpan & Kirim Notifikasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetScheduleModal;
