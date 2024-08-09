import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
// import CustomBackButton from "../../../common/CustomButton/CustomBackButton";
// import CustomButton from "../../../common/CustomButton/CustomButton";
// import { CustomInput } from "../../../common/CustomInputs/CustomInput";
// import CustomLoader from "../../../common/CustomLoader/CustomLoader";
// import CustomPaper from "../../../common/CustomPaper/CustomPaper";
import {
   useGetCompanySingleQuery,
   usePostCompanyUpdateMutation,
} from "../../../../../../api/companyApi";
import Logo from "../../../../../../assets/logo.png";
import { getSiteDetail } from "../../../../../../utils/helpers";
import CustomBackButton from "../../../../../common/CustomButton/CustomBackButton";
import CustomButton from "../../../../../common/CustomButton/CustomButton";
import CustomFileUpload from "../../../../../common/CustomFileUpload/CustomFileUpload";
import { CustomInputDefault } from "../../../../../common/CustomInputs/CustomInputDefault";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";
import CustomPaper from "../../../../../common/CustomPaper/CustomPaper";
import styles from "./styles";

const data = [
   {
      title: "Company's Legal Name",
      placeholder: "Scodus Innovations Pvt Ltd.",
      name: "company_name",
   },

   {
      title: "Email address",
      placeholder: "scodus@innovations.com",
      name: "email",
   },
   {
      title: "Phone No.",
      placeholder: "+977-9821983212",
      name: "phone_no",
   },
   {
      title: "Mobile No.",
      placeholder: "+977-9821983212",
      name: "mobile_no",
   },
   {
      title: "Country",
      placeholder: "+977-9821983212",
      name: "country",
   },
   {
      title: "Province",
      placeholder: "+977-9821983212",
      name: "province",
   },
   {
      title: "District",
      placeholder: "+977-9821983212",
      name: "district",
   },
   {
      title: "Municipality",
      placeholder: "+977-9821983212",
      name: "municipality",
   },
   {
      title: "Street Address",
      placeholder: "+977-9821983212",
      name: "street_address",
   },
   {
      title: "Vat No",
      placeholder: "+977-9821983212",
      name: "vat_no",
   },
   {
      title: "Registration Number",
      placeholder: "+977-9821983212",
      name: "registration_number",
   },
   {
      title: "Website",
      placeholder: "+977-9821983212",
      name: "website",
   },
];

const GeneralSettingsEdit = () => {
   const classes = styles();

   const companyInfo = getSiteDetail()?.companyData;

   const {
      data: companyData,
      isFetching: companyFetching,
      isSuccess: companySuccess,
   } = useGetCompanySingleQuery(companyInfo?.id);

   const [
      postCompanyUpdate,
      {
         error: editError,
         isLoading: isEditLoading,
         isSuccess: isEditSuccess,
         data: editSuccessData,
      },
   ] = usePostCompanyUpdateMutation();

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
      const formData = new FormData();
      const finalData = {
         ...data,
         company_logo:
            data?.company_logo?.[0] instanceof File
               ? data?.company_logo?.[0]
               : "",
         // data?.company_logo?.[0] ?? "",
         _method: "PUT",
      };

      console.log({ finalData, formData });

      finalData &&
         Object?.keys(finalData)?.map((key) =>
            formData.append(key, finalData?.[key] ?? "")
         );

      postCompanyUpdate({
         data: formData,
         id: companyData?.data?.id,
      });
   };

   useEffect(() => {
      if (companyData?.data) {
         setValue("company_name", companyData?.data?.company_name);
         setValue("email", companyData?.data?.email);
         setValue("phone_no", companyData?.data?.phone_no);
         setValue("mobile_no", companyData?.data?.mobile_no);
         setValue("country", companyData?.data?.country);
         setValue("province", companyData?.data?.province);
         setValue("district", companyData?.data?.district);
         setValue("municipality", companyData?.data?.municipality);
         setValue(
            "street_address",
            companyData?.data?.street_address
         );
         setValue("vat_no", companyData?.data?.vat_no);
         setValue(
            "registration_number",
            companyData?.data?.registration_number
         );
         setValue("website", companyData?.data?.website);
      }
   }, [companyData?.data, setValue]);

   const FileComponent = () => {
      const companyImage = watch("company_logo")?.[0];
      const fallbackImage = companyData?.data?.company_logo || Logo;
      const [avatarSrc, setAvatarSrc] = React.useState(fallbackImage);

      useEffect(() => {
         let objectUrl;

         if (companyImage && companyImage instanceof File) {
            objectUrl = URL.createObjectURL(companyImage);
            setAvatarSrc(objectUrl);

            // Clean up the URL.createObjectURL when the component unmounts or when companyImage changes
            return () => {
               URL.revokeObjectURL(objectUrl);
            };
         } else {
            setAvatarSrc(fallbackImage);
         }
      }, [companyImage, fallbackImage]);

      return <Avatar src={avatarSrc} alt="Company Logo" />;
   };
   return (
      <Box>
         <CustomPaper modalTitle={<CustomBackButton />}>
            {companyFetching ? (
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
                        <Box
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
                              name="company_logo"
                              fileComponent={<FileComponent />}
                           />
                        </Box>
                        <CustomFileUpload
                           control={control}
                           errors={errors}
                           name="company_logo"
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
                        />
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
            <CustomInputDefault
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
