import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoutes from "./PrivateRoutes";
import Gallery from "../Pages/Gallery/Gallery";
import ContactUs from "../Pages/ContactUs/ContactUs";


const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
               path:"/",
               element:<Home></Home>,
               loader:() => fetch("/service.json")
            },
            {
                path:"/event/:id",
                element:<PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>,
                loader:() => fetch("/ServiceDetails.json")
            },
            {
                path:"/gallery",
                element:<PrivateRoutes><Gallery></Gallery></PrivateRoutes>
            },
            {
                path:"/contact",
                element:<PrivateRoutes><ContactUs></ContactUs></PrivateRoutes>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])

export default Route;