import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Layout from "../Layout/Layout";
import MyCart from "../../Pages/My cart/MyCart";

import Payment from "../../Payment/Payment";
import Review from "../../Review/Review";
import Admin from "../../Pages/Admin/Admin";
import OrderList from "../../Pages/Admin/OrderList/OrderList";
import AddService from "../../Pages/Admin/AddService/AddService";
import MakeAdmin from "../../Pages/Admin/MakeAdmin/MakeAdmin";
import MangeService from "../../Pages/Admin/ManageService/MangeService";
import Booklist from "../../booklist/Booklist";
import PrivetRouter from "./PrivetRouter";
import ExploreMore from "../../Pages/Exploremore/ExploreMore";

export let router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/explore',
                element: <ExploreMore></ExploreMore>
            },
            
            
            
        ]
    },
    {
        path: '/my-cart',
        element: <PrivetRouter><MyCart></MyCart></PrivetRouter>,
        children:[
            
            {
                path:'/my-cart',
                element: <Booklist></Booklist>
            },
                {
                    path:'/my-cart/payment',
                    element: <Payment></Payment>
                },
                {
                    path:'/my-cart/review',
                    element: <Review></Review>
                },
            
        ]
    },
    {
        path:'/admin',
        element:<Admin></Admin>,
        children:[
            {
                path:'/admin',
                element:<OrderList></OrderList>
            },
            {
                path:'/admin/addservice',
                element:<AddService></AddService>
            },
            {
                path:'/admin/makeadmin',
                element:<MakeAdmin></MakeAdmin>
            },
            {
                path:'/admin/manageservice',
                element:<MangeService></MangeService>
            },
        ]
    }
])