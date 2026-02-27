import { useState } from "react";
import { X, Trophy, MessageSquare, ClipboardCheck } from "lucide-react";
import { ScheduleParticipant } from "./ScheduleTable";

interface InterviewResultModalProps {
  isOpen: boolean;
  participant: ScheduleParticipant | null;
  onClose: () => void;
  onSave: (data: { nilai: string; catatan: string; rekomendasi: "Lulus" | "Lulus Bersyarat" | "Tidak Lulus" }) => void;
}

const InterviewResultModal = ({ isOpen, participant, onClose, onSave }: InterviewResultModalProps) => {
  const [nilai, setNilai] = useState("");
  const [catatan, setCatatan] = useState("");
  const [rekomendasi, setRekomendasi] = useState<"Lulus" | "Lulus Bersyarat" | "Tidak Lulus">("Lulus");

  if (!isOpen || !participant) return null;

  const handleSave = () => {
    if (!nilai || !rekomendasi) {
      alert("Nilai dan rekomendasi wajib diisi.");
      return;
    }
    onSave({ nilai, catatan, rekomendasi });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Input Hasil Wawancara</h2>
            <p className="text-sm text-gray-500 mt-1">
              Peserta: <span className="font-semibold text-gray-700">{participant.nama}</span>
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6 space-y-5">
          {/* Nilai */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-emerald-600" /> Nilai Wawancara (0-100) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={nilai}
              onChange={(e) => setNilai(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Contoh: 85"
            />
          </div>

          {/* Rekomendasi */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <ClipboardCheck className="w-4 h-4 text-emerald-600" /> Rekomendasi Keputusan <span className="text-red-500">*</span>
            </label>
            <select
              value={rekomendasi}
              onChange={(e) => setRekomendasi(e.target.value as any)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="Lulus">Lulus</option>
              <option value="Lulus Bersyarat">Lulus Bersyarat</option>
              <option value="Tidak Lulus">Tidak Lulus</option>
            </select>
          </div>

          {/* Catatan */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-emerald-600" /> Catatan Pewawancara
            </label>
            <textarea
              rows={4}
              placeholder="Tuliskan catatan detail mengenai performa peserta saat wawancara..."
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 md:p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50 rounded-b-xl">
          <button onClick={onClose} className="px-5 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            Batal
          </button>
          <button onClick={handleSave} className="px-5 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm cursor-pointer">
            Simpan Hasil
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewResultModal;
