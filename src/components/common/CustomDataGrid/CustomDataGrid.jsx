import Box from "@mui/material/Box";
import * as React from "react";
import styles from "./style";

import { Pagination } from "@mui/material";
import {
   DataGrid,
   GridFooterContainer,
   GridPagination,
   gridPageCountSelector,
   gridPageSelector,
   useGridApiContext,
   useGridSelector,
} from "@mui/x-data-grid";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { replaceFunction } from "../../../utils/helpers";
import DataNotFound from "../DataNotFound/DataNotFound";

function CustomPagination() {
   const apiRef = useGridApiContext();
   const page = useGridSelector(apiRef, gridPageSelector);
   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

   return (
      <Pagination
         color="primary"
         count={pageCount}
         page={page + 1}
         onChange={(event, value) =>
            apiRef.current.setPage(value - 1)
         }
      />
   );
}

function CustomFooter(props) {
   return (
      <GridFooterContainer>
         {/* <CustomPagination /> */}
         <GridPagination />
      </GridFooterContainer>
   );
}

export default function CustomDataGrid({
   rows,
   columns,
   paginationMode,
   columnVisibilityModel: model,
   pageInfo = {},
   setPaginationModel = () => {},
   paginationModel,
   hidePagination,
   onRowClick = () => {},
   checkboxSelection = false,
   setSelectedRows = () => {},
   getRowId,
   handleButtonClick = () => {},
   value,
   name,
   isSingleTab = false,
   paginationFlexStart,
   autoHeight,
}) {
   const location = useLocation();
   const type = replaceFunction(
      location?.pathname?.split("/")?.at(-1),
      "-",
      " "
   );
   const classes = styles();
   const [columnVisibilityModel, setColumnVisibilityModel] =
      React.useState({});
   const [rowCountState, setRowCountState] = React.useState(
      pageInfo?.total || 0
   );

   React.useEffect(() => {
      setRowCountState((prevRowCountState) =>
         pageInfo?.total !== undefined
            ? pageInfo?.total
            : prevRowCountState
      );
   }, [pageInfo?.total, setRowCountState]);

   useEffect(() => {
      setColumnVisibilityModel(model);
   }, [model]);
   const height = 40;
   if (
      (value === "" && !rows?.length) ||
      (isSingleTab && !rows?.length)
   ) {
      const value = name || type;
      return (
         <AddButton
            value={value}
            handleButtonClick={handleButtonClick}
         />
      );
   }
   return (
      <Box
         className={classes.root}
         sx={{ height: !rows?.length && "400px", width: "100%" }}
      >
         <DataGrid
            columnHeaderHeight={39}
            rowHeight={"auto"}
            getRowHeight={() => (autoHeight ? "auto" : 39)}
            rows={rows}
            columns={columns}
            // columnHeaderHeight={height}
            // rowHeight={height}
            // rows={rows}
            // columns={columns}
            initialState={{
               pagination: {
                  paginationModel: {
                     page: 0,
                     pageSize: 20,
                  },
               },
            }}
            disableColumnSelector
            disableColumnFilter
            disableDensitySelector
            paginationModel={paginationModel}
            rowCount={paginationMode ? rows?.length : rowCountState}
            onPaginationModelChange={setPaginationModel}
            paginationMode={paginationMode || "server"}
            checkboxSelection={checkboxSelection}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
               setColumnVisibilityModel(newModel)
            }
            onRowSelectionModelChange={(ids) => {
               const selectedIDs = new Set(ids);
               const selectedRows = rows?.filter((row) =>
                  selectedIDs?.has(row.id)
               );
               setSelectedRows(selectedRows);
            }}
            hideFooter={hidePagination}
            disableRowSelectionOnClick
            onRowClick={onRowClick}
            pageSizeOptions={[10, 25, 100]}
            getRowId={getRowId}
            isRowSelectable={(props) => props?.row?.isRowSelectable}
            slots={{
               noRowsOverlay: DataNotFound,
            }}
            sx={
               paginationFlexStart
                  ? {
                       [`& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeaderTitleContainer:focus`]:
                          {
                             outline: "none",
                          },
                       fontSize: "13px",
                       "& .MuiTablePagination-root": {
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                       },
                       "& .MuiInputBase-input": {
                          paddingBlock: "2px  !important",
                          paddingRight: "24px !important",
                       },
                    }
                  : {
                       [`& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeaderTitleContainer:focus`]:
                          {
                             outline: "none",
                          },
                       fontSize: "13px",

                       "& .MuiInputBase-input": {
                          paddingBlock: "2px  !important",
                          paddingRight: "24px !important",
                       },
                    }
            }
         />
      </Box>
   );
}

