import React, { createContext, useContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";

export type Language = "id" | "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: Record<string, unknown>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { t, i18n } = useTranslation();

  const handleSetLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Ensure we only ever provide a valid Language type to the rest of the app
  // If i18n.language is undefined, "en-US", or anything else on first render, fallback to "en"
  const validLanguages: Language[] = ["id", "en", "zh"];
  const currentLang = i18n.language && validLanguages.includes(i18n.language as Language) ? (i18n.language as Language) : "en";

  const value: LanguageContextType = {
    language: currentLang,
    setLanguage: handleSetLanguage,
    t: (key: string, options?: Record<string, unknown>) => t(key, options) as string,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
