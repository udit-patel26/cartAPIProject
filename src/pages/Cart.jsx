import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { cartAction } from "../store/cartOperation";
export default function Cart() {
  const products = useSelector((state) => state.cartItem.products);
  
  const dispatch=useDispatch()


  function removeProductFromCart(id){

    

    dispatch(cartAction.removeWholeItem(id))


  }

  function incrementProduct(itemId){

    dispatch(cartAction.addToCart({id:itemId}))


  }
  function decrementProduct(itemId){

    dispatch(cartAction.removeFromCart(itemId))



  }
  console.log(products,"inside home")
  return (
    <div className="container mx-w-[1200px] mx-auto w-[90%]">
      <div className="flex flex-wrap gap-1">

        {products.length > 0 ?  (products.map((item)=>{
          return   <div className="card w-[300px] bg-slate-200 rounded-md overflow-hidden mt-3" key={item.id}>
          <a href="#">
            <img
              className="mx-w-[100%] bg-contain h-[200px] w-[100%]"
              src={item.image}
              alt=""
              height="200px"
              width="100%"
            />
          </a>
          <div className="p-5">
            <p>Brand : {item.title} </p>
            <p>Price : {item.price} </p>
            <p>
             Quantity : <button className="text-2xl mr-3 hover:bg-gray-400" onClick={()=>incrementProduct(item.id)}>+</button>{item.quantity}
              <button className="text-2xl ml-3 hover:bg-gray-400" onClick={()=>decrementProduct(item.id)}>-</button>
            </p>
            <div className="flex justify-between">
              <p>TotalPrice : {item.totalPrice}</p>
              <button className="p-2 bg-black text-white font-xl rounded-md hover:bg-gray-600" onClick={()=>removeProductFromCart(item.id)}>
                <IoMdRemoveCircleOutline />
              </button>
            </div>
          </div>
        </div>




        })):<h1 className=" block text-3xl font-thin text-black text-center">There no item added yet</h1>}
      
      </div>
    </div>
  );
}
