import { motion } from "framer-motion";
import LogoMahardhika from "@/assets/BOLD_MAHARDHIKA.png";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/ui/language-selector";
import { getRoutePath, RouteKey } from "@/constants/route-config";

const Header = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const navItems: { key: string; route: RouteKey }[] = [
    { key: "nav.home", route: "HOME" },
    { key: "nav.academic", route: "ACADEMIC" },
    { key: "nav.international_support", route: "INTERNATIONAL_SUPPORT" },
    { key: "nav.career_opportunity", route: "CAREER_OPPORTUNITY" },
    { key: "nav.howtoapply", route: "HOW_TO_APPLY" },
    { key: "nav.about", route: "ABOUT" },
  ];

  return (
    <motion.header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 shadow-sm" style={{ color: "#207D96" }} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-4 flex items-center h-28 gap-8">
        <motion.div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => navigate("/")}>
          <motion.img src={LogoMahardhika} alt="Logo Mahardhika" className="h-24 w-auto" />
        </motion.div>

        <nav className="hidden md:flex items-center gap-6 flex-1 justify-start">
          {navItems.map((item, index) => (
            <motion.a
              key={item.key}
              href={getRoutePath(item.route, language)}
              className="text-gray-900 hover:text-[#08C9EC] transition-colors relative group text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {t(item.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#08C9EC] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <LanguageSelector />
        {/* <div className="flex items-center gap-4">

          {session ? (
            <>
              <motion.button
                onClick={() => {
                  const user = session.user as any;
                  const role = user?.role;
                  if (role === "mahasiswa") {
                    navigate("/mahasiswa/dashboard");
                  } else if (role === "pendaftar") {
                    navigate("/pendaftar/dashboard");
                  } else {
                    navigate("/dashboard"); // Fallback
                  }
                }}
                className="hidden md:flex items-center gap-2 border-2 border-[#207D96] text-[#207D96] px-5 py-2 rounded-lg hover:bg-[#207D96] hover:text-white transition-all font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Go to Dashboard</span>
              </motion.button>

              <motion.button
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 border-2 border-red-500 text-red-500 px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </motion.button>
            </>
          ) : (
            <>
              <motion.button
                onClick={handleClickLogin}
                className="hidden md:flex items-center gap-2 border-2 border-[#207D96] text-[#207D96] px-5 py-2 rounded-lg hover:bg-[#207D96] hover:text-white transition-all font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>{t('button.login')}</span>
              </motion.button>

              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:block bg-gradient-to-r from-[#207D96] to-[#1B3F6E] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t('button.register')}</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-[#1B3F6E] to-[#207D96]" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
              </motion.button>
            </>
          )}

          <button className="md:hidden text-[#207D96]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div> */}
      </div>

      {/* <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="md:hidden bg-white border-t" style={{ borderColor: "#207D96" }} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <nav className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a key={item.key} href={item.href} className="text-[#207D96] hover:text-[#1B3F6E] py-2 px-4 hover:bg-gray-50 rounded-md transition-colors">
                  {t(item.key)}
                </a>
              ))}


              {session ? (
                <>
                  <button onClick={() => {
                    const user = session.user as any;
                    const role = user?.role;
                    if (role === "mahasiswa") {
                      navigate("/mahasiswa/dashboard");
                    } else if (role === "pendaftar") {
                      navigate("/pendaftar/dashboard");
                    } else {
                      navigate("/dashboard");
                    }
                  }} className="flex items-center justify-center gap-2 border-2 border-[#207D96] text-[#207D96] px-4 py-2.5 rounded-lg hover:bg-[#207D96] hover:text-white transition-all font-medium mt-2">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Go to Dashboard</span>
                  </button>
                  <button onClick={handleLogout} className="flex items-center justify-center gap-2 border-2 border-red-500 text-red-500 px-4 py-2.5 rounded-lg hover:bg-red-500 hover:text-white transition-all font-medium mt-2">
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleClickLogin} className="flex items-center justify-center gap-2 border-2 border-[#207D96] text-[#207D96] px-4 py-2.5 rounded-lg hover:bg-[#207D96] hover:text-white transition-all font-medium mt-2">
                    <LogIn className="w-4 h-4" />
                    <span>{t('button.login')}</span>
                  </button>

                  <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-[#207D96] to-[#1B3F6E] text-white px-4 py-2.5 rounded-lg hover:shadow-lg transition-all font-semibold">
                    {t('button.register')}
                  </button>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.header>
  );
};

export default Header;
