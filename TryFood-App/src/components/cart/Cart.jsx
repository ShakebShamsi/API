import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
   ArrowLeft,
   MapPin,
   ChevronRight,
   Tag,
   ShoppingBag,
   ShieldCheck,
   Bike,
   Minus,
   Plus,
   Trash2,
   Star,
} from 'lucide-react';

import { CDN_URL } from '../../utils/constants';
import { addItemToCart, removeItemFromCart } from '../../utils/cartSlice';

import './Cart.css';


const Cart = () => {

   const dispatch = useDispatch();


   /* =========================================================
      GET CART ITEMS FROM REDUX
   ========================================================= */

   const cartItems = useSelector(
      (store) => store.cart.items
   );

   const groupedCartItems = Object.values(
      (cartItems || []).reduce((acc, item) => {

         if (!item?.id) {
            return acc;
         }

         if (!acc[item.id]) {

            acc[item.id] = {
               ...item,
               quantity: 1,
            };

         } else {

            acc[item.id].quantity += 1;

         }

         return acc;

      }, {})
   );


   /* =========================================================
      INCREASE QUANTITY
   ========================================================= */

   const increaseQuantity = (item) => {

      dispatch(addItemToCart(item));

   };


   /* =========================================================
      DECREASE QUANTITY
   ========================================================= */

   const decreaseQuantity = (item) => {

      dispatch(removeItemFromCart(item));

   };


   /* =========================================================
      REMOVE COMPLETELY
   ========================================================= */

   const removeItem = (item) => {

      const quantity = groupedCartItems.find(
         (cartItem) => cartItem.id === item.id
      )?.quantity || 0;

      for (let i = 0; i < quantity; i++) {
         dispatch(removeItemFromCart(item));
      }

   };


   /* =========================================================
      TOTAL ITEM COUNT
   ========================================================= */

   const totalItemCount = groupedCartItems.reduce(
      (total, item) => total + item.quantity,
      0
   );


   /* =========================================================
      ITEM TOTAL
   ========================================================= */

   const itemTotal = groupedCartItems.reduce(
      (total, item) => {

         const price =
            item?.price ||
            item?.defaultPrice ||
            0;

         return total + (price / 100) * item.quantity;

      },
      0
   );


   /* =========================================================
      BILL
   ========================================================= */

   const deliveryFee =
      itemTotal >= 499 ? 0 : 40;

   const platformFee = 5;

   const gst = Math.round(
      itemTotal * 0.05
   );

   const grandTotal =
      itemTotal +
      deliveryFee +
      platformFee +
      gst;


   /* =========================================================
      EMPTY CART
   ========================================================= */

   if (groupedCartItems.length === 0) {

      return (
         <div className="cart-page">

            <div className="empty-cart">

               <div className="empty-cart-icon">

                  <ShoppingBag
                     size={48}
                     strokeWidth={1.5}
                  />

               </div>

               <h2>
                  Your cart is empty
               </h2>

               <p>
                  You haven't added anything to your cart yet.
               </p>

               <Link
                  to="/"
                  className="browse-food-btn"
               >
                  Browse Food
               </Link>

            </div>

         </div>
      );

   }


   /* =========================================================
      MAIN CART
   ========================================================= */

   return (

      <div className="cart-page">


         {/* =====================================================
             TOP BAR
         ===================================================== */}

         <div className="cart-topbar">

            <Link
               to="/"
               className="back-btn"
            >
               <ArrowLeft size={20} />
            </Link>

            <div>

               <h1>
                  Your Cart
               </h1>

               <span>
                  {totalItemCount}{' '}
                  {totalItemCount === 1
                     ? 'item'
                     : 'items'}
               </span>

            </div>

         </div>


         {/* =====================================================
             MAIN LAYOUT
         ===================================================== */}

         <div className="cart-layout">


            {/* =================================================
                LEFT
            ================================================= */}

            <div className="cart-left">


               {/* =============================================
                   RESTAURANT
               ============================================= */}

               <section className="cart-card restaurant-card">

                  <div className="restaurant-info">

                     <div className="restaurant-logo">

                        <ShoppingBag
                           size={22}
                        />

                     </div>

                     <div>

                        <h3>
                           Your Order
                        </h3>

                        <p>
                           Selected menu items
                        </p>

                     </div>

                  </div>


                  <div className="delivery-time">

                     <Bike size={15} />

                     <span>
                        Delivery
                     </span>

                  </div>

               </section>


               {/* =============================================
                   DELIVERY ADDRESS
               ============================================= */}

               <section className="cart-card address-card">

                  <div className="address-icon">

                     <MapPin size={20} />

                  </div>


                  <div className="address-content">

                     <h3>
                        Delivering to
                     </h3>

                     <strong>
                        Home
                     </strong>

                     <p>
                        Add your delivery address
                     </p>

                  </div>


                  <button
                     type="button"
                     className="change-address"
                  >
                     Change
                  </button>

               </section>


               {/* =============================================
                   CART ITEMS
               ============================================= */}

               <section className="cart-card items-card">


                  <div className="section-heading">

                     <h2>
                        {totalItemCount}{' '}
                        {totalItemCount === 1
                           ? 'Item'
                           : 'Items'}
                     </h2>


                     <Link
                        to="/"
                        className="add-more-btn"
                     >
                        Add More
                     </Link>

                  </div>


                  <div className="cart-items">


                     {groupedCartItems.map((item) => {

                        const price =
                           item?.price ||
                           item?.defaultPrice ||
                           0;


                        const imageId =
                           item?.imageId ||
                           item?.cloudinaryImageId;

                        return (

                           <div
                              className="cart-item"
                              key={item.id}
                           >


                              {/* =================================
                                  ITEM IMAGE
                              ================================= */}

                              <div className="cart-item-image">

                                 {imageId ? (

                                    <img
                                       src={
                                          CDN_URL +
                                          imageId
                                       }
                                       alt={
                                          item?.name ||
                                          'Menu item'
                                       }
                                       onError={(e) => {
                                          e.currentTarget.style.display =
                                             'none';
                                       }}
                                    />

                                 ) : (

                                    <div className="cart-image-placeholder">

                                       <ShoppingBag
                                          size={25}
                                       />

                                    </div>

                                 )}

                              </div>


                              {/* =================================
                                  ITEM DETAILS
                              ================================= */}

                              <div className="cart-item-details">


                                 {/* NAME */}

                                 <div className="item-title-row">

                                    <div>

                                       <span className="veg-icon">
                                          <span />
                                       </span>

                                       <h3>
                                          {item?.name ||
                                             'Unknown Item'}
                                       </h3>

                                    </div>

                                 </div>


                                 {/* PRICE */}

                                 <strong className="item-price">

                                    ₹
                                    {(price / 100).toFixed(2)}

                                 </strong>


                                 {/* DESCRIPTION */}

                                 {item?.description && (

                                    <p className="item-description">

                                       {item.description}

                                    </p>

                                 )}

                              </div>


                              {/* =================================
                                  QUANTITY CONTROL
                              ================================= */}

                              <div className="quantity-control">


                                 {/* MINUS */}

                                 <button
                                    type="button"
                                    onClick={() =>
                                       decreaseQuantity(item)
                                    }
                                    aria-label={`Decrease ${ item?.name } `}
                                 >

                                    <Minus size={14} />

                                 </button>


                                 {/* QUANTITY */}

                                 <span>
                                    {item.quantity}
                                 </span>


                                 {/* PLUS */}

                                 <button
                                    type="button"
                                    onClick={() =>
                                       increaseQuantity(item)
                                    }
                                    aria-label={`Increase ${ item?.name } `}
                                 >

                                    <Plus size={14} />

                                 </button>

                              </div>


                              {/* =================================
                                  REMOVE ITEM
                              ================================= */}

                              <button
                                 type="button"
                                 className="remove-item"
                                 onClick={() =>
                                    removeItem(item)
                                 }
                                 aria-label={`Remove ${ item?.name } `}
                              >

                                 <Trash2 size={17} />

                              </button>


                           </div>

                        );

                     })}

                  </div>

               </section>


               {/* =============================================
                   COUPON
               ============================================= */}

               <section className="cart-card coupon-card">

                  <div className="coupon-icon">

                     <Tag size={20} />

                  </div>


                  <div className="coupon-content">

                     <h3>
                        Apply Coupon
                     </h3>

                     <p>
                        Save more with available offers
                     </p>

                  </div>


                  <ChevronRight size={20} />

               </section>


               {/* =============================================
                   SAFETY
               ============================================= */}

               <section className="cart-card safety-card">

                  <ShieldCheck size={22} />

                  <div>

                     <h3>
                        Safe and secure payments
                     </h3>

                     <p>
                        Your payment information is protected
                        with industry-standard security.
                     </p>

                  </div>

               </section>

            </div>


            {/* =================================================
                BILL DETAILS
            ================================================= */}

            <aside className="bill-section">

               <div className="bill-card">


                  <h2>
                     Bill Details
                  </h2>


                  {/* ITEM TOTAL */}

                  <div className="bill-row">

                     <span>
                        Item Total
                     </span>

                     <span>
                        ₹{itemTotal.toFixed(2)}
                     </span>

                  </div>


                  {/* DELIVERY */}

                  <div className="bill-row">

                     <span>
                        Delivery Fee
                     </span>

                     <span
                        className={
                           deliveryFee === 0
                              ? 'free'
                              : ''
                        }
                     >
                        {deliveryFee === 0
                           ? 'FREE'
                           : `₹${ deliveryFee } `}
                     </span>

                  </div>


                  {/* PLATFORM */}

                  <div className="bill-row">

                     <span>
                        Platform Fee
                     </span>

                     <span>
                        ₹{platformFee}
                     </span>

                  </div>


                  {/* GST */}

                  <div className="bill-row">

                     <span>
                        GST & Other Charges
                     </span>

                     <span>
                        ₹{gst.toFixed(2)}
                     </span>

                  </div>


                  <div className="bill-divider" />


                  {/* TOTAL */}

                  <div className="bill-total">

                     <strong>
                        To Pay
                     </strong>

                     <strong>
                        ₹{grandTotal.toFixed(2)}
                     </strong>

                  </div>


                  {/* CHECKOUT */}

                  <button
                     type="button"
                     className="checkout-btn"
                     onClick={() =>
                        console.log(
                           'Proceed to checkout'
                        )
                     }
                  >

                     Proceed to Checkout

                     <ChevronRight size={20} />

                  </button>

               </div>

            </aside>


         </div>

      </div>

   );
};


export default Cart;
