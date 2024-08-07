import { yupResolver } from "@hookform/resolvers/yup";
import { EditOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
// import {
//    useGetSingleUserInfoQuery,
//    usePostUserChangePasswordMutation,
// } from "../../../../apis/usersApi";
import Logo from "../../../../../../assets/logo.png";

// import CustomButton from "../../../common/CustomButton/CustomButton";
// import { CustomInput } from "../../../common/CustomInputs/CustomInput";
// import CustomLoader from "../../../common/CustomLoader/CustomLoader";
// import CustomPaper from "../../../common/CustomPaper/CustomPaper";
import { getCharacterValidationError } from "../../../../../../utils/helpers";
import CustomButton from "../../../../../common/CustomButton/CustomButton";
import { CustomInput } from "../../../../../common/CustomInputs/CustomInput";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";
import CustomPaper from "../../../../../common/CustomPaper/CustomPaper";
import styles from "./styles";

const schema = Yup.object().shape({
   old_password: Yup.string().required(
      "Current Password is required"
   ),
   password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be 8 characters or more")
      .matches(/[a-z]+/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]+/, getCharacterValidationError("uppercase"))
      .matches(/[@$!%*#?&]+/, getCharacterValidationError("special"))
      .matches(/\d+/, "Your password must contain at least 1 number"),
   password_confirmation: Yup.string()
      .required("Please re-type your password")
      .transform((value, originalValue) =>
         typeof originalValue === "string"
            ? originalValue.trim()
            : originalValue
      )
      .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const UserProfile = () => {
   const classes = styles();
   const navigate = useNavigate();
   const [changed, setChanged] = useState(false);
   const userData = JSON.parse(localStorage?.getItem("user"));

   const {
      control,
      formState: { errors },
      watch,
      setValue,
      handleSubmit,
   } = useForm({ resolver: yupResolver(schema) });

   // const {
   //    data: singleUserInfo,
   //    isLoading: querySingleUserLoading,
   //    isFetching,
   // } = useGetSingleUserInfoQuery();
   const { company } = useSelector((state) => state?.utils);
   const data = [
      {
         title: "Email address",
         value: "-",
      },
      {
         title: "Mobile No.",
         value: "-",
      },
      {
         title: "Address",
         value: "-",
      },
   ];

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

   // const [
   //    postUserChangePassword,
   //    {
   //       error: editError,
   //       isLoading: isEditLoading,
   //       isSuccess: isEditSuccess,
   //       data: editSuccessData,
   //    },
   // ] = usePostUserChangePasswordMutation();

   const submitHandler = (data) => {
      console.log({ data });
      // const finalData = {
      //    ...data,
      //    _method: "PUT",
      // };
      // postUserChangePassword(finalData)
      //    .unwrap()
      //    .then(() => {
      //       successToast("changed password sucessfully");
      //    })
      //    .catch((error) => errorToast(error));
   };

   // useEffect(() => {
   //    if (isEditSuccess) {
   //       setValue("old_password", "");
   //       setValue("password", "");
   //       setValue("password_confirmation", "");
   //    }
   // }, [isEditSuccess, setValue]);

   const isFetching = false;

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
            modalTitle={"User Profile"}
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
            {isFetching ? (
               <CustomLoaderLin />
            ) : (
               <Box display={"flex"} columnGap={"45px"} mb={"2rem"}>
                  <Box className={classes.profilePicture}>
                     <Avatar
                        src={Logo}
                        alt={"name"}
                        // src={
                        //    singleUserInfo?.data?.profile_image || Logo
                        // }
                        // alt={singleUserInfo?.data?.name}
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
                              {/* <Typography
                                 sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    color: "#4C4B63",
                                 }}
                              >
                                 {singleUserInfo?.data
                                    ?.display_name ?? "-"}{" "}
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
         <CustomPaper modalTitle={"Change Password"}>
            <Box display={"flex"} columnGap={"45px"} mb={"2rem"}>
               <Grid container spacing={0}>
                  <Grid item sm={1.4}></Grid>
                  <Grid sm={10.6}>
                     <form onSubmit={handleSubmit(submitHandler)}>
                        <Box>
                           <Grid container spacing={4}>
                              <Grid item sm={12}>
                                 <CustomInput
                                    title="Current Password"
                                    name="old_password"
                                    type="password"
                                    control={control}
                                    errors={errors}
                                 />
                              </Grid>
                              <Grid item sm={6}>
                                 <CustomInput
                                    title="New Password"
                                    name="password"
                                    type="password"
                                    control={control}
                                    errors={errors}
                                 />
                              </Grid>
                              <Grid item sm={6}>
                                 <CustomInput
                                    title="Confirm Password"
                                    name="password_confirmation"
                                    type="password"
                                    control={control}
                                    errors={errors}
                                 />
                              </Grid>
                           </Grid>
                        </Box>
                        <Box
                           sx={{
                              marginTop: "20px",
                              display: "flex",
                              justifyContent: "flex-end",
                           }}
                        >
                           <CustomButton
                              buttonName={"Change Password"}
                              // loading={isEditLoading}
                              // error={editError}
                              // success={isEditSuccess}
                              // successData={editSuccessData}
                           />
                        </Box>
                     </form>
                  </Grid>
               </Grid>
            </Box>
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

export default UserProfile;
