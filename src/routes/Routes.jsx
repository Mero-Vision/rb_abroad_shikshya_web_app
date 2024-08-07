import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../components/common/404";
import Dashboard from "../components/local/dashboard/Dashboard";
import Blogs from "../components/local/dashboard/pages/cms/Blogs/Blogs";
import News from "../components/local/dashboard/pages/cms/News/News";
import Settings from "../components/local/dashboard/pages/settings/Settings";
import GeneralSettings from "../components/local/dashboard/pages/settings/generalSettings/GeneralSettings";
import GeneralSettingsEdit from "../components/local/dashboard/pages/settings/generalSettings/GeneralSettingsEdit";
import UserProfile from "../components/local/dashboard/pages/settings/userProfile/UserProfile";
import UserProfileEdit from "../components/local/dashboard/pages/settings/userProfile/UserProfileEdit";
import SiteData from "../components/local/dashboard/pages/siteSettings/SiteData";
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
            <Route path="/settings" element={<Settings />}>
               <Route
                  index
                  element={<Navigate to="general-settings" />}
               />
               <Route
                  path="general-settings"
                  element={<GeneralSettings />}
               />

               <Route
                  path="general-settings/edit"
                  element={<GeneralSettingsEdit />}
               />

               <Route path="user-profile" element={<UserProfile />} />
               <Route
                  path="user-profile/edit"
                  element={<UserProfileEdit />}
               />
               <Route path="site-data" element={<SiteData />} />
            </Route>{" "}
            <Route path="/cms/blogs" element={<Blogs />} />
            <Route path="/cms/news" element={<News />} />
         </Route>
      </Routes>
   );
};

export default SiteRoutes;
