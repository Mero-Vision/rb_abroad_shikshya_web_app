import { ExpandMore } from "@mui/icons-material";
import { Collapse, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { SidebarConstants } from "../../constants/SidebarConstants";
import "./styles.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
   width: drawerWidth,
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: "hidden",
});

const closedMixin = (theme) => ({
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: "hidden",
   width: `calc(${theme.spacing(7)} + 1px)`,
   [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
   },
});

const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
   shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
   width: drawerWidth,
   flexShrink: 0,
   whiteSpace: "nowrap",
   boxSizing: "border-box",
   ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
   }),
   ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
   }),
}));

export default function Sidebar() {
   const theme = useTheme();
   const [open, setOpen] = React.useState(
      sessionStorage.getItem("active")
   );
   const handleClick = (item) => {
      sessionStorage.setItem(
         "active",
         open === item?.label ? "" : item?.label
      );
      setOpen((prev) => (prev === item?.label ? "" : item?.label));
   };

   return (
      <Box
         sx={{
            display: "flex",
            "& .MuiDrawer-paper": { border: "none" },
         }}
      >
         <CssBaseline />

         <Drawer variant="permanent" open>
            <Box className="drawer">
               <DrawerHeader>
                  <Box className="drawerHeader">
                     <img src={Logo} />
                     <Box>
                        <Typography
                           sx={{
                              lineHeight: 1,
                              fontSize: "10px",
                              fontWeight: "500",
                              marginBottom: "2px",
                              color: "#808080",
                           }}
                        >
                           Powered By
                        </Typography>
                        <Typography
                           fontWeight={600}
                           fontSize={"medium"}
                           sx={{ lineHeight: 1 }}
                        >
                           Mero Vision Pvt. Ltd.
                        </Typography>

                        <Typography
                           fontWeight={500}
                           fontSize={"11px"}
                        >
                           Sankhamul, Kathamndu
                        </Typography>
                     </Box>
                  </Box>
               </DrawerHeader>
               {SidebarConstants?.map((row, index) => (
                  <List
                     key={row?.header}
                     subheader={
                        <Box
                           sx={{
                              fontSize: "11px",
                              padding: "5px 12px",
                           }}
                        >
                           {row?.header}{" "}
                        </Box>
                     }
                     sx={{ mb: "1rem" }}
                  >
                     {row?.items?.map((item, index) => (
                        <ListItem
                           key={item?.label}
                           disablePadding
                           sx={{
                              display: "block",
                              paddingBottom: "5px",
                           }}
                           className="nav"
                        >
                           <NavLink
                              to={
                                 !item?.children?.length && item?.url
                              }
                              className={({ isActive }) =>
                                 isActive &&
                                 (item?.children?.length
                                    ? item?.children?.some(
                                         (nestedItem) =>
                                            window.location.pathname.includes(
                                               nestedItem.url
                                            )
                                      )
                                       ? "activeClass"
                                       : {}
                                    : "activeClass")
                              }
                           >
                              {({ isActive }) => (
                                 <ListItemButton
                                    className="listItemButton"
                                    onClick={() =>
                                       item?.children?.length !== 0
                                          ? handleClick(item)
                                          : handleClick()
                                    }
                                    style={{
                                       background:
                                          open === item?.label &&
                                          "#f6f6f6",
                                    }}
                                 >
                                    <img
                                       style={{
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "15px",
                                       }}
                                       src={
                                          isActive
                                             ? item?.children?.length
                                                ? item?.children?.some(
                                                     (nestedItem) =>
                                                        window.location.pathname.includes(
                                                           nestedItem.url
                                                        )
                                                  )
                                                   ? item?.activeIcon
                                                   : item?.icon
                                                : item?.activeIcon
                                             : item?.icon
                                       }
                                       alt=""
                                    />
                                    {/* <ListItemIcon
                                       sx={{
                                          minWidth: 0,
                                          mr: 2,
                                          justifyContent: "center",
                                       }}
                                    >
                                       {isActive
                                          ? item?.children?.length
                                             ? item?.children?.some(
                                                  (nestedItem) =>
                                                     window.location.pathname.includes(
                                                        nestedItem.url
                                                     )
                                               )
                                                ? item?.activeIcon
                                                : item?.icon
                                             : item?.activeIcon
                                          : item?.icon}
                                    </ListItemIcon> */}

                                    <ListItemText
                                       primary={item?.label}
                                    />
                                    {item?.children?.length !== 0 && (
                                       <ExpandMore
                                          sx={{
                                             transition:
                                                "transform 0.3s",
                                             transform:
                                                open === item?.label
                                                   ? "rotate(-180deg)"
                                                   : "rotate(0deg)",
                                          }}
                                       />
                                    )}
                                 </ListItemButton>
                              )}
                           </NavLink>

                           <Collapse
                              in={open === item?.label}
                              timeout="auto"
                              unmountOnExit
                           >
                              <Box className="childContainer">
                                 {item?.children?.map(
                                    (child, index) => (
                                       <ChildComponent
                                          child={child}
                                          key={index}
                                       />
                                    )
                                 )}
                              </Box>
                           </Collapse>
                        </ListItem>
                     ))}
                  </List>
               ))}
            </Box>
         </Drawer>
      </Box>
   );
}

const ChildComponent = ({ child }) => {
   const [hover, setHover] = React.useState(false);
   const [open, setOpen] = useState(false);
   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <List
            key={child?.label}
            component="div"
            disablePadding
            sx={{ paddingBottom: "5px" }}
            className="nav"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
         >
            <NavLink to={child?.url}>
               {({ isActive }) => (
                  <ListItemButton
                     className={[
                        "listItemButtonChild",
                        isActive && "activeChildClass",
                     ]}
                  >
                     <ListItemText
                        primary={child?.label}
                        className="active"
                     />
                     {/* <IconButton
                        onClick={handleOpen}
                        className="iconButton"
                        sx={{
                           visibility: hover ? "visible" : "hidden",
                        }}
                     >
                        {<Add />}
                     </IconButton> */}
                  </ListItemButton>
               )}
            </NavLink>
         </List>
      </>
   );
};
