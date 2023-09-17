import { useEffect, useState } from 'react';

function useRestaurantMenu(resId) {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    // Assuming you're making an API request here to fetch restaurant data
    // Replace the placeholder URL with your actual API endpoint
    fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
      .then((response) => response.json())
      .then((data) => {
        setRestaurantData(data);
      })
      .catch((error) => {
        // Handle error if the request fails
      });
  }, [resId]); // This hook depends on the resId parameter

  return restaurantData;
}

export default useRestaurantMenu;
