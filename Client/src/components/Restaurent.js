import Rescard from "./Rescard";
import react,{ useState,useEffect } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import {withPromotedrescard} from "./Promotedrescard"
import  useonlinestatus from "./useonlinestatus"
const Restaurent=()=>{
    const [updatelist,setupdatelist]=useState([]);
    const [searchdata,setsearchdata]=useState("");
    const [recoverdata,setrecoverdata]=useState([]);
    const onlinestatus=useonlinestatus();
    const Promotedrescard= withPromotedrescard(Rescard);
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata=async() =>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3741816&lng=78.55342569999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setupdatelist(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setrecoverdata(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(!onlinestatus){
        return(
            <div><h1>OOPs!!</h1>
            <h2>Someting Went Wrong!!</h2></div>
        )
    }
    if(updatelist?.length===0)
    {
        return(
            <Shimmer/>
        )
    }
    return(
        <div className="body">
            <div className="flex-center m-4 p-4">
                <input className="py-2 border border-solid border-black shadow-md" type="text" value={searchdata} onChange={(e)=>setsearchdata(e.target.value) }/>
                <button className="px-10 py-2 bg-green-100 m-4 shadow-md hover:bg-green-200" onClick={()=>{
                    const searchres=recoverdata.filter((res)=>res.info.name.toLowerCase().includes(searchdata.toLowerCase()));
                    setupdatelist(searchres); 
                }}
                >Search</button>
                <button className="bg-gray-100 px-10 py-2 shadow-md hover:bg-gray-200" onClick={()=>{
                let result=updatelist.filter((res)=>res.info.avgRating>4)
                setupdatelist(result);
                }}>Top Rating Restaurent</button>
            </div>
            <div className="flex flex-wrap">
                {
                    updatelist.map((objs)=>(<Link key={objs.info.id} className="removeline"  to={"/restaurant/"+objs.info.id}><Promotedrescard resdata={objs}/></Link>))
                }
            </div>
        </div>
    )
}
export default Restaurent;