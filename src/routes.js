import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout ,WithOutSideBar} from "./layouts";
// Route Views
/* import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables"; */
//import BlogPosts from "./views/BlogPosts";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Posts from "./views/Posts";
import Products from "./views/Products";
import Customers from "./views/Customers";
import Orders from "./views/Orders";
import Orderids from "./views/Orderids";
import Addcontact from "./views/Addcontact";
import Addcustomer from "./views/Addcustomer";
import Addproduct from "./views/Addproduct";
import Addimage from "./views/Addimage";
import Placeorder from "./views/Placeorder";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    layout: WithOutSideBar,
    component: Login
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Posts
  },
  {
    path: "/Addcontact",
    layout: DefaultLayout,
    component: Addcontact
  },
  {
    path: "/customers",
    layout: DefaultLayout,
    component: Customers
  },
  {
  path: "/Addcustomers",
  layout: DefaultLayout,
  component: Addcustomer
},
{
  path: "/products",
  layout: DefaultLayout,
  component: Products
},
{
  path: "/Addproduct",
  layout: DefaultLayout,
  component: Addproduct
},
{
  path: "/Addimage/:productId",
  layout: DefaultLayout,
  component: Addimage
},
{
  path: "/Orders",
  layout: DefaultLayout,
  component: Orders
},
{
  path: "/Orderids",
  layout: DefaultLayout,
  component: Orderids
},
{
  path: "/Placeorder",
  layout: DefaultLayout,
  component: Placeorder
}
 
];
  // {
  //   path: "/law-posts",
  //   layout: DefaultLayout,
  //   component: Posts
  // },
  // {
  //   path: "/student-posts",
  //   layout: DefaultLayout,
  //   component: Posts
  // },
  // {
  //   path: "/users",
  //   layout: DefaultLayout,
  //   component: Users
  // },
//   {
//   path: "/about",
//   layout: DefaultLayout,
//   component: About
// },
 /*  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  } */

