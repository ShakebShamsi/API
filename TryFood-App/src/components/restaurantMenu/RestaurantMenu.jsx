import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerMenu from '../ShimmerMenu';
import { CDN_URL } from '../../utils/constants';

function RestaurantMenu() {
   const [resInfo, setResInfo] = useState(null);
   const { resId } = useParams();

   useEffect(() => {
      fetchMenu();
   }, [resId]);

   const fetchMenu = async () => {
      try {
         const response = await fetch(
            `/api/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9634474&lng=77.66991569999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
         );

         console.log('Status:', response.status);
         console.log('URL:', response.url);

         if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
         }

         const json = await response.json();

         console.log('Menu response:', json);

         setResInfo(json.data);
      } catch (error) {
         console.error('Unable to fetch menu:', error);
      }
   };

   if (resInfo === null) {
      return <ShimmerMenu />;
   }

   // Extract restaurant info from the cards array
   const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

   // Extract menu items from cards
   const menuItems = [];

   // Get the grouped card that contains menu items
   const groupedCard = resInfo?.cards?.[5]?.groupedCard;

   if (groupedCard?.cardGroupMap?.REGULAR?.cards) {
      const categoryCards = groupedCard.cardGroupMap.REGULAR.cards;

      categoryCards.forEach((categoryCard) => {
         // Check if this card has itemCards (ItemCategory)
         const itemCards = categoryCard?.card?.card?.itemCards;

         if (Array.isArray(itemCards)) {
            itemCards.forEach((item) => {
               if (item?.card?.info) {
                  menuItems.push(item.card.info);
               }
            });
         }
      });
   }

   return (
      <div className="menu-container">
         {/* Restaurant Banner Image */}
         {restaurantInfo?.cloudinaryImageId && (
            <div className="restaurant-banner">
               <img
                  src={CDN_URL + restaurantInfo.cloudinaryImageId}
                  alt={restaurantInfo?.name}
               />
               <div className="banner-overlay"></div>
            </div>
         )}

         {/* Restaurant Header Info Card */}
         <div className="restaurant-header">
            <div className="header-content">
               <div className="restaurant-title-section">
                  <h1 className="restaurant-name">{restaurantInfo?.name}</h1>
                  <p className="restaurant-cuisines">
                     {restaurantInfo?.cuisines?.join(', ')}
                  </p>
               </div>

               <div className="restaurant-info-grid">
                  <div className="info-item">
                     <div className="info-rating">
                        <span className="rating-badge">⭐ {restaurantInfo?.avgRating}</span>
                        <span className="rating-text">({restaurantInfo?.totalRatingsString})</span>
                     </div>
                  </div>
                  <div className="info-item">
                     <div className="info-cost">{restaurantInfo?.costForTwoMessage}</div>
                  </div>
                  <div className="info-item">
                     <div className="info-delivery">🚗 {restaurantInfo?.sla?.slaString}</div>
                  </div>
               </div>
            </div>
         </div>

         {/* Menu Items Section */}
         <div className="menu-content">
            <div className="menu-header">
               <h2>Recommended</h2>
               <span className="menu-count">{menuItems.length} items</span>
            </div>

            {menuItems.length > 0 ? (
               <div className="menu-items-container">
                  {menuItems.map((item) => (
                     item && (
                        <div key={item?.id} className="menu-item">
                           <div className="menu-item-wrapper">
                              <div className="menu-item-content">
                                 <h3 className="item-name">{item?.name || 'Unknown Item'}</h3>
                                 <p className="item-price">
                                    ₹{item?.price ? (item.price / 100).toFixed(2) : 'N/A'}
                                 </p>
                                 {item?.ratings?.aggregatedRating?.rating && (
                                    <p className="item-rating">
                                       ⭐ {item.ratings.aggregatedRating.rating} (
                                       {item.ratings.aggregatedRating.ratingCountV2})
                                    </p>
                                 )}
                                 {item?.description && (
                                    <p className="item-description">{item.description}</p>
                                 )}
                              </div>
                              {(item?.imageId || item?.cloudinaryImageId) && (
                                 <div className="menu-item-image-wrapper">
                                    <div className="menu-item-image">
                                       <img
                                          src={CDN_URL + (item.imageId || item.cloudinaryImageId)}
                                          alt={item?.name}
                                          onError={(e) => {
                                             e.target.style.display = 'none';
                                          }}
                                       />
                                    </div>
                                    <button className="add-btn">ADD</button>
                                 </div>
                              )}
                           </div>
                        </div>
                     )
                  ))}
               </div>
            ) : (
               <div className="no-items">No items available</div>
            )}
         </div>
      </div>
   );
}

export default RestaurantMenu;
