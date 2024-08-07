// import { Avatar, Box, Grid, Typography } from "@mui/material";
// import React, { useEffect, useMemo } from "react";
// import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
// import {
//    useGetSingleUserInfoQuery,
//    useUpdateSingleUserMutation,
// } from "../../../../apis/usersApi";
// import Logo from "../../../../assets/logo.png";
// import CustomBackButton from "../../../common/CustomButton/CustomBackButton";
// import CustomButton from "../../../common/CustomButton/CustomButton";
// import CustomFileUpload from "../../../common/CustomFileUpload/CustomFileUpload";
// import { CustomInput } from "../../../common/CustomInputs/CustomInput";
// import CustomLoader from "../../../common/CustomLoader/CustomLoader";
// import CustomPaper from "../../../common/CustomPaper/CustomPaper";
// import styles from "./styles";

// const data = [
//    {
//       title: "Full Name",
//       placeholder: "",
//       name: "name",
//    },

//    // {
//    //    title: "Email address",
//    //    placeholder: "",
//    //    name: "email",
//    // },
//    {
//       title: "Mobile Number",
//       placeholder: "",
//       name: "mobile_no",
//    },
//    {
//       title: "Address",
//       placeholder: "",
//       name: "location",
//    },
// ];

// const UserProfileEdit = () => {
//    const classes = styles();
//    const { company } = useSelector((state) => state?.utils);
//    const singleData = useMemo(() => company, [company]);
//    const userData = JSON.parse(localStorage?.getItem("user"));

//    // const {
//    //    data: businessData,
//    //    isFetching: businessFetching,
//    //    isSuccess: businessSuccess,
//    // } = useGetBusinessQuery();

//    const {
//       data: singleUserInfo,
//       isLoading: querySingleUserLoading,
//       isFetching: userSingleDataFetching,
//    } = useGetSingleUserInfoQuery();

//    // const [
//    //    updateBusiness,
//    //    {
//    //       error: editError,
//    //       isLoading: isEditLoading,
//    //       isSuccess: isEditSuccess,
//    //       data: editSuccessData,
//    //    },
//    // ] = useUpdateBusinessMutation();

//    const [
//       updateSingleUser,
//       {
//          error: editError,
//          isLoading: isEditLoading,
//          isSuccess: isEditSuccess,
//          data: editSuccessData,
//       },
//    ] = useUpdateSingleUserMutation();

//    // useGetSingleCompanyQuery(
//    //    // { id: singleData?.id },
//    //    // { skip: !singleData?.id && !isEditSuccess }
//    //    { id: Number(userData?.company_id) },
//    //    { skip: !Number(userData?.company_id) && !isEditSuccess }
//    // );
//    const {
//       control,
//       formState: { errors },
//       reset,
//       handleSubmit,
//       setValue,
//       watch,
//    } = useForm();

//    console.log({ watch: watch() });
//    const onSubmit = (data) => {
//       console.log({ data });
//       console.log("lsadldkjiqowjeqo", data?.profile_image);
//       const formData = new FormData();

//       const finalData = {
//          ...data,
//          profile_image: data?.profile_image?.[0] ?? "",
//          _method: "PATCH",
//       };

//       console.log({ finalData, formData });

//       finalData &&
//          Object?.keys(finalData)?.map((key) =>
//             formData.append(key, finalData?.[key] ?? "")
//          );

//       const payload = {
//          ...finalData,
//          id: singleUserInfo?.data?.id,
//       };

//       updateSingleUser(payload);
//    };

//    useEffect(() => {
//       reset(singleUserInfo?.data);
//    }, [singleUserInfo?.data]);

//    const FileComponent = () => {
//       // return (
//       //    <Avatar
//       //       src={
//       //          watch()?.image?.[0]
//       //             ? URL.createObjectURL(watch()?.profile_image?.[0])
//       //             : singleUserInfo?.data?.profile_image || Logo
//       //       }
//       //       alt={singleUserInfo?.data?.business_name}
//       //    />
//       // );

//       const companyImage = watch()?.profile_image?.[0];
//       const fallbackImage =
//          singleUserInfo?.data?.profile_image || Logo;

