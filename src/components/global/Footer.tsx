import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import LogoGila from "@/assets/components/footer/logo-gila.png";
import LogoMahardhika from "@/assets/components/footer/logo-mahardhika.png";
import "@fontsource/be-vietnam-pro/index.css";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white py-12 px-20 border-t border-gray-200" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div className="container mx-auto px-4">
        {/* Logos */}
        <div className="flex flex-col gap-4 mb-8">
          <img src={LogoGila} alt="Kampus Gila Marketing" className="h-auto w-36" />
          <img src={LogoMahardhika} alt="STIE Mahardhika" className="h-auto w-72" />
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-gray-900 mb-4">{t("footer.contact.title")}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>hello@mahardhika.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+111 91813 23 2309</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Somewhere in the World</span>
              </div>
            </div>
          </div>

          {/* Home Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t("footer.home.title")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t("footer.home.links.benefits")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t("footer.home.links.courses")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t("footer.home.links.testimonials")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t("footer.home.links.faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t("footer.about.title")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t("footer.about.links.company")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t("footer.about.links.achievements")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t("footer.about.links.goals")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t("footer.social.title")}</h3>
            <div className="flex gap-3">
              <motion.a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600">{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
