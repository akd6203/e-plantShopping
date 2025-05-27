import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const existingItem = state.items.find((item)=> item.name === name);
      if(existingItem){
        existingItem.quantity += 1;
      }else{
        state.items.push({name, image, cost, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item)=> item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item)=> item.name === action.payload.name);
      if(item){
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
