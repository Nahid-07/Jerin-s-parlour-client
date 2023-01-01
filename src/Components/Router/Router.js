import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Layout from "../Layout/Layout";
import MyCart from "../../Pages/My cart/MyCart";
import Booklist from "../../booklist/Booklist";
import Payment from "../../Payment/Payment";

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
            
            
            
        ]
    },
    {
        path: '/my-cart',
        element: <MyCart></MyCart>,
        children:[
            
                {
                    path:'/my-cart/booklist',
                    element: <Booklist></Booklist>
                },
                {
                    path:'/my-cart/payment',
                    element: <Payment></Payment>
                },
            
        ]
    },
])