//       let avatarSrc = Logo; // Default to the Logo if no image is available

//       if (companyImage) {
//          try {
//             avatarSrc = URL.createObjectURL(companyImage);
//          } catch (error) {
//             console.error("Error creating object URL:", error);
//             avatarSrc = fallbackImage || Logo;
//          }
//       }

//       return <Avatar src={avatarSrc} alt="Company Logo" />;
//    };
//    return (
//       <Box>
//          <CustomPaper modalTitle={<CustomBackButton />}>
//             {userSingleDataFetching ? (
//                <CustomLoader />
//             ) : (
//                <form onSubmit={handleSubmit(onSubmit)}>
//                   <Box
//                      display={"flex"}
//                      columnGap={"45px"}
//                      mb={"2rem"}
//                   >
//                      <Box
//                         display={"flex"}
//                         flexDirection={"column"}
//                         alignItems={"center"}
//                         rowGap={"5px"}
//                      >
//                         <Box
//                            className={classes.profilePicture}
//                            sx={{
//                               transition: "100ms all ease-in-out",
//                               cursor: "pointer",
//                               "&:hover": {
//                                  opacity: 0.8,
//                               },
//                            }}
//                         >
//                            <CustomFileUpload
//                               control={control}
//                               errors={errors}
//                               name="profile_image"
//                               fileComponent={<FileComponent />}
//                            />
//                         </Box>
//                         <CustomFileUpload
//                            control={control}
//                            errors={errors}
//                            name="profile_image"
//                            fileComponent={
//                               <Typography
//                                  style={{
//                                     fontSize: "11px",
//                                     color: "#496AD0",
//                                     cursor: "pointer",
//                                     textAlign: "center",
//                                  }}
//                               >
//                                  Click to Upload
//                               </Typography>
//                            }
//                         />
//                      </Box>
//                      <Box width="470px">
//                         <Grid container spacing={4}>
//                            {data?.map((item) => (
//                               <React.Fragment key={item?.title}>
//                                  <SingleItem
//                                     data={item}
//                                     control={control}
//                                     errors={errors}
//                                  />
//                               </React.Fragment>
//                            ))}
//                         </Grid>

//                         <Box mt={4}>
//                            <CustomButton
//                               buttonName={"Save Info"}
//                               loading={isEditLoading}
//                               error={editError}
//                               success={isEditSuccess}
//                               successData={editSuccessData}
//                            />
//                         </Box>
//                      </Box>
//                   </Box>
//                </form>
//             )}
//          </CustomPaper>
//       </Box>
//    );
// };

// const SingleItem = ({ data, control, errors }) => {
//    const { title, placeholder, name, xs } = data;
//    return (
//       <Grid item xs={xs || 12}>
//          <Box>
//             <CustomInput
//                name={name}
//                title={title}
//                //  placeholder={placeholder}
//                control={control}
//                errors={errors}
//             />
//          </Box>
//       </Grid>
//    );
// };

// export default UserProfileEdit;

import { Box, Grid } from "@mui/material";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CustomBackButton from "../../../../../common/CustomButton/CustomBackButton";
import CustomButton from "../../../../../common/CustomButton/CustomButton";
import { CustomInput } from "../../../../../common/CustomInputs/CustomInput";
import CustomPaper from "../../../../../common/CustomPaper/CustomPaper";
import styles from "./styles";

const data = [
   {
      title: "Full Name",
      placeholder: "",
      name: "name",
   },

   // {
   //    title: "Email address",
   //    placeholder: "",
   //    name: "email",
   // },
   {
      title: "Mobile Number",
      placeholder: "",
      name: "mobile_no",
   },
   {
      title: "Address",
      placeholder: "",
      name: "location",
   },
];

