import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
   name: 'cart',

   initialState: {
      items: []
   },

   reducers: {

      addItemToCart: (state, action) => {

         state.items.push(action.payload);

      },

      removeItemFromCart: (state, action) => {

         const itemId = action.payload.id;

         const itemIndex = state.items.findLastIndex(
            (item) => item.id === itemId
         );

         if (itemIndex !== -1) {
            state.items.splice(itemIndex, 1);
         }
      }
   }
});


export const {
   addItemToCart,
   removeItemFromCart
} = cartSlice.actions;


export default cartSlice.reducer;
