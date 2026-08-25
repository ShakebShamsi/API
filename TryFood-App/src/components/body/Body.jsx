import { useEffect, useState } from 'react';
import RestaurantCard from '../cards/RestaurantCard';
import Shimmer from '../Shimmer';

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
               throw new Error(`Request failed with status ${response.status}`);
            }

            const json = await response.json();
            const restaurants = json?.data?.cards
               ?.map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
               .find((restaurants) => Array.isArray(restaurants)) ?? [];

            setListOfRestaurants(restaurants);
            setFilteredRestaurant(restaurants);
         } catch (error) {
            console.error('Unable to fetch restaurants:', error);
         }
      };

      loadRestaurants();
   }, []);

   return listOfRestaurants.length === 0 ? (
      <Shimmer />
   ) : (
      <div className="body">
         <div className="filter">
            <div className="search">
               <input
                  type="text"
                  placeholder="Search a restaurant you want..."
                  className="searchBox"
                  value={searchText}
                  onChange={(e) => {
                     setSearchText(e.target.value);
                  }}
               />
               <button
                  onClick={() => {
                     console.log(searchText);

                     const filteredRestaurant = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                     );

                     setFilteredRestaurant(filteredRestaurant);
                  }}
               >
                  Search
               </button>
            </div>
            <button
               className="filter-btn"
               onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                     (res) => res.info.avgRating > 4
                  );

                  setFilteredRestaurant(filteredList);
                  console.log(filteredList);
               }}
            >
               Top Rated Restaurants
            </button>
         </div>
         <div className="res-container">
            {filteredRestaurant.map((restaurant) => (
               <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
         </div>
      </div>
   );
};

export default Body;
