import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Languages } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { getRouteKeyFromPath, getRoutePath } from "@/constants/route-config";
import indonesiaFlag from "@/assets/indonesia.svg";
import unitedKingdomFlag from "@/assets/united-kingdom.svg";
import chinaFlag from "@/assets/china.svg";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "id" as Language, name: t("language.indonesian"), flag: indonesiaFlag },
    { code: "en" as Language, name: t("language.english"), flag: unitedKingdomFlag },
    { code: "zh" as Language, name: t("language.chinese"), flag: chinaFlag },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (langCode: Language) => {
    // Dapatkan rute untuk bahasa yang baru dipilih terlebih dahulu
    const currentRouteKey = getRouteKeyFromPath(window.location.pathname);
    let willRedirect = false;

    if (currentRouteKey) {
      const newPath = getRoutePath(currentRouteKey, langCode);
      if (newPath !== window.location.pathname) {
        willRedirect = true;
        // Simpan preferensi bahasa terlebih dahulu sebelum berpindah halaman
        // Kita juga harus secara manual mengubah "i18nextLng" agar plugin LanguageDetector mendeteksinya segera saat reload
        localStorage.setItem("language", langCode);
        localStorage.setItem("i18nextLng", langCode);
        setIsOpen(false);
        // Melakukan reload paksa ke rute baru (auto refresh)
        // tanpa mengubah state i18next saat ini, agar tidak ada visual glitch
        window.location.assign(newPath);
      }
    }

    // Jika tidak ada redirect (misal, rute sama atau tidak ditemukan), ganti bahasa secara halus (SPA state)
    if (!willRedirect) {
      setLanguage(langCode);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border border-[#207D96] text-[#207D96] hover:bg-[#207D96] hover:text-white transition-all duration-200 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-1.5">
          {currentLanguage ? (
            <>
              <img src={currentLanguage.flag} alt={currentLanguage.name} className="w-4 h-4 object-contain" />
              <span className="text-xs font-medium uppercase">{currentLanguage.code}</span>
            </>
          ) : (
            <Languages className="w-4 h-4" />
          )}
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3 h-3" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

            {/* Dropdown */}
            <motion.div
              className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 transition-colors ${language === lang.code ? "bg-[#207D96]/10 text-[#207D96]" : "text-gray-700"}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <img src={lang.flag} alt={lang.name} className="w-5 h-5 object-contain" />
                  <span className="font-medium text-sm">{lang.name}</span>
                  {language === lang.code && <motion.div className="ml-auto w-1.5 h-1.5 bg-[#207D96] rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} />}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
