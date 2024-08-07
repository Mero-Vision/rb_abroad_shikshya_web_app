import { EditOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../../../assets/logo.png";

import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";
import CustomPaper from "../../../../../common/CustomPaper/CustomPaper";
import styles from "./styles";

const GeneralSettings = () => {
   const classes = styles();
   const navigate = useNavigate();
   const [changed, setChanged] = useState(false);
   const userData = JSON.parse(localStorage?.getItem("user"));

   const {
      control,
      formState: { errors, isDirty },
      watch,
      setValue,
   } = useForm({
      defaultValues: {},
   });
   // const [postSettings, { error, isSuccess, successData }] =
   //    usePostSettingsMutation();

   // const {
   //    data: businessData,
   //    isFetching: businessFetching,
   //    isSuccess: businessSuccess,
   // } = useGetSingleUserInfoQuery();
   // console.log({ businessData });
   const { company } = useSelector((state) => state?.utils);
   const singleData = useMemo(() => company, [company]);
   const data = [
      {
         title: "Email address",
         value: "-",
      },
      {
         title: "Contact No.",
         value: "-",
      },
      {
         title: "Address",
         value: "-",
      },
      {
         title: "VAT/PAN No.",
         value: "-",
      },
      {
         title: "Registration No.",
         value: "-",
      },
      {
         title: "Start Date",
         value: "-",
      },
      // {
      //    title: "Bill Heading",
      //    value: businessData?.data?.bill_heading ?? "-",
      // },
      // {
      //    title: "Bill Remarks",
      //    value: businessData?.data?.bill_remarks ?? "-",
      // },
      // {
      //    title: "Is Tax",
      //    value: businessData?.data?.is_tax ?? "-",
      // },
   ];

   // const billData = [
   //    {
   //       title: "Bill Heading",
   //       value: businessData?.data?.company?.bill_heading ?? "-",
   //    },
   //    {
   //       title: "Bill Remarks",
   //       value: businessData?.data?.company?.bill_remarks ?? "-",
   //    },
   //    {
   //       title: "Is Tax",
   //       value: businessData?.data?.company?.is_tax ?? "-",
   //    },
   // ];

   // useEffect(() => {
   //    const rate_type = watch("rate_type");
   //    changed && postSettings({ rate_type });
   // }, [watch("rate_type"), changed]);
   // useEffect(() => {
   //    if (isSuccess) {
   //       customToaster({
   //          type: "success",
   //          message: successData?.message || "Success",
   //       });
   //    }
   // }, [isSuccess]);
   // useEffect(() => {
   //    getError(error);
   // }, [error]);

   const businessFetching = false;
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
            modalTitle={"General Settings"}
            button={
               <Button
                  startIcon={<EditOutlined />}
                  variant="outlinedButton"
                  onClick={() => navigate("edit")}
               >
                  Edit Profile
               </Button>
            }
         >
            {businessFetching ? (
               <CustomLoaderLin />
            ) : (
               <Box display={"flex"} columnGap={"45px"} mb={"2rem"}>
                  <Box className={classes.profilePicture}>
                     <Avatar
                        src={Logo}
                        alt={"name"}
                        // src={
                        //    businessData?.data?.company
                        //       ?.company_image || Logo
                        // }
                        // alt={
                        //    businessData?.data?.company?.business_name
                        // }
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
                                 {"-"}{" "}
                              </Typography>
                              <Typography
                                 sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    color: "#4C4B63",
                                 }}
                              >
                                 {"-"}{" "}
                              </Typography>
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
