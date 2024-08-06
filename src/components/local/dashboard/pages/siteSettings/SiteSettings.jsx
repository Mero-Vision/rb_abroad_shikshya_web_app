import {
   CreditScoreOutlined,
   FactCheckOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import useTabs from "../../../../../hooks/useTabs";

const SiteSettings = () => {
   const data = [
      {
         label: "Settings Data",
         value: "settings_data",
         icon: <FactCheckOutlined />,
      },
      {
         label: "About",
         value: "about",
         icon: <CreditScoreOutlined />,
      },
      {
         label: "Contact",
         value: "contact",
         icon: <CreditScoreOutlined />,
      },
   ];
   const { value, Tabs } = useTabs({
      hideSearch: true,

      data,
   });
   return (
      <Box>
         {Tabs}

         <h1>site settingsdsa</h1>
      </Box>
   );
};

export default SiteSettings;
