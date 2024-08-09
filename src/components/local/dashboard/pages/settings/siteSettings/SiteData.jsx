import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
   useGetSettingsQuery,
   usePostSettingsUpdateMutation,
} from "../../../../../api/settingsApi";
import CustomButton from "../../../../common/CustomButton/CustomButton";
import FileUploader from "../../../../common/CustomFileUpload/ImageUpload";
import { CustomInputDefault } from "../../../../common/CustomInputs/CustomInputDefault";
import CustomLoaderLin from "../../../../common/CustomLoader/CustomLoaderLin";
import CustomPaper from "../../../../common/CustomPaper/CustomPaper";

// const validationSchema = yup.object().shape({
//    email: yup.string().required("Email is required"),
//    password: yup.string().required("Password is required"),
// });

const SiteData = () => {
   const {
      control,
      formState: { errors },
      handleSubmit,
      reset,
      clearErrors,
      setValue,
      watch,
      // } = useForm({ resolver: yupResolver(validationSchema) });
   } = useForm();

   const [
      postSettingsUpdate,
      {
         error: editError,
         isLoading: isEditLoading,
         isSuccess: isEditSuccess,
         data: editSuccessData,
      },
   ] = usePostSettingsUpdateMutation();

   const {
      data: settingsData,
      isLoading: settingsLoading,
      isFetching: settingsFetching,
   } = useGetSettingsQuery();

   console.log("watchSite", watch());

   useEffect(() => {
      reset(settingsData);
   }, [settingsData]);

   // const onSubmit = (data) => {
   //    postSettingsUpdate(data);
   // };

   const onSubmit = (data) => {
      console.log("Form data before processing:", data);

      const formData = new FormData();
      let obj = {};
      const finalData = {
         ...data,
         app_logo:
            data?.app_logo?.[0] instanceof File
               ? data?.app_logo?.[0]
               : "",
         fav_icon:
            data?.fav_icon?.[0] instanceof File
               ? data?.fav_icon?.[0]
               : "",
      };

      console.log(
         "Final data before formData processing:",
         finalData
      );

      delete finalData?.other_category_details;

      finalData &&
         Object?.keys(finalData)?.forEach((key) => {
            formData.append(key, finalData?.[key] ?? "");
         });

      console.log("FormData content:");
      for (let pair of formData.entries()) {
         console.log(pair[0] + ": " + pair[1]);
      }

      postSettingsUpdate(formData)
         .unwrap()
         .then((response) => {
            console.log("API call successful:", response);
         })
         .catch((error) => {
            console.error("API call error:", error);
         });
   };

   // const onSubmit = (data) => {
   //    console.log({ data });

   //    const formData = new FormData();
   //    let obj = {};
   //    const finalData = {
   //       ...data,
   //       app_logo:
   //          data?.app_logo?.[0] instanceof File
   //             ? data?.app_logo?.[0]
   //             : "",
   //       // _method: row && "PATCH",
   //    };

   //    console.log({ row });

   //    delete finalData?.other_category_details;

   //    finalData &&
   //       Object?.keys(finalData)?.map((key) =>
   //          formData.append(key, finalData?.[key] ?? "")
   //       );

   //    postSettingsUpdate(formData);
   // };
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
            modalTitle={"Site Data"}
            // button={
            //    <Button
            //       startIcon={<EditOutlined />}
            //       variant="outlinedButton"
            //       onClick={() => navigate("edit")}
            //    >
            //       Edit Profile
            //    </Button>
            // }
         >
            {settingsLoading ? (
               <CustomLoaderLin />
            ) : (
               <Box display={"flex"} columnGap={"45px"} mb={"2rem"}>
                  <Grid container spacing={0}>
                     <Grid item sm={1.4}></Grid>
                     <Grid sm={10.6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <Box>
                              <Grid container spacing={2}>
                                 <Grid item xs={6}>
                                    <Box
                                       className="form-container"
                                       sx={{
                                          flexGrow: 1,
                                          "& .file-input": {
                                             width: "100%",
                                          },
                                       }}
                                    >
                                       <FileUploader
                                          control={control}
                                          name="app_logo"
                                          title="App Logo"
                                          setValue={setValue}
                                          errors={errors}
                                          clearErrors={clearErrors}
                                          imageLink={
                                             watch("app_logo") || ""
                                          }
                                       />
                                    </Box>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <Box
                                       className="form-container"
                                       sx={{
                                          flexGrow: 1,
                                          "& .file-input": {
                                             width: "100%",
                                          },
                                       }}
                                    >
                                       <FileUploader
                                          control={control}
                                          name="fav_icon"
                                          title="Fav Icon"
                                          setValue={setValue}
                                          errors={errors}
                                          clearErrors={clearErrors}
                                          imageLink={
                                             watch("fav_icon") || ""
                                          }
                                       />
                                    </Box>
                                 </Grid>
                                 <Grid item xs={12}>
                                    <CustomInputDefault
                                       control={control}
                                       errors={errors}
                                       name="site_title"
                                       title="Site Title"
                                    />
                                 </Grid>
                                 <Grid item xs={12}>
                                    <CustomInputDefault
                                       control={control}
                                       errors={errors}
                                       name="address"
                                       title="Address"
                                    />
                                 </Grid>

                                 <Grid item xs={12}>
                                    <CustomInputDefault
                                       control={control}
                                       errors={errors}
                                       name="email"
                                       title="Email"
                                    />
                                 </Grid>
                                 <Grid item xs={12}>
                                    <CustomInputDefault
                                       control={control}
                                       errors={errors}
                                       name="phone_no"
                                       title="Phone Number"
                                    />
                                 </Grid>
                                 <Grid item xs={12}>
                                    <CustomInputDefault
                                       control={control}
                                       errors={errors}
                                       name="mobile_no"
                                       title="Mobile Number"
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
                                 buttonName={"Update"}
                                 loading={isEditLoading}
                                 error={editError}
                                 success={isEditSuccess}
                                 successData={editSuccessData}
                              />
                           </Box>
                        </form>
                     </Grid>
                  </Grid>
               </Box>
            )}
         </CustomPaper>
      </Box>
   );
};

export default SiteData;
