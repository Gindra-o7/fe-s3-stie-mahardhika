import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoMahardhika from "@/assets/Logo_Mahardhika.png";
import { LayoutDashboard, CheckSquare, CalendarDays, Users, Settings, Menu, X } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Validasi", path: "/admin/validation", icon: CheckSquare },
  { label: "Jadwal Wawancara", path: "/admin/schedule", icon: CalendarDays },
  { label: "Seleksi", path: "/admin/selection", icon: Users },
  { label: "Admin", path: "/admin/settings", icon: Settings },
];

const AdminHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer" onClick={() => navigate("/admin")}>
            <img src={LogoMahardhika} alt="STIE Mahardhika" className="h-10 md:h-14 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer
                    ${isActive ? "border-[#08C9EC] bg-[#08C9EC]/10 text-[#08C9EC]" : "border-gray-800 text-gray-800 hover:border-[#08C9EC] hover:text-[#08C9EC] hover:bg-[#08C9EC]/5"}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="uppercase tracking-wide">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-1">
            <nav className="flex flex-col gap-2 pt-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer
                      ${isActive ? "bg-[#08C9EC]/10 text-[#08C9EC] border-l-4 border-[#08C9EC]" : "text-gray-700 hover:bg-gray-50 hover:text-[#08C9EC]"}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="uppercase tracking-wide">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
