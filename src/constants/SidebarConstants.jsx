// import ActiveDashboardIcon from "../assets/activeIcons/dashboard.svg";
// // import ActivePosIcon from "../assets/activeIcons/posActive.svg";
// // import ActiveReportsIcon from "../assets/activeIcons/Reports.svg";
// // import ActiveSalesIcon from "../assets/activeIcons/Sales.svg";
// import ActiveSettingsIcon from "../assets/activeIcons/settings.svg";
// import ActiveUserIcon from "../assets/activeIcons/userManagementActive.png";

// import DashboardIcon from "../assets/icon/dashboard.svg";
// // import PosIcon from "../assets/icon/posIcon.svg";
// // import ReportsIcon from "../assets/icon/reports.svg";
// // import SalesIcon from "../assets/icon/sales.svg";
// import SettingsIcon from "../assets/icon/settings.svg";
// import UserIcon from "../assets/icon/userManagement.png";

// export const SidebarConstants = [
//    {
//       header: "",
//       items: [
//          {
//             label: "Dashboard",
//             url: "/",
//             icon: DashboardIcon,
//             activeIcon: ActiveDashboardIcon,
//             children: [],
//             permission: "company-dashboard-view",
//          },
//          {
//             label: "Users",
//             url: "/user-managmement",
//             icon: UserIcon,
//             activeIcon: ActiveUserIcon,
//             permission: "customer-list",
//             children: [],
//          },

//          // {
//          //    label: "Sessions",
//          //    url: "/session",
//          //    icon: SessionIcon,
//          //    activeIcon: ActiveSessionIcon,
//          //    permission: "business-service-session-list",
//          //    children: [],
//          // },
//          {
//             label: "CMS",
//             url: "/cms",
//             icon: UserIcon,
//             activeIcon: ActiveUserIcon,
//             children: [
//                {
//                   label: "Blogs",
//                   url: "/cms/blogs",
//                   pageUrl: "/blogs",
//                },
//                {
//                   label: "News",
//                   url: "/cms/news",
//                   pageUrl: "/news",
//                },
//             ],
//          },
//          {
//             label: "Settings",
//             url: "/settings",
//             icon: SettingsIcon,
//             activeIcon: ActiveSettingsIcon,
//             children: [],
//             permission: "setting-view",
//          },
//       ],
//    },

//    // {
//    //    header: "Studio",
//    //    roleName: "restaurant",
//    //    items: [
//    //       {
//    //          label: "Orders",
//    //          url: "/orders",
//    //          icon: OrdersIcon,
//    //          activeIcon: ActiveOrderIcon,
//    //          children: [],
//    //          permission: "order-detail-list",
//    //       },

//    //       {
//    //          label: "Manage menu",
//    //          url: "/manage-menu",
//    //          icon: MenuIcon,
//    //          activeIcon: ActiveMenuIcon,
//    //          children: [
//    //             {
//    //                label: "Category",
//    //                url: "/manage-menu/category",
//    //                permission: "product-category-list",
//    //                // pageUrl: "/manage-menu/category",
//    //             },
//    //             {
//    //                label: "Menu Items",
//    //                url: "/manage-menu/items",
//    //                // pageUrl: "/sales/quotations/add",
//    //                permission: "product-category-list",
//    //                // pageUrl: "/manage-menu/items",
//    //             },
//    //             {
//    //                label: "Topping Items",
//    //                url: "/manage-menu/topping-items",
//    //                // pageUrl: "/sales/quotations/add",
//    //                permission: "topping-item-list",
//    //                // pageUrl: "/manage-menu/topping-items",
//    //             },
//    //          ],
//    //          // permission: "setting-view",
//    //       },
//    //    ],
//    // },

//    // {
//    //    header: "Events",
//    //    roleName: "event",
//    //    items: [
//    //       {
//    //          label: "Event Booking",
//    //          url: "/events",
//    //          icon: EventsIcon,
//    //          activeIcon: ActiveEventsIcon,
//    //          children: [],
//    //          permission: "setting-view",
//    //       },
//    //    ],
//    // },

//    // {
//    //    header: "Setup",
//    //    items: [
//    // {
//    //    label: "Human resources",
//    //    url: "/human-resources",
//    //    icon: HrIcon,
//    //    activeIcon: ActiveHrIcon,
//    //    children: [
//    //       {
//    //          label: "Positions",
//    //          url: "/human-resources/positions",
//    //          permission: "position-list",
//    //          pageUrl: "/human-resources/positions",
//    //       },
//    //       {
//    //          label: "Departments",
//    //          url: "/human-resources/departments",
//    //          permission: "department-list",
//    //          pageUrl: "/human-resources/departments",
//    //       },
//    //       {
//    //          label: "Employees",
//    //          url: "/human-resources/employees",
//    //          permission: "employee-list",
//    //          pageUrl: "/human-resources/employees",
//    //       },
//    //    ],
//    // },
//    // {
//    //    label: "Reports",
//    //    url: "/dashboard",
//    //    icon: ReportsIcon,
//    //    activeIcon: ActiveReportsIcon,
//    //    children: [],
//    // },
//    //    ],
//    // },
// ];

