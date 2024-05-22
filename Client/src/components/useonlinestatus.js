import { useState } from "react";
const useonlinestatus =()=>{
    const [Status,setstatus]= useState(true);
    window.addEventListener("online", (event) => {
        setstatus(true);
    });
    window.addEventListener("offline", (event) => {
        setstatus(false);
    });
    return Status;
}
export default useonlinestatus;