import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import DashboardLayout from "../components/layout/DashboardLayout";
import UsersPage from "../pages/UsersPage";
import HelpPage from "../pages/HelpPage";
import FaqsPage from "../pages/FaqsPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProfilePage from "../pages/ProfilePage";
import AboutPage from "../pages/AboutPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import VerifyOtpPage from "../pages/auth/VerifyOtpPage";
import LoginPage from "../pages/auth/LoginPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "faqs",
        element: <FaqsPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <PublicRoute><LoginPage/></PublicRoute>
  },
  {
    path: "/forgot-password",
    element: <PublicRoute><ForgotPasswordPage/></PublicRoute>
  },
  {
    path: "/verify-otp",
    element: <PublicRoute><VerifyOtpPage/></PublicRoute>
  },
  {
    path: "/reset-password",
    element: <PublicRoute><ResetPasswordPage/></PublicRoute>
  },
  {
    path: "/*",
    element: <NotFoundPage/>
  }
]);

export default router;
