import React,{useState,useEffect} from "react"

export const getData= ()=>{
const [data,setData]=useState({})
let count =0;




    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((data)=>setData(data))


    },[])

   


    return data
}


// console.log(getData())