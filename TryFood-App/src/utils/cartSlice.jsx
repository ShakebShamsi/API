import { createSlice } from '@reduxjs/toolkit';


// =========================================================
// LOAD CART FROM LOCAL STORAGE
// =========================================================

const savedCart = localStorage.getItem('cartItems');

const initialState = {
   items: savedCart
      ? JSON.parse(savedCart)
      : []
};


const cartSlice = createSlice({

   name: 'cart',

   initialState,

   reducers: {

      // =====================================================
      // ADD ITEM
      // =====================================================

      addItemToCart: (state, action) => {

         state.items.push(action.payload);

         // Save updated cart
         localStorage.setItem(
            'cartItems',
            JSON.stringify(state.items)
         );

      },


      // =====================================================
      // REMOVE ONE ITEM
      // =====================================================

      removeItemFromCart: (state, action) => {

         const itemId = action.payload.id;

         const itemIndex = state.items.findLastIndex(
            (item) => item.id === itemId
         );

         if (itemIndex !== -1) {

            state.items.splice(itemIndex, 1);

         }


         // Save updated cart
         localStorage.setItem(
            'cartItems',
            JSON.stringify(state.items)
         );

      }

   }

});


export const {
   addItemToCart,
   removeItemFromCart
} = cartSlice.actions;


export default cartSlice.reducer;
