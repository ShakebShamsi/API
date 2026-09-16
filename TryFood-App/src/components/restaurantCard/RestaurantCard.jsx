import { CDN_URL } from '../../utils/constants';
import './RestaurantCard.css';

const RestaurantCard = (props) => {
   const { resData } = props;

   const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
   } = resData?.info ?? {};

   return (
      <div className="res-card">
         <img
            className="res-logo"
            src={CDN_URL + cloudinaryImageId}
            alt="Biryani"
         />

         <div className="res-card-content">
            <h3>{name}</h3>
            <hr />
            <em>{cuisines?.join(', ')}</em>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
         </div>
      </div>
   );
};

//Higher Order Component

export const withPromotedLabel = (RestaurantCard) => {
   return (props) => {
      const badgeImage =
         props?.resData?.info?.badges?.imageBadges?.[0]?.imageId;

      return (
         <div className="promoted-card">
            {badgeImage && (
               <div className="promoted-badge">
                  <img
                     src={CDN_URL + badgeImage}
                     alt="Restaurant badge"
                  />
               </div>
            )}

            <RestaurantCard {...props} />
         </div>
      );
   };
};



export default RestaurantCard;
