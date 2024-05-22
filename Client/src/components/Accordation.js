import { useState } from "react";
import Menulist from "./Menulist"
const Accordation =(props) =>{
    const [listout,setlistout]=useState(false);
    const handlelist =()=>{
        setlistout(!listout);
    }
    console.log(props);
    return (
        <div className= "w-6/12 mx-auto my-4 shadow-lg bg-gray-100 p-4">
           <div onClick={handlelist} className="flex justify-between cursor-pointer">
              <p className="font-bold">{props.userdata.title}({props.userdata.itemCards.length})</p>
              <span>⬇️</span>
           </div>
           { listout && <Menulist menudata={props.userdata.itemCards}/>} 
        </div>
    ) 
}
export default Accordation;
//{props.userdata.itemCards.map((item)=><li>{item?.card?.info?.name}</li>)}