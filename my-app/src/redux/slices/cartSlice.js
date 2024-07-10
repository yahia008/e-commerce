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
    increment: (state, action) => {
        const { id, price } = action.payload;
        const idex = state.findIndex((item) => item.id === id);
      
        if (idex !== -1) {
          // Create a new copy of the item object
          const updatedItem = { ...state[idex] };
          updatedItem.qty += 1;
          updatedItem.price += price; // Add base price
      
          // Update the state with the new item object
          return [
            ...state.slice(0, idex),
            updatedItem,
            ...state.slice(idex + 1),
          ];
        }
      
        return state;
           

    },

   
    decrement: (state, action) => {
        const { id, price, qty} = action.payload;
        const idex = state.findIndex((item) => item.id === id);
        if (idex !== -1 && state[idex].qty > 0){
            state[idex].qty -= 1;
            if (state[idex].qty === 0) {
                state[idex].price = 0; // Ensure price is zero if quantity is zero
            }
            state[idex].price -= state[idex].qty * price -  state[idex].price;
            
        }
       
    }
    } 
})

export const {addToCart, removeItem, increment, decrement} =  CartSlice.actions;
export default CartSlice.reducer;