// import ActivePosIcon from "../assets/activeIcons/posActive.svg";
// import ActiveReportsIcon from "../assets/activeIcons/Reports.svg";
// import ActiveSalesIcon from "../assets/activeIcons/Sales.svg";

// import PosIcon from "../assets/icon/posIcon.svg";
// import ReportsIcon from "../assets/icon/reports.svg";
// import SalesIcon from "../assets/icon/sales.svg";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
export const SidebarConstants = [
   {
      header: "",
      items: [
         {
            label: "Dashboard",
            url: "/",
            icon: <HomeOutlinedIcon />,
            activeIcon: <HomeOutlinedIcon />,
            children: [],
            permission: "company-dashboard-view",
         },
         {
            label: "Users",
            url: "/user-managmement",
            icon: <PeopleOutlineOutlinedIcon />,
            activeIcon: <PeopleOutlineOutlinedIcon />,
            permission: "customer-list",
            children: [],
         },

         // {
         //    label: "Sessions",
         //    url: "/session",
         //    icon: SessionIcon,
         //    activeIcon: ActiveSessionIcon,
         //    permission: "business-service-session-list",
         //    children: [],
         // },
         {
            label: "CMS",
            url: "/cms",
            icon: <DriveFolderUploadOutlinedIcon />,
            activeIcon: <DriveFolderUploadOutlinedIcon />,
            children: [
               {
                  label: "Blogs",
                  url: "/cms/blogs",
                  pageUrl: "/blogs",
               },
               {
                  label: "News",
                  url: "/cms/news",
                  pageUrl: "/news",
               },
            ],
         },
         {
            label: "Settings",
            url: "/settings",
            icon: <SettingsOutlinedIcon />,
            activeIcon: <SettingsOutlinedIcon />,
            children: [],
            permission: "setting-view",
         },
      ],
   },

   // {
   //    header: "Studio",
   //    roleName: "restaurant",
   //    items: [
   //       {
   //          label: "Orders",
   //          url: "/orders",
   //          icon: OrdersIcon,
   //          activeIcon: ActiveOrderIcon,
   //          children: [],
   //          permission: "order-detail-list",
   //       },

   //       {
   //          label: "Manage menu",
   //          url: "/manage-menu",
   //          icon: MenuIcon,
   //          activeIcon: ActiveMenuIcon,
   //          children: [
   //             {
   //                label: "Category",
   //                url: "/manage-menu/category",
   //                permission: "product-category-list",
   //                // pageUrl: "/manage-menu/category",
   //             },
   //             {
   //                label: "Menu Items",
   //                url: "/manage-menu/items",
   //                // pageUrl: "/sales/quotations/add",
   //                permission: "product-category-list",
   //                // pageUrl: "/manage-menu/items",
   //             },
   //             {
   //                label: "Topping Items",
   //                url: "/manage-menu/topping-items",
   //                // pageUrl: "/sales/quotations/add",
   //                permission: "topping-item-list",
   //                // pageUrl: "/manage-menu/topping-items",
   //             },
   //          ],
   //          // permission: "setting-view",
   //       },
   //    ],
   // },

   // {
   //    header: "Events",
   //    roleName: "event",
   //    items: [
   //       {
   //          label: "Event Booking",
   //          url: "/events",
   //          icon: EventsIcon,
   //          activeIcon: ActiveEventsIcon,
   //          children: [],
   //          permission: "setting-view",
   //       },
   //    ],
   // },

   // {
   //    header: "Setup",
   //    items: [
   // {
   //    label: "Human resources",
   //    url: "/human-resources",
   //    icon: HrIcon,
   //    activeIcon: ActiveHrIcon,
   //    children: [
   //       {
   //          label: "Positions",
   //          url: "/human-resources/positions",
   //          permission: "position-list",
   //          pageUrl: "/human-resources/positions",
   //       },
   //       {
   //          label: "Departments",
   //          url: "/human-resources/departments",
   //          permission: "department-list",
   //          pageUrl: "/human-resources/departments",
   //       },
   //       {
   //          label: "Employees",
   //          url: "/human-resources/employees",
   //          permission: "employee-list",
   //          pageUrl: "/human-resources/employees",
   //       },
   //    ],
   // },
   // {
   //    label: "Reports",
   //    url: "/dashboard",
   //    icon: ReportsIcon,
   //    activeIcon: ActiveReportsIcon,
   //    children: [],
   // },
   //    ],
   // },
];
