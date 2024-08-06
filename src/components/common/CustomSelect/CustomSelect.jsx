import {
   Autocomplete,
   Box,
   FormControl,
   Grow,
   InputLabel,
   Paper,
   TextField,
} from "@mui/material";
import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";

export const CustomSearchSelect = ({
   name,
   control,
   errors,
   label,
   data = [],
   title = "",
   disabled,
   startIcon,
   placeholder,
   required,
   dayBook,
}) => {
   let error;
   const splitName = name.split(".");
   if (errors) {
      if (splitName?.length > 1) {
         let loopError = errors;
         splitName?.map((item, index) => {
            loopError = loopError?.[item];
         });
         error = loopError?.message;
      } else {
         error = errors?.[name]?.message;
      }
   }

   function PaperComponent(paperProps, ref) {
      return (
         <Grow in unmountOnExit>
            <Paper {...paperProps} ref={ref} />
         </Grow>
      );
   }
   const PaperComponentForward = forwardRef(PaperComponent);

   return (
      <div className="inputs">
         <div>
            {title && (
               <InputLabel className="inputTitle">
                  {title?.toUpperCase()}{" "}
                  <span style={{ color: "red" }}>
                     {required && "*"}{" "}
                  </span>
               </InputLabel>
            )}
            <FormControl variant="outlined">
               {/* <InputLabel>{label}</InputLabel> */}
               <Controller
                  name={name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <Autocomplete
                        sx={{
                           borderRadius: "6px",
                           border: "1px solid #F9F9FB !important",
                           width: "100%",
                           "& .MuiFormControl-root": {
                              width: "100%",
                           },
                           "& .MuiAutocomplete-root": {
                              width: "100%",
                           },
                           "& .MuiInputBase-root": {
                              width: "100%",
                              backgroundColor: "#fff !important",
                           },
                        }}
                        key={value}
                        id="combo-box-demo"
                        options={data}
                        getOptionLabel={(option) => option?.label}
                        onChange={(e, data) =>
                           onChange(data?.value ?? "")
                        }
                        defaultValue={data?.find(
                           (item) => item?.value == value
                        )}
                        isOptionEqualToValue={(option) =>
                           option?.value
                        }
                        disabled={disabled}
                        PaperComponent={PaperComponentForward}
                        renderInput={(params) => {
                           console.log("aldalsjdk", {
                              params,
                              value,
                              data,
                           });
                           return (
                              <TextField
                                 {...params}
                                 variant="outlined"
                                 label={label}
                                 placeholder={placeholder}
                                 sx={{
                                    "& svg": {
                                       marginLeft: "2px",
                                       marginRight: "20px",
                                       height: "19px",
                                       width: "19px",
                                    },

                                    "& .MuiAutocomplete-endAdornment":
                                       {
                                          "& svg": {
                                             margin: "0",
                                          },
                                       },
                                 }}
                                 InputProps={{
                                    ...params?.InputProps,
                                    startAdornment: startIcon,
                                 }}
                              />
                           );
                        }}
                     />
                  )}
               />
            </FormControl>
            {error && (
               <Box style={{ color: "red", fontSize: "10px" }}>
                  {error}
               </Box>
            )}
         </div>
      </div>
   );
};
