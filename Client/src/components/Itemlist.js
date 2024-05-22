import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { addcart } from "../utils/cartslice";
import userestaurentinfo from "./userestaurentinfo";
import Accordation from "./Accordation";
const Itemlist =()=>{
    const dispatch=useDispatch();
    const {resid}=useParams(); 
    const resdata=userestaurentinfo();
    if(resdata===null) return <Shimmer/>;
    const {name,costForTwoMessage,cuisines} =resdata?.cards[2]?.card?.card?.info;
    const itemCards=resdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c?.card?.card?.itemCards); 
    const handleredux=(item)=>{
        dispatch(addcart(item));
    }
    return(
        <div className="text-center  m-10" >
            <h1 className="font-bold">{name}</h1>
            <p>
                {cuisines.join(",")} - {" "}
                {costForTwoMessage}
            </p>
            <div>
                {itemCards.map((items)=>(
                <Accordation userdata={items?.card?.card}/>
                ))}
            </div>
        </div>
    )
}
/*<ul>
                {itemCards.map((item,index)=> <li>{item?.card?.info?.name}-{(item?.card?.info?.price)/100}<button className="addcart" onClick={()=> handleredux(item)}>ADD +</button></li>)}
            </ul>*/
export default Itemlist;