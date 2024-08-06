import { Route, Routes } from "react-router-dom";
import NotFound from "../components/common/404";
import Dashboard from "../components/local/dashboard/Dashboard";
import SiteSettings from "../components/local/dashboard/pages/siteSettings/SiteSettings";
import Users from "../components/local/dashboard/pages/users/Users";
import Login from "../components/local/login";
import MainDashboardLayout from "../layout/MainDashboardLayout";
import RedirectLayout from "../layout/RedirectLayout";

const SiteRoutes = () => {
   return (
      <Routes>
         <Route element={<RedirectLayout />}>
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<Login />} />
         </Route>
         <Route element={<MainDashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-managmement" element={<Users />} />
            <Route path="/site-settings" element={<SiteSettings />} />
         </Route>
      </Routes>
   );
};

export default SiteRoutes;
