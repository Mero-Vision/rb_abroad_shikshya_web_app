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

   useEffect(() => {
      reset(settingsData);
   }, [settingsData]);

   const onSubmit = (data) => {
      postSettingsUpdate(data);
   };
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
            {settingsLoading || isEditLoading ? (
               <CustomLoaderLin />
            ) : (
               <Box display={"flex"} columnGap={"45px"} mb={"2rem"}>
                  <Grid container spacing={0}>
                     <Grid item sm={1.4}></Grid>
                     <Grid sm={10.6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <Box>
                              <Grid container spacing={2}>
                                 <Grid item xs={12}>
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
                                          name="category_image"
                                          title="Image"
                                          setValue={setValue}
                                          errors={errors}
                                          clearErrors={clearErrors}
                                          imageLink={
                                             watch(
                                                "category_image"
                                             ) || ""
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
