import React from 'react'
import { getData } from "../CustomHook/api";
import Product from './Product';


export default function ShowProuducts() {
    const products = getData().products;
    console.log(products)
  return (
    <div className="container mx-w-[1200px] mx-auto w-[90%]">


     <div className="flex flex-wrap gap-1">

    {products && (products).map((item)=>(

        <Product key={item.id} item={item}/>
    ))}


     </div>



    </div>
  )
}
