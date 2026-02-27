import { useState } from "react";
import { Search, Save, UserCheck, ShieldAlert, Users } from "lucide-react";

interface AdminRole {
  id: string;
  name: string;
  email: string;
  role: "Super Admin" | "Admin PMB" | "Reviewer";
  lastLogin: string;
  permissions: {
    manageUsers: boolean;
    manageRegistration: boolean;
    manageCMS: boolean;
    manageValidation: boolean;
  };
}

const initialData: AdminRole[] = [
  {
    id: "1",
    name: "Dr. Budi Santoso",
    email: "budi.santoso@stie-mahardhika.ac.id",
    role: "Super Admin",
    lastLogin: "Baru saja",
    permissions: { manageUsers: true, manageRegistration: true, manageCMS: true, manageValidation: true },
  },
  {
    id: "2",
    name: "Siti Aminah, S.Kom",
    email: "siti.aminah@stie-mahardhika.ac.id",
    role: "Admin PMB",
    lastLogin: "2 jam yang lalu",
    permissions: { manageUsers: false, manageRegistration: true, manageCMS: true, manageValidation: true },
  },
  {
    id: "3",
    name: "Prof. Dr. Hendra",
    email: "hendra@stie-mahardhika.ac.id",
    role: "Reviewer",
    lastLogin: "Kemarin, 14:30",
    permissions: { manageUsers: false, manageRegistration: false, manageCMS: false, manageValidation: true },
  },
];

const RoleSettingAdmin = () => {
  const [data, setData] = useState<AdminRole[]>(initialData);
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState<AdminRole | null>(initialData[1]); // Default select admin PMB

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.role.toLowerCase().includes(search.toLowerCase()));

  const handlePermissionChange = (permissionKey: keyof AdminRole["permissions"]) => {
    if (!selectedRole) return;

    // In a real app, Super Admin permissions shouldn't be editable here
    if (selectedRole.role === "Super Admin") return;

    setSelectedRole({
      ...selectedRole,
      permissions: {
        ...selectedRole.permissions,
        [permissionKey]: !selectedRole.permissions[permissionKey],
      },
    });

    // Update main data array for immediate feedback (mock)
    setData((prev) =>
      prev.map((item) =>
        item.id === selectedRole.id
          ? {
              ...item,
              permissions: {
                ...item.permissions,
                [permissionKey]: !item.permissions[permissionKey],
              },
            }
          : item,
      ),
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Users List */}
      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-150">
        <div className="p-5 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Daftar Admin
          </h2>
          <div className="mt-4 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari admin..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-3 space-y-2">
          {filteredData.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-4">Tidak ada admin ditemukan.</p>
          ) : (
            filteredData.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedRole(user)}
                className={`p-3 rounded-lg cursor-pointer transition-all border ${selectedRole?.id === user.id ? "bg-blue-50 border-blue-200 shadow-sm" : "bg-white border-transparent hover:border-gray-200 hover:bg-gray-50"}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={`font-semibold text-sm ${selectedRole?.id === user.id ? "text-blue-800" : "text-gray-900"}`}>{user.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                      user.role === "Super Admin" ? "bg-purple-100 text-purple-700" : user.role === "Admin PMB" ? "bg-blue-100 text-blue-700" : "bg-teal-100 text-teal-700"
                    }`}
                  >
                    {user.role}
                  </span>
                  <span className="text-[10px] text-gray-400">Login: {user.lastLogin}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Permissions Panel */}
      <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-150">
        {selectedRole ? (
          <>
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50/50">
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-tight">{selectedRole.name}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Konfigurasi Hak Akses &middot; <span className="font-medium text-gray-700">{selectedRole.role}</span>
                </p>
              </div>
              <button
                disabled={selectedRole.role === "Super Admin"}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm cursor-pointer"
              >
                <Save className="w-4 h-4" />
                Simpan Perubahan
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
              {selectedRole.role === "Super Admin" && (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3 text-yellow-800">
                  <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm">Hak akses Super Admin memiliki kontrol penuh atas sistem dan tidak dapat dimodifikasi dari menu ini.</p>
                </div>
              )}

              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-blue-600" /> Modul Sistem
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* manageRegistration */}
                <div
                  onClick={() => handlePermissionChange("manageRegistration")}
                  className={`p-4 border rounded-xl flex items-start gap-3 transition-colors ${selectedRole.role === "Super Admin" ? "cursor-default opacity-70" : "cursor-pointer"} ${
                    selectedRole.permissions.manageRegistration ? "bg-blue-50/50 border-blue-200" : "bg-white border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="mt-0.5">
                    <input
                      type="checkbox"
                      checked={selectedRole.permissions.manageRegistration}
                      onChange={() => {}} // handled by parent div
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer pointer-events-none"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Kelola Jenis Pendaftaran</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">Dapat menambah, mengubah status, dan mengedit jalur penerimaan mahasiswa baru (S1, S2, S3).</p>
                  </div>
                </div>

                {/* manageValidation */}
                <div
                  onClick={() => handlePermissionChange("manageValidation")}
                  className={`p-4 border rounded-xl flex items-start gap-3 transition-colors ${selectedRole.role === "Super Admin" ? "cursor-default opacity-70" : "cursor-pointer"} ${
                    selectedRole.permissions.manageValidation ? "bg-blue-50/50 border-blue-200" : "bg-white border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="mt-0.5">
                    <input type="checkbox" checked={selectedRole.permissions.manageValidation} onChange={() => {}} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Validasi & Data Pendaftar</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">Dapat memvalidasi berkas pendaftar, meluluskan, dan mengekspor data calon mahasiswa baru.</p>
                  </div>
                </div>

                {/* manageCMS */}
                <div
                  onClick={() => handlePermissionChange("manageCMS")}
                  className={`p-4 border rounded-xl flex items-start gap-3 transition-colors ${selectedRole.role === "Super Admin" ? "cursor-default opacity-70" : "cursor-pointer"} ${
                    selectedRole.permissions.manageCMS ? "bg-blue-50/50 border-blue-200" : "bg-white border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="mt-0.5">
                    <input type="checkbox" checked={selectedRole.permissions.manageCMS} onChange={() => {}} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">CMS Informasi</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">Berwenang mengelola konten website seperti pengumuman, panduan, dan banner informasi.</p>
                  </div>
                </div>

                {/* manageUsers */}
                <div
                  onClick={() => handlePermissionChange("manageUsers")}
                  className={`p-4 border rounded-xl flex items-start gap-3 transition-colors ${selectedRole.role === "Super Admin" ? "cursor-default opacity-70" : "cursor-pointer"} ${
                    selectedRole.permissions.manageUsers ? "bg-blue-50/50 border-blue-200" : "bg-white border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="mt-0.5">
                    <input type="checkbox" checked={selectedRole.permissions.manageUsers} onChange={() => {}} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Manajemen Admin</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">Hak akses istimewa untuk menambah admin baru dan mengatur role permission admin lain.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8">
            <Users className="w-16 h-16 mb-4 text-gray-200" />
            <p className="text-lg font-medium text-gray-500">Pilih admin dari daftar</p>
            <p className="text-sm text-center max-w-sm mt-2">Pilih salah satu admin di panel sebelah kiri untuk melihat dan mengatur hak akses mereka.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleSettingAdmin;
