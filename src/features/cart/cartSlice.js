import { createSlice } from "@reduxjs/toolkit";


const initialState={
     cart:[],
    // cart:[
    //     {
    //         pizzaId:12,
    //         name:"Mediterranean",
    //         quantity:2,
    //         unitPrice:20,
    //         totalPrice:40,

    //     },
    // ],
};
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            //push means add to the last
            state.cart.push(action.payload)
        },
        deleteToCart(state,action){
            //filter means delete
            state.cart=state.cart.filter((item)=>item.pizzaId!==action.payload)
        },
        increaseItemQuantity(state,action){
            //find means search
            const item=state.cart.find((item)=>item.pizzaId===action.payload);
             item.quantity++;
             item.totalPrice=item.quantity*item.unitPrice;
        },
        decreaseItemQuantity(state,action){

            const item=state.cart.find((item)=>item.pizzaId===action.payload);
            item.quantity--;
            item.totalPrice=item.quantity*item.unitPrice;

            if(item.quantity===0) cartSlice.caseReducers.deleteToCart(state,action);
        },
        ClearCart(state){
            state.cart=[];
        },
    }
});
export const {addToCart,deleteToCart,increaseItemQuantity,decreaseItemQuantity,ClearCart}=cartSlice.actions;
export default cartSlice.reducer; 