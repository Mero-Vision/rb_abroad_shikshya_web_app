import Sidebar from "./sidebar";

import { Box } from "@mui/material";

import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./dashboardNavbar";

const MainDashboardLayout = () => {
   const dispatch = useDispatch();
   const location = useLocation();

   // const { data: userDetails } = useGetSingleUserInfoQuery();

   // useEffect(() => {
   //    if (userDetails) {
   //       dispatch(
   //          setDynamicData({
   //             type: "userDetails",
   //             ...userDetails?.data,
   //          })
   //       );
   //    }
   // }, [dispatch, userDetails]);

   return (
      <>
         <Box sx={{ margin: 0, padding: "0", display: "flex" }}>
            {location?.pathname !== "/document/new" && <Sidebar />}
            <Box sx={{ background: "#F9F9FB", width: "100%" }}>
               <Box
                  sx={{
                     paddingInline: "46px",
                  }}
               >
                  <Navbar />
               </Box>
               {/* <Divider /> */}
               <Box
                  sx={{
                     minHeight: "calc(100vh - 63px)",
                     paddingBlock: "1rem",
                     paddingInline: "46px",
                     // width: "calc(100vw - 245px)",
                     width: "100%",
                  }}
               >
                  <Outlet />
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default MainDashboardLayout;
