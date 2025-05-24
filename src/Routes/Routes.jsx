import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Package from "../Pages/Package/Package";

const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[{
        path:'/',
        element:<Home></Home>
    },{
        path:'/login',
        element:<Login></Login>
    },{
        path:'/register',
        element:<Register></Register>
    },{
        path: '/packages',
        element:<Package></Package>
    }]

}])

export default router;