import { useEffect, useState } from 'react';
import { CDN_URL } from '../../utils/constants';
import './Body.css';
import RestaurantCard, { withPromotedLabel } from '../restaurantCard/RestaurantCard';
import Shimmer from '../shimmer/Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

   const [searchText, setSearchText] = useState('');

   const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

   useEffect(() => {
      const loadRestaurants = async () => {
         try {
            const response = await fetch(
               '/api/dapi/restaurants/list/v5?lat=28.554609&lng=77.291263&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );

            if (!response.ok) {
               throw new Error(
                  `Request failed with status ${response.status}`
               );
            }

            const json = await response.json();

            const restaurants =
               json?.data?.cards
                  ?.map(
                     (card) =>
                        card?.card?.card?.gridElements?.infoWithStyle
                           ?.restaurants
                  )
                  .find((restaurants) => Array.isArray(restaurants)) ?? [];

            // console.log('Restaurants:', restaurants);

            setListOfRestaurants(restaurants);
            setFilteredRestaurant(restaurants);
         } catch (error) {
            console.error(
               'Unable to fetch restaurants:',
               error
            );
         }
      };

      loadRestaurants();
   }, []);

   const onlineStatus = useOnlineStatus();

   if (onlineStatus === false) {
      return <h1>🔴 Looks like you  are offline. Please check your internet connection.</h1>
   }

   const handleSearch = () => {
      const filtered = listOfRestaurants.filter((restaurants) =>
         restaurants?.info?.name
            ?.toLowerCase()
            .includes(searchText.toLowerCase())
      );

      setFilteredRestaurant(filtered);
   };

   const handleTopRated = () => {
      const filtered = listOfRestaurants.filter(
         (restaurants) =>
            Number(restaurants?.info?.avgRating) > 4
      );

      setFilteredRestaurant(filtered);
   };

   if (listOfRestaurants.length === 0) {
      return <Shimmer />;
   }

   return (
      <div className="body">

         {/* FILTER */}
         <div className="filter">

            {/* SEARCH */}
            <div className="search">

               <input
                  type="text"
                  placeholder="Search a restaurants you want..."
                  className="searchBox"
                  value={searchText}
                  onChange={(e) => {
                     setSearchText(e.target.value);
                  }}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter') {
                        handleSearch();
                     }
                  }}
               />

               <button onClick={handleSearch}>
                  Search
               </button>

            </div>

            {/* TOP RATED */}
            <button
               className="filter-btn"
               onClick={handleTopRated}
            >
               Top Rated Restaurants
            </button>

         </div>

         {/* RESTAURANTS */}
         <div className="res-container">

            {filteredRestaurant.map((restaurants) => {

               const restaurantId =
                  restaurants?.info?.id;

               return (
                  <Link
                     key={restaurantId}
                     to={`/restaurants/${restaurantId}`}
                     className="restaurants-link"
                  >
                     {restaurants?.info?.badges?.imageBadges?.[0]?.imageId ? (
                        <RestaurantCardWithPromotedLabel
                           resData={restaurants}
                        />
                     ) : (
                        <RestaurantCard
                           resData={restaurants}
                        />
                     )}
                  </Link>
               );
            })}

         </div>

      </div>
   );
};

export default Body;
