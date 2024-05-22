import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Restaurent from "./components/Restaurent";
import About from "./components/About"; 
import Contact from "./components/Contact";
import Error from "./components/Error";
import Itemlist from "./components/Itemlist";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import appstore from "./utils/appstore";
import Paycancel from "./components/cancel";
import Paysuccess from "./components/success";
const Applayout=()=>{
    return(
        <Provider store={appstore}>
            <div>
                <Heading/>
                <Outlet/>
            </div>
        </Provider>
    )
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Restaurent/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resid",
                element:<Itemlist/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/success",
                element:<Paysuccess/>
            },
            {
                path:"/cancel",
                element:<Paycancel/>
            }
        ]
    }
])
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);