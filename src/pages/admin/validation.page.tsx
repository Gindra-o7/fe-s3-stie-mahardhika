import { useState } from "react";
import AdminHeader from "@/components/admin/Header";
import ValidasiPendaftar from "@/components/admin/validation/ValidasiPendaftar";
import DataCamaba from "@/components/admin/validation/DataCamaba";
import { ClipboardCheck, GraduationCap } from "lucide-react";

type TabKey = "validasi-pendaftar" | "data-camaba";

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "validasi-pendaftar", label: "Validasi Pendaftar", icon: ClipboardCheck },
  { key: "data-camaba", label: "Data Camaba", icon: GraduationCap },
];

const ValidationPage = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("validasi-pendaftar");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <AdminHeader />
      <main className="container mx-auto px-4 md:px-8 py-6 md:py-8">
        {/* Tab Navigation */}
        <div className="flex gap-1 mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer flex-1 justify-center
                  ${isActive ? "bg-[#08C9EC] text-white shadow-sm" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden text-xs">{tab.label.split(" ").slice(-1)[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === "validasi-pendaftar" && <ValidasiPendaftar />}
        {activeTab === "data-camaba" && <DataCamaba />}
      </main>
    </div>
  );
};

export default ValidationPage;
