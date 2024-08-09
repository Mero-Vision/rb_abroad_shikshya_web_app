import { Box } from "@mui/material";
import React, { useState } from "react";
import { useGetCountriesQuery } from "../../../../../../api/settingsApi";
import CustomDataGrid from "../../../../../common/CustomDataGrid/CustomDataGrid";

const AboutData = () => {
   const [paginationModel, setPaginationModel] = useState({
      page: 0,
      pageSize: 25,
   });
   const columns = [
      {
         flex: 1,
         field: "id",
         headerName: "S.N.",
      },
      {
         flex: 1,
         field: "name",
         headerName: "Country Name",
      },
      {
         flex: 1,
         field: "code",
         headerName: "Country Code",
      },
      {
         flex: 1,
         field: "currency",
         headerName: "Currency",
      },
   ];

   // const params = {
   //    page: paginationModel?.page + 1,
   //    pagination_limit: paginationModel?.pageSize,
   // };
   const {
      data: countries,
      isError: isCountriesError,
      isFetching: isCountriesFetching,
      isSuccess: isCountriesSuccess,
   } = useGetCountriesQuery();
   return (
      <Box>
         <CustomDataGrid
            rows={countries?.data || []}
            columns={columns}
            // paginationModel={paginationModel}
            // setPaginationModel={setPaginationModel}
            // pageInfo={countries?.meta}
            paginationMode={"client"}
         />
      </Box>
   );
};

export default AboutData;
