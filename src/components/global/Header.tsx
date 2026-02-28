import { useState } from "react";
import LogoMahardhika from "@/assets/BOLD_MAHARDHIKA.png";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/ui/language-selector";
import { getRoutePath, RouteKey } from "@/constants/route-config";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { key: string; route: RouteKey }[] = [
    { key: "nav.home", route: "HOME" },
    { key: "nav.academic", route: "ACADEMIC" },
    { key: "nav.international_support", route: "INTERNATIONAL_SUPPORT" },
    { key: "nav.career_opportunity", route: "CAREER_OPPORTUNITY" },
    { key: "nav.howtoapply", route: "HOW_TO_APPLY" },
    { key: "nav.about", route: "ABOUT" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 shadow-sm" style={{ color: "#207D96" }}>
      <div className="container mx-auto px-4 flex items-center h-16 md:h-28 gap-4 md:gap-8 justify-between md:justify-start">
        <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => navigate("/")}>
          <img src={LogoMahardhika} alt="Logo Mahardhika" className="h-10 md:h-24 w-auto" />
        </div>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-start">
          {navItems.map((item) => (
            <Link key={item.key} to={getRoutePath(item.route, language)} className="text-gray-900 hover:text-[#08C9EC] transition-colors relative group text-sm font-medium">
              {t(item.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#08C9EC] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSelector />

          <button
            onClick={() => navigate(getRoutePath("LOGIN", language))}
            className="hidden lg:flex items-center justify-center border border-[#08C9EC] text-[#08C9EC] px-5 py-2 rounded-full hover:bg-[#08C9EC] hover:text-white transition-all font-semibold text-sm"
          >
            {t("button.login")}
          </button>

          <button className="lg:hidden text-[#207D96]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
          <nav className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={getRoutePath(item.route, language)}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-900 hover:text-[#08C9EC] py-2 px-4 hover:bg-gray-50 rounded-md transition-colors font-medium text-sm border-b border-gray-100 last:border-b-0"
              >
                {t(item.key)}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate(getRoutePath("LOGIN", language));
              }}
              className="mt-2 mx-4 bg-[#08C9EC] text-white py-2.5 rounded-full font-semibold hover:bg-[#06a6c3] transition-colors"
            >
              {t("button.login")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
