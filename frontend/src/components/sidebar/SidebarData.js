import React from "react";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineDocumentText } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const SidebarData = [
  // {
  //   title: "About Us",
  //   icon: <AiIcons.AiFillHome />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Our Aim",
  //       path: "/about-us/aim",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //     {
  //       title: "Our Vision",
  //       path: "/about-us/vision",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //   ],
  // },
  // {
  //   title: "Services",
  //   icon: <IoIcons.IoIosPaper />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Service 1",
  //       path: "/services/services1",
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: "sub-nav",
  //     },
  //     {
  //       title: "Service 2",
  //       path: "/services/services2",
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: "sub-nav",
  //     },
  //     {
  //       title: "Service 3",
  //       path: "/services/services3",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //   ],
  // },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
    subNav: [],
  },
  {
    title: "Learning Plan",
    path: "/lplans",
    icon: <SlCalender />,
    subNav: [],
  },
  {
    title: "Games",
    path: "/Games",
    icon: <HiOutlineDocumentText />,
    subNav: [],
  },
 
  {
    title: "Logout",
    path: "/login",
    icon: <RiLogoutBoxRLine />,
    subNav: [],
  },
];
