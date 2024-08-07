import { Box, Grid } from "@mui/material";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import CustomBackButton from "../../../common/CustomButton/CustomBackButton";
// import CustomButton from "../../../common/CustomButton/CustomButton";
// import { CustomInput } from "../../../common/CustomInputs/CustomInput";
// import CustomLoader from "../../../common/CustomLoader/CustomLoader";
// import CustomPaper from "../../../common/CustomPaper/CustomPaper";
import CustomBackButton from "../../../../../common/CustomButton/CustomBackButton";
import CustomButton from "../../../../../common/CustomButton/CustomButton";
import { CustomInput } from "../../../../../common/CustomInputs/CustomInput";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";
import CustomPaper from "../../../../../common/CustomPaper/CustomPaper";
import styles from "./styles";

const data = [
   {
      title: "Company's Legal Name",
      placeholder: "Scodus Innovations Pvt Ltd.",
      name: "business_name",
   },
   {
      title: "Company's Display Name",
      placeholder: "Scodus",
      name: "display_name",
   },

   {
      title: "VAT/PAN No.",
      placeholder: "346725",
      name: "vat_number",
   },
   {
      title: "Email address",
      placeholder: "scodus@innovations.com",
      name: "primary_email",
   },
   {
      title: "Contact No.",
      placeholder: "+977-9821983212",
      name: "primary_phone",
   },
   {
      title: "Address",
      placeholder: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      name: "address",
   },
];

const GeneralSettingsEdit = () => {
   const classes = styles();
   const { company } = useSelector((state) => state?.utils);
   const singleData = useMemo(() => company, [company]);
   const userData = JSON.parse(localStorage?.getItem("user"));
   const navigate = useNavigate();

   // const {
   //    data: businessData,
   //    isFetching: businessFetching,
   //    isSuccess: businessSuccess,
   // } = useGetBusinessQuery();

   // const {
   //    data: businessData,
   //    isFetching: businessFetching,
   //    isSuccess: businessSuccess,
   // } = useGetSingleUserInfoQuery();

   // const [
   //    updateBusiness,
   //    {
   //       error: editError,
   //       isLoading: isEditLoading,
   //       isSuccess: isEditSuccess,
   //       data: editSuccessData,
   //    },
   // ] = useUpdateBusinessMutation();

   const {
      control,
      formState: { errors },
      reset,
      handleSubmit,
      setValue,
      watch,
   } = useForm();

   console.log({ watch: watch() });
   const onSubmit = (data) => {
      console.log({ data });
      // const formData = new FormData();
      // const finalData = {
      //    ...data,
      //    company_image:
      //       data?.company_image?.[0] instanceof File
      //          ? data?.company_image?.[0]
      //          : "",
      //    // data?.company_image?.[0] ?? "",
      //    _method: "PATCH",
      // };

      // console.log({ finalData, formData });

      // finalData &&
      //    Object?.keys(finalData)?.map((key) =>
      //       formData.append(key, finalData?.[key] ?? "")
      //    );

      // updateBusiness({
      //    data: formData,
      //    id: businessData?.data?.company?.id,
      // });
   };

   // useEffect(() => {
   //    reset(businessData?.data?.company);
   // }, [businessData?.data?.company]);

   // const FileComponent = () => {
   //    const companyImage = watch()?.company_image?.[0];
   //    const fallbackImage =
   //       businessData?.data?.company?.company_image || Logo;

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
         <CustomPaper modalTitle={<CustomBackButton />}>
            {businessFetching ? (
               <CustomLoaderLin />
            ) : (
               <form onSubmit={handleSubmit(onSubmit)}>
                  <Box
                     display={"flex"}
                     columnGap={"45px"}
                     mb={"2rem"}
                  >
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
                              name="company_image"
                              fileComponent={<FileComponent />}
                            
                           />
                        </Box>
                        <CustomFileUpload
                           control={control}
                           errors={errors}
                           name="company_image"
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
            )}
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
               //  placeholder={placeholder}
               control={control}
               errors={errors}
            />
         </Box>
      </Grid>
   );
};

export default GeneralSettingsEdit;
