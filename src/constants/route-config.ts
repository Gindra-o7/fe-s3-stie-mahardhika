export type RouteKey =
  | "HOME"
  | "ACADEMIC"
  | "HOW_TO_APPLY"
  | "FACILITY"
  | "CURRICULUM"
  | "COST"
  | "REGISTRATION"
  | "PLACEMENT"
  | "STAFF"
  | "NEWS"
  | "INTERNATIONAL_SUPPORT"
  | "OUR_PEOPLE"
  | "ABOUT"
  | "PROFILE"
  | "LOGIN"
  | "FORGOT_PASSWORD"
  | "RESET_PASSWORD"
  | "CAREER_OPPORTUNITY";

export const ROUTE_CONFIG: Record<RouteKey, { id: string; en: string; zh: string }> = {
  HOME: { id: "/", en: "/", zh: "/" },
  ACADEMIC: { id: "/akademik", en: "/academic", zh: "/xueshu" },
  HOW_TO_APPLY: { id: "/cara-mendaftar", en: "/how-to-apply", zh: "/ruhe-shenqing" },
  FACILITY: { id: "/fasilitas", en: "/facility", zh: "/sheshi" },
  CURRICULUM: { id: "/kurikulum", en: "/curriculum", zh: "/kecheng" },
  COST: { id: "/biaya", en: "/cost", zh: "/feiyong" },
  REGISTRATION: { id: "/pendaftaran", en: "/registration", zh: "/zhuce" },
  PLACEMENT: { id: "/penempatan", en: "/placement", zh: "/anzhi" },
  STAFF: { id: "/staf", en: "/staff", zh: "/zhiyuan" },
  NEWS: { id: "/berita", en: "/news", zh: "/xinwen" },
  INTERNATIONAL_SUPPORT: { id: "/dukungan-internasional", en: "/international-support", zh: "/guoji-zhichi" },
  OUR_PEOPLE: { id: "/orang-kami", en: "/our-people", zh: "/women-de-ren" },
  ABOUT: { id: "/tentang-kami", en: "/about", zh: "/guanyu-women" },
  PROFILE: { id: "/profil", en: "/profile", zh: "/gaikuang" },
  LOGIN: { id: "/masuk", en: "/login", zh: "/denglu" },
  FORGOT_PASSWORD: { id: "/lupa-sandi", en: "/forgot-password", zh: "/wangji-mima" },
  RESET_PASSWORD: { id: "/atur-sandi", en: "/reset-password", zh: "/chongzhi-mima" },
  CAREER_OPPORTUNITY: { id: "/peluang-karir", en: "/career-opportunity", zh: "/zhiye-jihui" },
};

export const getRoutePath = (key: RouteKey, lang: "id" | "en" | "zh" = "id") => {
  return ROUTE_CONFIG[key][lang];
};

export const getAllPaths = (key: RouteKey) => {
  return Object.values(ROUTE_CONFIG[key]);
};

export const getRouteKeyFromPath = (path: string): RouteKey | undefined => {
  const normalizedPath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;

  for (const [key, paths] of Object.entries(ROUTE_CONFIG)) {
    if (Object.values(paths).includes(normalizedPath)) {
      return key as RouteKey;
    }
  }
  return undefined;
};
