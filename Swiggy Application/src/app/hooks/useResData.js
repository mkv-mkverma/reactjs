import {useEffect, useState} from "react";

const useResData = (FOODFIRE_API_URL) => {
  const [allRestaurants, setAllResturants] = useState([]);
  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const response = await fetch(FOODFIRE_API_URL);
    const json = await response.json();

    const resData = checkJsonData(json);
    setAllResturants(resData);
    // setFilteredRestaurants(resData);
  }

  // initialize checkJsonData() function to check Swiggy Restaurant data
  function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      // initialize checkData for Swiggy Restaurant data
      let checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        return checkData;
      }
    }
  }

  return allRestaurants;
};

export default useResData;