// import Box from "@mui/material/Box";
// import * as React from "react";
// import styles from "./style";

// import { Pagination } from "@mui/material";
// import {
//   DataGrid,
//   GridFooterContainer,
//   gridPageCountSelector,
//   gridPageSelector,
//   GridPagination,
//   useGridApiContext,
//   useGridSelector,
// } from "@mui/x-data-grid";
// import { useEffect } from "react";
// import DataNotFound from "../DataNotFound/DataNotFound";

// function CustomPagination() {
//   const apiRef = useGridApiContext();
//   const page = useGridSelector(apiRef, gridPageSelector);
//   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

//   return (
//     <Pagination
//       color="primary"
//       count={pageCount}
//       page={page + 1}
//       onChange={(event, value) => apiRef.current.setPage(value - 1)}
//     />
//   );
// }

// function CustomFooter(props) {
//   return (
//     <GridFooterContainer>
//       {/* <CustomPagination /> */}
//       <GridPagination />
//     </GridFooterContainer>
//   );
// }

// export default function CustomDataGrid({
//   rows,
//   columns,
//   checkboxSelection,
//   paginationMode,
//   columnVisibilityModel: model,
//   pageInfo = {},
//   setPaginationModel = () => {},
//   paginationModel,
//   hidePagination,
//   onRowClick = () => {},
//   autoHeight,
//   getRowClassName,
// }) {
//   const classes = styles();
//   const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});
//   const [rowCountState, setRowCountState] = React.useState(
//     pageInfo?.total || 0
//   );

//   React.useEffect(() => {
//     setRowCountState((prevRowCountState) =>
//       pageInfo?.total !== undefined ? pageInfo?.total : prevRowCountState
//     );
//   }, [pageInfo?.total, setRowCountState]);

//   useEffect(() => {
//     setColumnVisibilityModel(model);
//   }, [model]);
//   return (
//     <Box
//       className={classes.root}
//       sx={{ height: !rows?.length && "400px", width: "100%" }}
//     >
//       <DataGrid
//         columnHeaderHeight={39}
//         // rowHeight={"auto"}
//         getRowHeight={() => (autoHeight ? "auto" : 39)}
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               page: 0,
//               pageSize: 10,
//             },
//           },
//         }}
//         disableColumnSelector
//         disableColumnFilter
//         disableDensitySelector
//         paginationModel={paginationModel}
//         rowCount={paginationMode ? rows?.length : rowCountState}
//         onPaginationModelChange={setPaginationModel}
//         paginationMode={paginationMode || "server"}
//         checkboxSelection={checkboxSelection}
//         columnVisibilityModel={columnVisibilityModel}
//         onColumnVisibilityModelChange={(newModel) =>
//           setColumnVisibilityModel(newModel)
//         }
//         hideFooter={hidePagination}
//         disableRowSelectionOnClick
//         onRowClick={onRowClick}
//         getRowClassName={getRowClassName}
//         pageSizeOptions={[5, 10, 25]}
//         slots={{
//           noRowsOverlay: DataNotFound,
//           // pagination: CustomFooter,
//         }}
//         sx={{
//           [`& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeaderTitleContainer:focus`]:
//             {
//               outline: "none",
//             },
//           fontSize: "13px",
//           "& .MuiInputBase-input": {
//             paddingBlock: "2px  !important",
//             paddingRight: "24px !important",
//           },
//         }}
//       />
//     </Box>
//   );
// }
