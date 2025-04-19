import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import DashboardLayout from "../components/layout/DashboardLayout";
import UsersPage from "../pages/UsersPage";
import RestaurantsPage from "../pages/RestaurantsPage";
import VibePage from "../pages/VibePage";
import CusinePage from "../pages/CusinePage";
import HelpPage from "../pages/HelpPage";
import FaqsPage from "../pages/FaqsPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProfilePage from "../pages/ProfilePage";
import AboutPage from "../pages/AboutPage";



     const router = createBrowserRouter([
       {
         path: "/",
         element: <DashboardLayout />,
         // loader: rootLoader,
         children: [
            {
                index: true,
                element: <DashboardPage/>
            },
           {
             path: "users",
             element: <UsersPage />,
           },
           {
            path: "restaurants",
            element: <RestaurantsPage />,
            // loader: teamLoader,
           },
           {
            path: "vibe",
            element: <VibePage />,
           },
           {
            path: "cuisine",
            element: <CusinePage />,
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
     ]);


     export default router;
