import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

   const [resInfo, setResInfo] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
      const controller = new AbortController();

      const fetchData = async () => {
         try {
            const response = await fetch(`${MENU_API}${resId}`, {
               signal: controller.signal,
            });

            if (!response.ok) {
               throw new Error(`Request failed with status ${response.status}`);
            }

            const json = await response.json();
            setResInfo(json.data);
         } catch (fetchError) {
            if (fetchError.name !== 'AbortError') {
               console.error('Unable to fetch restaurant menu:', fetchError);
               setError(fetchError);
            }
         }
      };

      if (resId) {
         fetchData();
      }

      return () => controller.abort();
   }, [resId]);


   return { resInfo, error };
}

export default useRestaurantMenu;
