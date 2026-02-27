import { useState } from "react";
import { Plus, Edit2, Trash2, Search, CheckCircle, XCircle } from "lucide-react";

interface RegistrationType {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  quota: number;
}

const initialData: RegistrationType[] = [
  { id: "1", name: "Jalur Reguler (TES)", description: "Pendaftaran melalui jalur tes tulis dan wawancara.", isActive: true, quota: 150 },
  { id: "2", name: "Jalur Prestasi", description: "Pendaftaran bagi calon mahasiswa dengan prestasi akademik/non-akademik.", isActive: true, quota: 50 },
  { id: "3", name: "Jalur Beasiswa", description: "Jalur pendaftaran khusus penerima beasiswa penuh.", isActive: false, quota: 20 },
];

const JenisPendaftaranAdmin = () => {
  const [data, setData] = useState<RegistrationType[]>(initialData);
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const toggleStatus = (id: string) => {
    setData((prev) => prev.map((item) => (item.id === id ? { ...item, isActive: !item.isActive } : item)));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Jenis Pendaftaran</h2>
          <p className="text-sm text-gray-500 mt-1">Kelola jalur penerimaan mahasiswa baru yang tersedia.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari jalur..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm whitespace-nowrap cursor-pointer">
            <Plus className="w-4 h-4" />
            Tambah Jalur
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
            <tr>
              <th className="px-6 py-4">Nama Jalur</th>
              <th className="px-6 py-4">Deskripsi Singkat</th>
              <th className="px-6 py-4 text-center">Kuota</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  Tidak ada data yang ditemukan.
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 font-semibold text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 text-gray-600 max-w-xs truncate" title={item.description}>
                    {item.description}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-800 font-medium">{item.quota}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleStatus(item.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                        item.isActive ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {item.isActive ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5" /> Aktif
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Nonaktif
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded cursor-pointer transition-colors" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-red-600 hover:bg-red-50 rounded cursor-pointer transition-colors" title="Hapus">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JenisPendaftaranAdmin;
