import { useEffect, useState } from 'react';
import RestaurantCard from '../restaurantCard/RestaurantCard';
import Shimmer from '../Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

   const [searchText, setSearchText] = useState('');

   useEffect(() => {
      const loadRestaurants = async () => {
         try {
            const response = await fetch(
               '/api/dapi/restaurants/list/v5?lat=12.9634474&lng=77.66991569999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
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

            console.log('Restaurants:', restaurants);

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

   const handleSearch = () => {
      const filtered = listOfRestaurants.filter((restaurant) =>
         restaurant?.info?.name
            ?.toLowerCase()
            .includes(searchText.toLowerCase())
      );

      setFilteredRestaurant(filtered);
   };

   const handleTopRated = () => {
      const filtered = listOfRestaurants.filter(
         (restaurant) =>
            Number(restaurant?.info?.avgRating) > 4
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
                  placeholder="Search a restaurant you want..."
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

            {filteredRestaurant.map((restaurant) => {

               const restaurantId =
                  restaurant?.info?.id;

               return (
                  <Link
                     key={restaurantId}
                     to={`/restaurant/${restaurantId}`}
                     className="restaurant-link"
                  >
                     <RestaurantCard
                        resData={restaurant}
                     />
                  </Link>
               );
            })}

         </div>

      </div>
   );
};

export default Body;
