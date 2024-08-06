import {
   ContactPageOutlined,
   InfoOutlined,
   SettingsOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import useTabs from "../../../../../hooks/useTabs";
import AboutData from "./AboutData";
import ContactData from "./ContactData";
import SiteData from "./SiteData";

const SiteSettings = () => {
   const data = [
      {
         label: "Settings Data",
         value: "settings_data",
         icon: <SettingsOutlined />,
      },
      {
         label: "About",
         value: "about",
         icon: <InfoOutlined />,
      },
      {
         label: "Contact",
         value: "contact",
         icon: <ContactPageOutlined />,
      },
   ];
   const { value, Tabs } = useTabs({
      hideSearch: true,

      data,
   });

   const switchTabs = () => {
      switch (value) {
         case "settings_data":
            return <SiteData />;
         case "about":
            return <AboutData />;
         case "contact":
            return <ContactData />;
      }
   };
   return (
      <Box>
         {Tabs}
         <Box
            sx={{
               backgroundColor: "#fff",
               marginTop: "20px",
               padding: "20px",
            }}
         >
            {switchTabs()}
         </Box>
      </Box>
   );
};

export default SiteSettings;
