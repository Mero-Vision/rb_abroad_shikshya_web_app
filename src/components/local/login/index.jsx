import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { auth, useLoginMutation } from "../../../api/authApi";
// import LoginImage from "../../../assets/login/Side.svg";
// import Right from "../../../assets/login/right.svg";
import bg2 from "../../../assets/bg2.png";
import bgImg from "../../../assets/hisLoginImg.png";
import imglogBg from "../../../assets/imglogBg.png";
import LogoLogin from "../../../assets/logo_login.png";
import { CustomInput } from "../../common/CustomInputs/CustomInput";
import "./styles.css";

const validationSchema = yup.object().shape({
   email: yup.string().required("Email is required"),
   password: yup.string().required("Password is required"),
});

const Login = () => {
   const navigate = useNavigate();
   const isMobile = window.innerWidth < 900; //Add the width you want to check for here (now 768px)

   return (
      <>
         <Box sx={{ position: "relative" }}>
            <Grid container spacing={0}>
               <Grid
                  item
                  md={5.5}
                  sm={12}
                  sx={{ width: "100% !important" }}
               >
                  <LoginForm />
               </Grid>
               <Grid item md={6.5} sm={12} sx={{ width: "100%" }}>
                  <Box className="grid2Login">
                     <Box className="grid2LoginWrap">
                        <Box className="grid2LoginWrapImg">
                           <img
                              src={bgImg}
                              alt=""
                              style={{
                                 width: "100%",
                                 height: "100%",
                              }}
                           />
                        </Box>
                     </Box>
                     <Box className="grid2AbsImg">
                        <img
                           src={imglogBg}
                           alt=""
                           style={{
                              width: "100%",
                              height: "100%",
                           }}
                        />
                     </Box>
                     <Box className="grid2AbsImg2">
                        <img
                           src={bg2}
                           alt=""
                           style={{
                              width: "100%",
                              height: "100%",
                           }}
                        />
                     </Box>
                  </Box>
               </Grid>
            </Grid>
            <Box className="bottomCopyright">
               <Box sx={{ width: "fit-content" }}>
                  © Copyright 2024 © All Right Reserved. Developed by{" "}
               </Box>
               <Box
                  onClick={() =>
                     window.open("https://merovision.com/")
                  }
                  sx={{
                     marginLeft: "4px",
                     color: "#8521E7",
                     "&:hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                     },
                  }}
               >
                  Mero Vision Pvt. Ltd.
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default Login;

const LoginForm = () => {
   const {
      control,
      formState: { errors },
      handleSubmit,
   } = useForm({ resolver: yupResolver(validationSchema) });

   const navigate = useNavigate();
   const [fullfilledData, setFullfiledData] = useState();
   const [
      login,
      {
         isError,
         isLoading,
         isSuccess,
         error: loginErrors,
         data: successData,
      },
   ] = useLoginMutation();

   const handleNavigate = (res) => {
      const checkRole = (roleToFind) => {
         const data = res?.user?.role?.find(
            (item) =>
               item?.toLowerCase() === roleToFind?.toLowerCase()
         );
         return data ? true : false;
      };
      navigate("/switch-branch");
   };

   const dispatch = useDispatch();

   const onSubmit = async (values) => {
      const finalValues = {
         ...values,
      };

      login(finalValues)
         ?.unwrap()
         .then((res) => {
            const auth_token = res?.data?.token;
            const refresh_token = res?.data?.refresh_token;
            const user = res?.data?.user;

            localStorage.setItem(
               "account_access_token",
               auth_token || ""
            );
            localStorage.setItem(
               "account_refresh_token",
               refresh_token || ""
            );
            localStorage.setItem("user", JSON.stringify(user) || "");

            dispatch(auth(res?.data));
            setFullfiledData(res?.data);

            navigate("/");
         })
         .catch((rejected) => console.log({ rejected }));
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Box className="mainDiv">
            <Box className="formDiv">
               <Box className="form">
                  <Box className="formTitleDiv">
                     <Box
                        sx={{
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                        }}
                     >
                        <Box
                           onClick={() => navigate("/")}
                           sx={{
                              width: "200px",
                              height: "100%",
                              cursor: "pointer",
                              marginBottom: "20px",
                           }}
                        >
                           <img
                              src={LogoLogin}
                              alt=""
                              style={{
                                 width: "100%",
                                 height: "100%",
                              }}
                           />
                        </Box>
                     </Box>
                     <Box className="formTitle">Welcome back</Box>
                     <Box className="formSubtitle">
                        Login to proceed
                     </Box>
                  </Box>
                  <Box>
                     <Box>
                        <CustomInput
                           control={control}
                           errors={errors}
                           name="email"
                           type={"email"}
                           title="Email Address"
                           loginInput
                        />
                     </Box>

                     <Box mt={"24px"} mb={"10px"}>
                        <CustomInput
                           control={control}
                           errors={errors}
                           name="password"
                           type={"password"}
                           title="Password"
                           loginInput
                        />
                     </Box>
                  </Box>
                  {/* <Box sx={{ textAlign: "end !important" }}>
                     <Typography
                        onClick={() => navigate("/forgot-password")}
                        sx={{
                           color: "#4E7683",
                           fontSize: "12px",
                           cursor: "pointer",
                        }}
                     >
                        Forgot Password?
                     </Typography>
                  </Box> */}
                  <Box className="buttonDiv" mt={"25px"} mb={"25px"}>
                     <Button
                        type="submit"
                        // onClick={() => navigate("/dashboard")}
                        sx={{
                           width: "100%",
                           height: "45px !important",
                           backgroundColor: "#0a3a84 !important",
                           color: "#fff",
                           "&:hover": {
                              backgroundColor: "#0d48a5 !important",
                           },
                        }}
                     >
                        {isLoading && (
                           <CircularProgress
                              size="1rem"
                              sx={{
                                 marginRight: "10px",
                                 color: "#496ad0",
                              }}
                           />
                        )}
                        Login
                     </Button>{" "}
                  </Box>
               </Box>
            </Box>
         </Box>
      </form>
   );
};
