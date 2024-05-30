
import {createSlice } from '@reduxjs/toolkit'


const initialState={
    products:[],
    totalQuantity:0
}


const cart=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart(state,action){

        const newItem = action.payload
        const existingItem = state.products.find((item)=>item.id===newItem.id)
            state.totalQuantity++
        if(!existingItem){
            const newProduct ={
                title:newItem.title,
                id:newItem.id,
                image:newItem.image,
                price:newItem.price,
                quantity:1,
                totalPrice : Math.floor(newItem.price)

            }
            state.products.push(newProduct)
        }
        else{
            existingItem.quantity=existingItem.quantity+1;
            existingItem.totalPrice=existingItem.totalPrice+(existingItem.price);

        }

        },

        removeFromCart(state,action){
            state.totalQuantity--;
            const toDelete = action.payload
            console.log(toDelete)
            const existingItem= state.products.find((item)=>item.id === toDelete)
            console.log(existingItem)
            if(existingItem.quantity===1){
                state.products= state.products.filter((item)=>item.id!== toDelete)
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice= existingItem.totalPrice-(existingItem.price)

            }
        },
        removeWholeItem(state,action){
            const toDelete = action.payload
            const item = state.products.find((item)=>item.id===toDelete)
            state.totalQuantity= state.totalQuantity- item.quantity
            state.products= state.products.filter((item)=>item.id!== toDelete)

        }
    }
})
export const cartAction = cart.actions;

export default cart.reducer