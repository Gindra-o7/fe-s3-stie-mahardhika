import { Search, Filter, Calendar } from "lucide-react";

interface ScheduleFilterProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  statusFilter: string;
  onStatusChange: (val: string) => void;
  dateFilter: string;
  onDateChange: (val: string) => void;
  interviewerFilter: string;
  onInterviewerChange: (val: string) => void;
}

const ScheduleFilter = ({ searchQuery, onSearchChange, statusFilter, onStatusChange, dateFilter, onDateChange, interviewerFilter, onInterviewerChange }: ScheduleFilterProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        {/* Search */}
        <div className="w-full md:flex-1">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Pencarian</label>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama / no pendaftar..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filter Status */}
        <div className="w-full md:w-48">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Status Wawancara</label>
          <div className="relative">
            <Filter className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <select
              value={statusFilter}
              onChange={(e) => onStatusChange(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="Semua">Semua Status</option>
              <option value="Belum Dijadwalkan">Belum Dijadwalkan</option>
              <option value="Terjadwal">Terjadwal</option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
              <option value="Selesai">Selesai</option>
            </select>
          </div>
        </div>

        {/* Filter Tanggal */}
        <div className="w-full md:w-48">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Tanggal</label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => onDateChange(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Filter Pewawancara */}
        <div className="w-full md:w-48">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Pewawancara</label>
          <select
            value={interviewerFilter}
            onChange={(e) => onInterviewerChange(e.target.value)}
            className="px-4 py-2 w-full border border-gray-300 rounded-lg text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="Semua">Semua Pewawancara</option>
            <option value="Dosen A">Dosen A</option>
            <option value="Dosen B">Dosen B</option>
            <option value="Prof. Budi">Prof. Budi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFilter;
