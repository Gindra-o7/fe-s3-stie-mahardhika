import { useState } from "react";
import { Plus, Edit2, Trash2, Search, Link as LinkIcon, Image as ImageIcon } from "lucide-react";

interface ContentType {
  id: string;
  title: string;
  category: string;
  status: "Published" | "Draft";
  updatedAt: string;
}

const initialData: ContentType[] = [
  { id: "1", title: "Pendaftaran Gelombang 1 Dibuka", category: "Pengumuman", status: "Published", updatedAt: "12 Okt 2025" },
  { id: "2", title: "Panduan Upload Berkas PMB", category: "Panduan", status: "Published", updatedAt: "10 Okt 2025" },
  { id: "3", title: "Banner Promo Beasiswa 2026", category: "Banner", status: "Draft", updatedAt: "05 Okt 2025" },
];

const CmsInformasiAdmin = () => {
  const [data] = useState<ContentType[]>(initialData);
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">CMS Informasi</h2>
          <p className="text-sm text-gray-500 mt-1">Kelola konten pengumuman, panduan, dan banner website.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari konten..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-60"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm cursor-pointer whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Tambah Konten
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
            <tr>
              <th className="px-6 py-4">Judul Konten</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4">Terakhir Diubah</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  Tidak ada konten yang ditemukan.
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
                    {item.category === "Banner" ? <ImageIcon className="w-4 h-4 text-emerald-500" /> : <LinkIcon className="w-4 h-4 text-blue-500" />}
                    <span className="truncate max-w-50 md:max-w-xs">{item.title}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{item.category}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>{item.status}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{item.updatedAt}</td>
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

export default CmsInformasiAdmin;
