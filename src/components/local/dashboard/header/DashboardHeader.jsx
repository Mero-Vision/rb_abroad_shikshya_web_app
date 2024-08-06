import ErrorIcon from "@mui/icons-material/Error";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import occupancyGridImage from "../../../../assets/dashboardIcons/occupancyGrid.png";
import "./styles.css"; // Import the CSS file

const DashboardHeader = ({ dashboardData }) => {
   const navigate = useNavigate();
   // const { user } = useSelector((state) => state?.auth);
   const [activeButton, setActiveButton] = useState("hourly");

   const handleButtonClick = (button) => {
      setActiveButton(button);
   };

   return (
      <>
         <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
               <Box className="headerContainer">
                  <Box className="mainDivDash">
                     {/* <Typography className="date">
                        {changeDateFormat(
                           new Date(),
                           "dddd, MMMM DD"
                        )}
                     </Typography> */}
                     <Typography className="title">
                        {/* Welcome, {user?.name || "User"}!! */}
                        Welcome, Hancie!!
                     </Typography>
                     <Typography className="subtitle">
                        Fresh morning updates with our app.
                     </Typography>
                     <Typography
                        className="warning"
                        sx={{
                           color: "#039111 !important",
                        }}
                     >
                        <ErrorIcon className="warningIcon" />
                        hello
                     </Typography>
                  </Box>
                  {/* <Box className="imageDiv">
                     <img src={banner} alt="Banner" />
                  </Box> */}
               </Box>
            </Grid>
            <Grid item md={2} xs={4}>
               <Box className="headerContainerCurrentOccupancy">
                  <Box className="gridTwoBox">
                     <Typography className="gridTwoTitle">
                        Current Occupancy
                     </Typography>
                     <Typography className="gridTwoPercentage">
                        22 %
                     </Typography>
                  </Box>
                  <Box className="occupancyGridImageDiv">
                     <img
                        src={occupancyGridImage}
                        alt="Occupancy Grid"
                     />
                  </Box>
               </Box>
            </Grid>
            <Grid item md={4} xs={8}>
               <Box className="headerContainerPeakTime">
                  <Box
                     sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                     }}
                  >
                     <Box>Peak Time</Box>
                     <Box>
                        <Button
                           className={
                              activeButton === "hourly"
                                 ? "buttonActiveLeft"
                                 : "buttonInactiveLeft"
                           }
                           onClick={() => handleButtonClick("hourly")}
                        >
                           Hourly
                        </Button>
                        <Button
                           className={
                              activeButton === "daily"
                                 ? "buttonActiveRight"
                                 : "buttonInactiveRight"
                           }
                           onClick={() => handleButtonClick("daily")}
                        >
                           Daily
                        </Button>
                     </Box>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </>
   );
};

export default DashboardHeader;