const UserProfileEdit = () => {
   const classes = styles();
   const { userDetails } = useSelector((state) => state?.utils);
   const singleData = useMemo(() => userDetails, [userDetails]);

   // const [
   //    editCompany,
   //    {
   //       error: editError,
   //       isLoading: isEditLoading,
   //       isSuccess: isEditSuccess,
   //       data: editSuccessData,
   //    },
   // ] = useUpdateSingleUserMutation();

   // const {
   //    data: singleUserInfo,
   //    isLoading: querySingleUserLoading,
   //    isFetching: userSingleDataFetching,
   // } = useGetSingleUserInfoQuery();

   const {
      control,
      formState: { errors },
      reset,
      handleSubmit,
      watch,
   } = useForm();

   console.log("watch------>>asa.,d>", watch());

   const onSubmit = (data) => {
      console.log("jsajdkljad", { data });
      // const formData = new FormData();
      // const finalData = {
      //    // ...data,
      //    profile_image: data?.profile_image?.[0] || "",
      //    name: data?.name,
      //    mobile_no: data?.mobile_no,
      //    location: data?.location,
      //    id: singleUserInfo?.data?.id,

      //    _method: "PATCH",
      // };
      // finalData &&
      //    Object?.keys(finalData)?.map((key) =>
      //       formData.append(key, finalData?.[key] || "")
      //    );

      // const payload = {
      //    ...finalData,
      //    id: singleUserInfo?.data?.id,
      // };

      // editCompany(formData);
   };

   // useEffect(() => {
   //    singleUserInfo?.data && reset(singleUserInfo?.data);
   // }, [singleUserInfo?.data]);

   // const FileComponent = () => {
   //    const companyImage = watch()?.profile_image?.[0];
   //    const fallbackImage =
   //       singleUserInfo?.data?.profile_image || Logo;

   //    let avatarSrc = Logo; // Default to the Logo if no image is available

   //    if (companyImage) {
   //       try {
   //          avatarSrc = URL.createObjectURL(companyImage);
   //       } catch (error) {
   //          console.error("Error creating object URL:", error);
   //          avatarSrc = fallbackImage || Logo;
   //       }
   //    }

   //    return <Avatar src={avatarSrc} alt="Company Logo" />;
   // };
   return (
      <Box>
         {" "}
         <CustomPaper modalTitle={<CustomBackButton />}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <Box display={"flex"} columnGap={"45px"} mb={"2rem"}>
                  <Box
                     display={"flex"}
                     flexDirection={"column"}
                     alignItems={"center"}
                     rowGap={"5px"}
                  >
                     {/* <Box
                        className={classes.profilePicture}
                        sx={{
                           transition: "100ms all ease-in-out",
                           cursor: "pointer",
                           "&:hover": {
                              opacity: 0.8,
                           },
                        }}
                     >
                        <CustomFileUpload
                           control={control}
                           errors={errors}
                           name="profile_image"
                           fileComponent={<FileComponent />}
                        />
                     </Box>
                     <CustomFileUpload
                        control={control}
                        errors={errors}
                        name="profile_image"
                        fileComponent={
                           <Typography
                              style={{
                                 fontSize: "11px",
                                 color: "#496AD0",
                                 cursor: "pointer",
                                 textAlign: "center",
                              }}
                           >
                              Click to Upload
                           </Typography>
                        }
                     /> */}
                  </Box>
                  <Box width="470px">
                     <Grid container spacing={4}>
                        {data?.map((item) => (
                           <React.Fragment key={item?.title}>
                              <SingleItem
                                 data={item}
                                 control={control}
                                 errors={errors}
                              />
                           </React.Fragment>
                        ))}
                     </Grid>
                     <Box mt={4}>
                        <CustomButton
                           buttonName={"Save Info"}
                           loading={isEditLoading}
                           error={editError}
                           success={isEditSuccess}
                           successData={editSuccessData}
                        />
                     </Box>
                  </Box>
               </Box>
            </form>
         </CustomPaper>
      </Box>
   );
};

const SingleItem = ({ data, control, errors }) => {
   const { title, placeholder, name, xs } = data;
   return (
      <Grid item xs={xs || 12}>
         <Box>
            <CustomInput
               name={name}
               title={title}
               placeholder={placeholder}
               control={control}
               errors={errors}
            />
         </Box>
      </Grid>
   );
};

export default UserProfileEdit;
