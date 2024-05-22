import { useEffect, useState } from "react";
const userestaurentinfo = ()=>{
    const [resdata,setresdata]=useState(null);
    useEffect(()=>{
        fetchdata();

    },[]);
    const fetchdata=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3759576&lng=78.537056&restaurantId=229598&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const res=await data.json();
        console.log(res.data.cards[2]?.card?.card?.info);
        setresdata(res.data);
    }
    return resdata;
}
export default userestaurentinfo;