import moment from "moment";
import customToaster from "../components/common/CustomToasters/CustomToaster";

export const getToken = () => {
   const access_token = localStorage.getItem("account_access_token");
   const refresh_token = localStorage.getItem(
      "account_refresh_token"
   );
   const user = JSON.parse(localStorage.getItem("user"));

   return {
      access_token,
      refresh_token,
      user,
   };
};

export const getCharacterValidationError = (str) => {
   return `Your password must contain at least 1 ${str} character`;
};

export const getError = (error) => {
   let err;

   if (error?.data?.errors) {
      err = customToaster({
         type: "error",
         message:
            error?.data?.errors &&
            Object?.values(error?.data?.errors)
               ?.map((item) => item)
               ?.join("\n"),
      });
   } else if (error?.data?.message) {
      err = customToaster({
         type: "error",
         message: error?.data?.message,
      });
   }
   return err;
};

export const isPwa = () => {
   return ["fullscreen", "standalone", "minimal-ui"].some(
      (displayMode) =>
         window?.matchMedia("(display-mode: " + displayMode + ")")
            .matches
   );
};

export const changeDateFormat = (date, format = "DD/MMM/YYYY") => {
   const changedDate = moment(date).format(format);
   return changedDate;
};

export const getSiteDetail = () => {
   const access_token = localStorage.getItem("admin_access_token");
   const user = JSON.parse(localStorage.getItem("user"));

   return {
      token: access_token,
      userData: user,
   };
};
