import {logo_head} from "../utils/logolinks";
import react,{ useState } from "react";
import {Link} from "react-router-dom";
import {  useSelector } from "react-redux";
import useonlinestatus from "./useonlinestatus";
const Heading=()=>{
    const [buttontogg,setbuttontogg]=useState("login");
    const cartitem=useSelector((store)=>store.cart.items);
    const onlinestatus=useonlinestatus();
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo-container">
                <img src={logo_head} className="w-40"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status :{onlinestatus ? "✅":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart({cartitem.length} items)</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Heading;
