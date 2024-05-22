import { useSelector,useDispatch } from "react-redux";
import {clearcart} from "../utils/cartslice";
import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {loadStripe} from "@stripe/stripe-js";
const Cart=()=>{
    const [totalamount,setamount]=useState(0);
    const dataclear=useDispatch();
    const data=useSelector((store)=>store.cart.items);
    const dataclearcart=()=>{
        dataclear(clearcart());
    }
    const handledatacart =()=>{
        let sum=0;
        data.forEach(item => {
            sum+=((item?.card?.info?.price || 0)/100);
        });
        setamount(sum);
    }
    useEffect(()=>{
        handledatacart();
    },[data])
    //payment integration
    const makepayment= async ()=>{
        const stripe = await loadStripe("pk_test_51PHiNASIDM3MQrk03mYmu28U3fcm9fgFh7BvAGgV1KhRFXdg2SzjWZaN4u0baywT8iP352dBBWOdDyv0CWgoPsB7007dQoRoXa");
        const body ={
            products:data,
            baseUrl: window.location.origin,
        }
        const headers={
            "Content-Type":"application/json"
        }
        const response =await fetch("http://localhost:3001/create-payment-intent",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        })
        const session = await response.json();
        const result = stripe.redirectToCheckout({
            sessionId:session.id
        })
        console.log(body.products);
        if(result.error){
            console.log(result.error);
        }
    }
    return(
        <div className="text-center m-40 border border-black w-6/12 mx-auto rounded-xl bg-gray-100">
            <button className="m-5 bg-black text-white py-3 px-6 rounded-xl" onClick={dataclearcart}>Clear Cart</button>
            <div className="m-5">
                <ul>
                    {data.map((item)=>( <div className="flex justify-between"><li className="font-bold" key={nanoid}>{item?.card?.info?.name}</li>
                                       <p className="font-bold">{(item?.card?.info?.price || 0)/100}₹</p></div>))}
                </ul>
            </div>
            <div className="flex justify-between">
               <button className="text-black bg-gray-300 py-{0.30rem} m-10 py-3 px-6 rounded-xl" onClick={makepayment}>Check Out</button>
               <p className="m-10 font-bold">TotalAmount :{" "+totalamount}₹</p>
            </div>
        </div>
    )
}
export default Cart;