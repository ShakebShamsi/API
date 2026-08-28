import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerMenu from '../ShimmerMenu';

function RestaurantMenu() {
   const [resInfo, setResInfo] = useState(null);
   const { resId } = useParams();

   useEffect(() => {
      fetchMenu();
   }, [resId]);

   const fetchMenu = async () => {
      try {
         const response = await fetch(
            `/api/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9634474&lng=77.66991569999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
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

   return (
      <div className="menu">
         <h1>Restaurant ID: {resId}</h1>
      </div>
   );
}

export default RestaurantMenu;
