import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {

  const totalQuantity= useSelector((state)=> state.cartItem.totalQuantity)
  return (
   


<nav className='bg-black p-3 '>
    <div className='flex justify-between items-center max-w-[1200px] w-[90%] mx-auto'>
      <ul className="first flex gap-4 items-center text-white">
        <li><NavLink className={({isActive})=>{
         return  isActive?'text-yellow-500':''
        }}  to="/" href="#">Home</NavLink></li>
        <li><NavLink className={({isActive})=>{
         return  isActive?'text-yellow-500':''
        }} to ="/products"href="#">Products</NavLink></li>
      </ul>
      <div className="left flex gap-4 items-center text-white ">
       
        <NavLink className={({isActive})=>{
         return  isActive?'text-yellow-500':''
        }}  to="/cart">Cart ({totalQuantity})</NavLink>
      </div>
    </div>
</nav>

  )
}
