import { useState, useMemo } from "react";
import AdminHeader from "@/components/admin/Header";
import ScheduleFilter from "@/components/admin/schedule/ScheduleFilter";
import ScheduleTable, { ScheduleParticipant, WawancaraStatus } from "@/components/admin/schedule/ScheduleTable";
import SetScheduleModal from "@/components/admin/schedule/SetScheduleModal";
import DetailPesertaModal from "@/components/admin/schedule/DetailPesertaModal";
import InterviewResultModal from "@/components/admin/schedule/InterviewResultModal";

const initialData: ScheduleParticipant[] = [
  { id: "1", noPendaftaran: "PMB-26-001", nama: "Ahmad Rizky", prodi: "S3 Ilmu Manajemen", statusAdministrasi: "Lengkap", statusWawancara: "Belum Dijadwalkan" },
  {
    id: "2",
    noPendaftaran: "PMB-26-002",
    nama: "Siti Sarah",
    prodi: "S3 Ilmu Akuntansi",
    statusAdministrasi: "Lengkap",
    statusWawancara: "Terjadwal",
    tanggalWawancara: "2026-03-10",
    waktuWawancara: "10:00 - 11:00",
    metodeWawancara: "Online",
    pewawancara: "Dosen A",
    lokasi: "https://zoom.us/j/12345",
  },
  {
    id: "3",
    noPendaftaran: "PMB-26-003",
    nama: "Budi Santoso",
    prodi: "S3 Ilmu Ekonomi",
    statusAdministrasi: "Lengkap",
    statusWawancara: "Selesai",
    tanggalWawancara: "2026-03-01",
    waktuWawancara: "09:00 - 10:00",
    metodeWawancara: "Offline",
    pewawancara: "Prof. Budi",
    lokasi: "Ruang Rapat 1",
  },
  {
    id: "4",
    noPendaftaran: "PMB-26-004",
    nama: "Dian Pelangi",
    prodi: "S3 Ilmu Manajemen",
    statusAdministrasi: "Lengkap",
    statusWawancara: "Hadir",
    tanggalWawancara: "2026-03-05",
    waktuWawancara: "13:00 - 14:00",
    metodeWawancara: "Online",
    pewawancara: "Dosen B",
    lokasi: "https://meet.google.com/abc",
  },
  {
    id: "5",
    noPendaftaran: "PMB-26-005",
    nama: "Eko Purwanto",
    prodi: "S3 Ilmu Akuntansi",
    statusAdministrasi: "Lengkap",
    statusWawancara: "Tidak Hadir",
    tanggalWawancara: "2026-02-28",
    waktuWawancara: "15:00 - 16:00",
    metodeWawancara: "Offline",
    pewawancara: "Prof. Budi",
    lokasi: "Gedung Pasca",
  },
];

const SchedulePage = () => {
  const [data, setData] = useState<ScheduleParticipant[]>(initialData);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [dateFilter, setDateFilter] = useState("");
  const [interviewerFilter, setInterviewerFilter] = useState("Semua");

  // Modal States
  const [selectedParticipant, setSelectedParticipant] = useState<ScheduleParticipant | null>(null);
  const [isSetScheduleOpen, setIsSetScheduleOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  // Derived Filtered Data
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchSearch = !searchQuery || item.nama.toLowerCase().includes(searchQuery.toLowerCase()) || item.noPendaftaran.toLowerCase().includes(searchQuery.toLowerCase());
      const matchStatus = statusFilter === "Semua" || item.statusWawancara === statusFilter;
      const matchDate = !dateFilter || item.tanggalWawancara === dateFilter;
      const matchInterviewer = interviewerFilter === "Semua" || item.pewawancara === interviewerFilter;

      return matchSearch && matchStatus && matchDate && matchInterviewer;
    });
  }, [data, searchQuery, statusFilter, dateFilter, interviewerFilter]);

  // Handlers for Modals Calling
  const handleOpenAturJadwal = (p: ScheduleParticipant) => {
    setSelectedParticipant(p);
    setIsSetScheduleOpen(true);
  };

  const handleOpenDetail = (p: ScheduleParticipant) => {
    setSelectedParticipant(p);
    setIsDetailOpen(true);
  };

  const handleOpenInputHasil = (p: ScheduleParticipant) => {
    setSelectedParticipant(p);
    setIsResultOpen(true);
  };

  // Handlers for State Updates
  const handleUpdateStatus = (id: string, newStatus: WawancaraStatus) => {
    setData((prev) => prev.map((item) => (item.id === id ? { ...item, statusWawancara: newStatus } : item)));
  };

  const handleSaveSchedule = (scheduleData: { tanggal: string; jamMulai: string; jamSelesai: string; metode: "Online" | "Offline"; pewawancara: string; lokasi: string; catatan: string }) => {
    if (!selectedParticipant) return;

    setData((prev) =>
      prev.map((item) =>
        item.id === selectedParticipant.id
          ? {
              ...item,
              statusWawancara: "Terjadwal",
              tanggalWawancara: scheduleData.tanggal,
              waktuWawancara: `${scheduleData.jamMulai} - ${scheduleData.jamSelesai}`,
              metodeWawancara: scheduleData.metode,
              pewawancara: scheduleData.pewawancara,
              lokasi: scheduleData.lokasi,
            }
          : item,
      ),
    );

    setIsSetScheduleOpen(false);

    // Simulate Notification
    setTimeout(() => {
      alert(`Berhasil mengatur jadwal wawancara untuk ${selectedParticipant.nama}.\nSistem telah mengirimkan detail via Email dan WhatsApp otomatis.`);
    }, 100);
  };

  const handleSaveResult = (resultData: { nilai: string; catatan: string; rekomendasi: "Lulus" | "Lulus Bersyarat" | "Tidak Lulus" }) => {
    if (!selectedParticipant) return;

    // Typically this would also save result to DB. For UI, we can just close.
    // We could technically change status to Selesai if not already, but usually it is 'Selesai' when grading.
    setIsResultOpen(false);

    setTimeout(() => {
      alert(`Berhasil menyimpan hasil wawancara untuk ${selectedParticipant.nama}.\nNilai: ${resultData.nilai} | Keputusan: ${resultData.rekomendasi}`);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-10">
      <AdminHeader />

      <main className="container mx-auto px-4 md:px-8 py-6 md:py-8 space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Penjadwalan Wawancara</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600">Atur jadwal seleksi wawancara peserta, pantau kehadiran, dan input hasil tes.</p>
        </div>

        {/* Filters */}
        <ScheduleFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          dateFilter={dateFilter}
          onDateChange={setDateFilter}
          interviewerFilter={interviewerFilter}
          onInterviewerChange={setInterviewerFilter}
        />

        {/* Main Table */}
        <ScheduleTable data={filteredData} onDetail={handleOpenDetail} onAturJadwal={handleOpenAturJadwal} onInputHasil={handleOpenInputHasil} onUpdateStatus={handleUpdateStatus} />

        {/* Modals */}
        <SetScheduleModal isOpen={isSetScheduleOpen} participant={selectedParticipant} onClose={() => setIsSetScheduleOpen(false)} onSave={handleSaveSchedule} />

        <DetailPesertaModal isOpen={isDetailOpen} participant={selectedParticipant} onClose={() => setIsDetailOpen(false)} />

        <InterviewResultModal isOpen={isResultOpen} participant={selectedParticipant} onClose={() => setIsResultOpen(false)} onSave={handleSaveResult} />
      </main>
    </div>
  );
};

export default SchedulePage;
