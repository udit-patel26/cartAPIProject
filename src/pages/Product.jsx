import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { cartAction } from "../store/cartOperation";
import { useDispatch, useSelector } from "react-redux";




function Product({item}) {

  const dispatch=useDispatch()
 const addedProduct =useSelector(state => state.cartItem.products)

  function addToCartProduct(){

    dispatch(cartAction.addToCart({id:item.id,title:item.title,price:Math.floor(item.price),totalPrice:Math.floor(item.price),image:item.images[0],quantity:1}))


    
    
   
 

      

  }

  console.log(addedProduct)

  return (
    <>
      <div className="card w-[300px] bg-slate-200 rounded-md overflow-hidden mt-3">
        <a href="#">
          <img
            className="mx-w-[100%] bg-contain h-[200px] w-[100%]"
            src={item.images[0]}
            alt=""
            height="200px"
            width="100%"
          />
        </a>
        <div className="p-5">
          <p>Brand : {item.brand}</p>
          <p>Price : {Math.floor(item.price)}</p>
          <p>Rating : {item.rating}</p>
          <div className="flex justify-between">
              <p>Discount : {Math.floor(item.discountPercentage)}%</p>
            <button className="p-2 bg-black text-white font-xl rounded-md hover:bg-gray-600" onClick={addToCartProduct}><MdOutlineAddShoppingCart/></button>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Product;
