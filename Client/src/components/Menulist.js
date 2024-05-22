import { useState } from "react";
import { useDispatch } from "react-redux";
import { addcart } from "../utils/cartslice";
const Menulist=(props) =>{
    console.log(props);
    const dispatch=useDispatch();
    const handlecart=(item)=>{
        dispatch(addcart(item));
    }
    return (
        <div>
            {props.menudata.map((item)=>(
                <div key={item.card.info.id} className="border-gray-200 border-b text-left p-2 m-2 flex justify-between">
                    <div className="w-9/12">
                        <div>
                            <div>
                                <span>{item.card.info.name}</span><br/>
                                <span>₹{item.card.info.price ? item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute mx-12">
                            <button className="bg-black p-2 rounded-lg text-white" onClick={()=>handlecart(item)}>add +</button>
                        </div>
                        <img className="w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Menulist; 