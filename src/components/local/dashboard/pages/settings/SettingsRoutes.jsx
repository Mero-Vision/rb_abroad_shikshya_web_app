import { SettingsOutlined } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import {
   Box,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles";
const settingsArray = [
   {
      label: "Company Profile",
      url: "/settings/general-settings",
      icon: <BusinessOutlinedIcon />,
      permission: "company-view",
   },
   {
      label: "Profile",
      url: "/settings/user-profile",
      icon: <AccountCircleOutlinedIcon />,
   },

   {
      label: "Site Data",
      url: "/settings/site-data",
      icon: <SettingsOutlined />,
      permission: "printer-list",
   },
];
const SettingsRoutes = () => {
   const classes = styles();
   const handleClick = () => {};

   return (
      <Box>
         <List disablePadding>
            {settingsArray?.map((item, index) => {
               return (
                  <ListItem
                     key={item?.label}
                     disablePadding
                     sx={{
                        display: "block",
                        paddingBottom: "5px",
                     }}
                     className={classes.nav}
                  >
                     <NavLink
                        to={item?.url}
                        className={({ isActive }) =>
                           isActive && classes.activeClass
                        }
                     >
                        <ListItemButton
                           className={classes.listItemButton}
                           sx={{
                              padding: "2px 10px !important",
                           }}
                        >
                           <ListItemIcon
                              sx={{
                                 minWidth: 0,
                                 mr: 2,
                                 justifyContent: "center",

                                 "& .MuiSvgIcon-root": {
                                    fontSize: "20px",
                                 },
                              }}
                           >
                              {item?.icon}
                           </ListItemIcon>

                           <ListItemText
                              primary={item?.label}
                              sx={{
                                 "& .MuiTypography-root": {
                                    fontSize: "13px",
                                    fontWeight: "500",
                                 },
                              }}
                           />
                        </ListItemButton>
                     </NavLink>
                  </ListItem>
               );
            })}
         </List>
      </Box>
   );
};

export default SettingsRoutes;
