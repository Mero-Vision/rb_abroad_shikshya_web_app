import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { CustomInputDefault } from "../../../../common/CustomInputs/CustomInputDefault";

// const validationSchema = yup.object().shape({
//    email: yup.string().required("Email is required"),
//    password: yup.string().required("Password is required"),
// });

const SiteData = () => {
   const {
      control,
      formState: { errors },
      handleSubmit,
      // } = useForm({ resolver: yupResolver(validationSchema) });
   } = useForm();

   const onSubmit = async (values) => {
      alert();
   };
   return (
      <Box>
         <Box
            sx={{
               fontSize: "22px",
               fontWeight: "500",
               marginBottom: "20px",
            }}
         >
            Site Data
         </Box>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="">
               <Grid container spacing={2}>
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
                        name="phone"
                        title="Phone"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <CustomInputDefault
                        control={control}
                        errors={errors}
                        name="ceo"
                        title="Ceo"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <CustomInputDefault
                        control={control}
                        errors={errors}
                        name="about_ceo"
                        title="About Ceo"
                     />
                  </Grid>
               </Grid>

               <Box mt={"25px"} mb={"25px"}>
                  <Button
                     type="submit"
                     // onClick={() => navigate("/dashboard")}
                     sx={{
                        // width: "",
                        padding: "10px 30px !important",
                        height: "45px !important",
                        backgroundColor: "#2793c2 !important",
                        color: "#fff",
                        "&:hover": {
                           backgroundColor: "#2c9fd1 !important",
                        },
                     }}
                  >
                     Save
                  </Button>{" "}
               </Box>
            </Box>
         </form>
      </Box>
   );
};

export default SiteData;
