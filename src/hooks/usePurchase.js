import { useEffect, useState } from "react"

const usePurchase=()=>{
    const[purchase,setPurchase]=useState([]);
    useEffect(()=>{
        fetch("Services.json")
        .then(res=>res.json())
        .then(data=>setPurchase(data))
    },[]);
    
    return[purchase,setPurchase];
}
export default usePurchase;