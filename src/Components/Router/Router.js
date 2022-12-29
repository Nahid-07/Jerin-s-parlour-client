import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Layout from "../Layout/Layout";
import MyCart from "../../Pages/My cart/MyCart";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";

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
                path: '/my-cart',
                element: <MyCart></MyCart>
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])