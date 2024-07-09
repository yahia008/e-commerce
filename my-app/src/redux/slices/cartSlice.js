import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    
]

const CartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addToCart:(state, action) => {
           
            const {id, image, qty,  price} = action.payload
            const idex = state.findIndex((item) => item.id === id)
            if(idex === -1){
                state.push({id, image, qty, price})
            }
            else{
                state[idex].qty += 1
                state[idex].price += price * qty
            }
        },
    removeItem:(state, action) => {
        const Itemid = action.payload
        return state.filter((item) => item.id !== Itemid)
    },
    increment:(state, action) => {
        const {id, price} = action.payload
        const idex = state.findIndex((item) => item.id === id)
        if(idex !== -1){

            state[idex].qty += 1
            state[idex].price +=  state[idex].qty * price;
             
        }
        
           

    },

    decrement:(state, action) => {
        const {id, price} = action.payload
        const idex = state.findIndex((item) => item.id === id)
       
        if(idex !== -1){

            state[idex].qty += 1
            state[idex].price +=  state[idex].qty * price;
             
        }
    }
    
    } 
})

export const {addToCart, removeItem, increment, decrement} =  CartSlice.actions;
export default CartSlice.reducer;