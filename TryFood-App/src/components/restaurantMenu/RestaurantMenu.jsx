import { useParams } from 'react-router-dom';
import { Bike, Star } from 'lucide-react';

import ShimmerMenu from '../shimmerMenu/ShimmerMenu.jsx';
import { CDN_URL } from '../../utils/constants';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

import './RestaurantMenu.css';


function RestaurantMenu() {
   const { resId } = useParams();

   const { resInfo, error } = useRestaurantMenu(resId);

   // =========================================================
   // LOADING / ERROR
   // =========================================================

   if (resInfo === null) {
      if (error) {
         return (
            <div className="no-items">
               Unable to load the restaurant menu.
            </div>
         );
      }

      return <ShimmerMenu />;
   }


   // =========================================================
   // RESTAURANT INFO
   // =========================================================

   const restaurantInfo =
      resInfo?.cards?.[2]?.card?.card?.info;


   // =========================================================
   // MENU ITEMS
   // =========================================================

   const menuItems = [];

   const groupedCard =
      resInfo?.cards?.[5]?.groupedCard;


   if (groupedCard?.cardGroupMap?.REGULAR?.cards) {

      const categoryCards =
         groupedCard.cardGroupMap.REGULAR.cards;

      categoryCards.forEach((categoryCard) => {

         const itemCards =
            categoryCard?.card?.card?.itemCards;

         if (Array.isArray(itemCards)) {

            itemCards.forEach((item) => {

               if (item?.card?.info) {
                  menuItems.push(item.card.info);
               }

            });
         }

      });
   }


   // =========================================================
   // RENDER
   // =========================================================

   return (
      <div className="menu-container">

         {/* =================================================
             RESTAURANT BANNER
             ================================================= */}

         {restaurantInfo?.cloudinaryImageId && (
            <div className="restaurant-banner">

               <img
                  src={
                     CDN_URL +
                     restaurantInfo.cloudinaryImageId
                  }
                  alt={
                     restaurantInfo?.name ||
                     'Restaurant'
                  }
               />

               <div className="banner-overlay"></div>

            </div>
         )}


         {/* =================================================
             RESTAURANT HEADER
             ================================================= */}

         <div className="restaurant-header">

            <div className="header-content">

               {/* Restaurant Name + Cuisine */}

               <div className="restaurant-title-section">

                  <h1 className="restaurant-name">
                     {restaurantInfo?.name}
                  </h1>

                  <p className="restaurant-cuisines">
                     {restaurantInfo?.cuisines?.join(', ')}
                  </p>

               </div>


               {/* Restaurant Information */}

               <div className="restaurant-info-grid">

                  {/* Rating */}

                  <div className="info-item">

                     <div className="info-rating">

                        <span className="rating-badge">
                           <Star
                              size={12}
                              fill="white"
                              color="white"
                              strokeWidth={2.5}
                           />
                        </span>

                        <span className="rating-value">
                           {restaurantInfo?.avgRating}
                        </span>

                        <span className="rating-text">
                           (
                           {
                              restaurantInfo?.totalRatingsString
                           }
                           )
                        </span>

                     </div>

                  </div>


                  {/* Cost */}

                  <div className="info-item">

                     <div className="info-cost">
                        {
                           restaurantInfo
                              ?.costForTwoMessage
                        }
                     </div>

                  </div>


                  {/* Delivery */}

                  <div className="info-item">

                     <div className="info-delivery">

                        <Bike
                           size={16}
                           strokeWidth={2}
                        />

                        {
                           restaurantInfo
                              ?.nearestOutletNudge
                              ?.nearestOutletInfo
                              ?.siblingOutlet
                              ?.sla
                              ?.slaString
                        }

                     </div>

                  </div>

               </div>

            </div>

         </div>


         {/* =================================================
             MENU CONTENT
             ================================================= */}

         <div className="menu-content">

            {/* Menu Header */}

            <div className="menu-header">

               <h2>
                  Recommended
               </h2>

               <span className="menu-count">
                  {menuItems.length} items
               </span>

            </div>


            {/* =================================================
                MENU ITEMS
                ================================================= */}

            {menuItems.length > 0 ? (

               <div className="menu-items-container">

                  {menuItems.map((item, index) => (

                     item && (

                        <div
                           key={`${item?.id}-${index}`}
                           className="menu-item"
                        >

                           <div className="menu-item-wrapper">

                              {/* Item Content */}

                              <div className="menu-item-content">

                                 <h3 className="item-name">
                                    {
                                       item?.name ||
                                       'Unknown Item'
                                    }
                                 </h3>


                                 <p className="item-price">
                                    ₹
                                    {
                                       item?.price
                                          ? (
                                             item.price / 100
                                          ).toFixed(2)
                                          : 'N/A'
                                    }
                                 </p>


                                 {/* Item Rating */}

                                 {
                                    item
                                       ?.ratings
                                       ?.aggregatedRating
                                       ?.rating && (

                                       <div className="item-rating">

                                          <span className="item-rating-badge">
                                             <Star
                                                size={12}
                                                fill="white"
                                                color="white"
                                                strokeWidth={2.5}
                                             />
                                          </span>

                                          <span>
                                             {
                                                item
                                                   .ratings
                                                   .aggregatedRating
                                                   .rating
                                             }
                                          </span>

                                          <span className="item-rating-count">
                                             (
                                             {
                                                item
                                                   .ratings
                                                   .aggregatedRating
                                                   .ratingCountV2
                                             }
                                             )
                                          </span>

                                       </div>

                                    )
                                 }


                                 {/* Description */}

                                 {
                                    item?.description && (

                                       <p className="item-description">
                                          {item.description}
                                       </p>

                                    )
                                 }

                              </div>


                              {/* Item Image */}

                              {
                                 (
                                    item?.imageId ||
                                    item?.cloudinaryImageId
                                 ) && (

                                    <div className="menu-item-image-wrapper">

                                       <div className="menu-item-image">

                                          <img
                                             src={
                                                CDN_URL +
                                                (
                                                   item.imageId ||
                                                   item.cloudinaryImageId
                                                )
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

                                       </div>


                                       {/* Add Button */}

                                       <button
                                          className="add-btn"
                                          type="button"
                                       >
                                          ADD
                                       </button>

                                    </div>

                                 )
                              }

                           </div>

                        </div>

                     )

                  ))}

               </div>

            ) : (

               <div className="no-items">
                  No items available
               </div>

            )}

         </div>

      </div>
   );
}


export default RestaurantMenu;
