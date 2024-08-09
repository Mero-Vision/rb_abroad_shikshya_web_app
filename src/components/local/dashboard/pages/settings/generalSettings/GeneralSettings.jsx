import { EditOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../../../assets/logo.png";

import { useGetCompanySingleQuery } from "../../../../../../api/companyApi";
import { getSiteDetail } from "../../../../../../utils/helpers";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";
import CustomPaper from "../../../../../common/CustomPaper/CustomPaper";
import styles from "./styles";

const GeneralSettings = () => {
   const classes = styles();
   const navigate = useNavigate();
   const [changed, setChanged] = useState(false);

   const companyInfo = getSiteDetail()?.companyData;

   const {
      control,
      formState: { errors, isDirty },
      watch,
      setValue,
   } = useForm({
      defaultValues: {},
   });

   const {
      data: companyData,
      isFetching: companyFetching,
      isSuccess: companySuccess,
   } = useGetCompanySingleQuery(companyInfo?.id, {
      skip: !companyInfo?.id,
   });
   const data = [
      {
         title: "Established Date",
         value: companyData?.data?.established_date || "-",
      },
      {
         title: "Registration Number",
         value: companyData?.data?.registration_number || "-",
      },
      {
         title: "Email address",
         value: companyData?.data?.email || "-",
      },
      {
         title: "Mobile No.",
         value: companyData?.data?.mobile_no || "-",
      },
      {
         title: "Phone No.",
         value: companyData?.data?.phone_no || "-",
      },
      {
         title: "Country",
         value: companyData?.data?.country || "-",
      },
      {
         title: "Province",
         value: companyData?.data?.province || "-",
      },
      {
         title: "District",
         value: companyData?.data?.district || "-",
      },
      {
         title: "Municipality",
         value: companyData?.data?.municipality || "-",
      },
      {
         title: "Street Address",
         value: companyData?.data?.street_address || "-",
      },

      {
         title: "Vat No",
         value: companyData?.data?.vat_no || "-",
      },

      {
         title: "Website",
         value: companyData?.data?.website || "-",
      },
   ];

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
         }}
      >
         {" "}
         <CustomPaper
            modalTitle={"Company Settings"}
            button={
               <Button
                  sx={{
                     border: "1px solid #6259CA",
                     color: "#6259CA",
                     fontSize: "13px !important",
                     fontWeight: "500 !important",
                     textTransform: "capitalize",
                     // padding: "6px 8px !important",
                  }}
                  startIcon={
                     <EditOutlined
                        sx={{ fontSize: "18px !important" }}
                     />
                  }
                  variant="outlinedButton"
                  onClick={() => navigate("edit")}
               >
                  Edit Company
               </Button>
            }
         >
            {companyFetching ? (
               <CustomLoaderLin />
            ) : (
               <Box display={"flex"} columnGap={"45px"} mb={"2rem"}>
                  <Box className={classes.profilePicture}>
                     <Avatar
                        // src={Logo}
                        // alt={"name"}
                        src={companyData?.data?.company_logo || Logo}
                        alt={companyData?.data?.company_name}
                     />
                  </Box>
                  <Box>
                     <Grid container spacing={4}>
                        <Grid item xs={12}>
                           <Box>
                              <Typography
                                 sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: "#201F37",
                                 }}
                              >
                                 {companyData?.data?.company_name ||
                                    "-"}{" "}
                              </Typography>
                              {/* <Typography
                                 sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    color: "#4C4B63",
                                 }}
                              >
                              </Typography> */}
                           </Box>
                        </Grid>
                        {data?.map((item) => (
                           <React.Fragment key={item?.title}>
                              <SingleItem data={item} />
                           </React.Fragment>
                        ))}
                     </Grid>
                  </Box>
               </Box>
            )}
         </CustomPaper>
      </Box>
   );
};

const SingleItem = ({ data }) => {
   const { title, value } = data;
   return (
      <Grid item xs={6}>
         <Box>
            <Typography
               sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#201F37",
               }}
            >
               {title}
            </Typography>
            <Typography
               sx={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#4C4B63",
               }}
            >
               {value}{" "}
            </Typography>
         </Box>
      </Grid>
   );
};

export default GeneralSettings;
