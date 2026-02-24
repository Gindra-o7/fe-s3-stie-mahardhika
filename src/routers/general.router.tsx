import ForbiddenPage from "@/pages/publics/forbidden.page";
import LandingPage from "@/pages/publics/landing.page";
import NotFoundPage from "@/pages/publics/not-found.page";
import LoginPage from "@/pages/publics/login.page";
import ForgotPasswordPage from "@/pages/publics/forgot-password.page";
import ResetPasswordPage from "@/pages/publics/reset-password.page";
import BiayaPage from "@/pages/publics/biaya.page";
import TataCaraPendaftaranPage from "@/pages/publics/tata-cara-pendaftaran.page";
import CurriculumPage from "@/pages/publics/curriculum.page";
import ProfilProdiPage from "@/pages/publics/profil-prodi.page";
import PaymentCallbackPage from "@/pages/publics/payment-callback.page";
import { RouteObject } from "react-router-dom";
import AcademicPage from "@/pages/publics/academic.page";
import FacilityPage from "@/pages/publics/facility.page";
import HowToApplyPage from "@/pages/publics/how-to-apply.page";
import InternationalSupportPage from "@/pages/publics/international-support.page";
import OurPeoplePage from "@/pages/publics/our-people.page";
import AboutPage from "@/pages/publics/about.page";
import CareerOpportunityPage from "@/pages/publics/career-opportunity.page";
import { ROUTE_CONFIG } from "@/constants/route-config";
import React from "react";

const createLocalizedRoutes = (paths: { id: string; en: string; zh: string }, element: React.ReactNode): RouteObject[] => {
  return Object.values(paths).map((path) => ({
    path,
    element,
  }));
};

export const generalRouter: RouteObject[] = [
  ...createLocalizedRoutes(ROUTE_CONFIG.HOME, <LandingPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.ACADEMIC, <AcademicPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.FACILITY, <FacilityPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.HOW_TO_APPLY, <HowToApplyPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.INTERNATIONAL_SUPPORT, <InternationalSupportPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.OUR_PEOPLE, <OurPeoplePage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.ABOUT, <AboutPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.PROFILE, <ProfilProdiPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.CURRICULUM, <CurriculumPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.COST, <BiayaPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.REGISTRATION, <TataCaraPendaftaranPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.LOGIN, <LoginPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.FORGOT_PASSWORD, <ForgotPasswordPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.RESET_PASSWORD, <ResetPasswordPage />),
  ...createLocalizedRoutes(ROUTE_CONFIG.CAREER_OPPORTUNITY, <CareerOpportunityPage />),
  {
    path: "/forbidden",
    element: <ForbiddenPage />,
  },
  {
    path: "/payment-callback",
    element: <PaymentCallbackPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
