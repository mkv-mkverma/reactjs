import {useEffect, useState} from "react";
import {FOODFIRE_API_URL} from "../public/common/constant";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserOffline from "./UserOffline";

function filterResturant(serchText, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(serchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllResturants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();
  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const response = await fetch(FOODFIRE_API_URL);
    const json = await response.json();

    const resData = checkJsonData(json);
    setAllResturants(resData);
    setFilteredRestaurants(resData);
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

  function searchResturant(searchText, allRestaurants) {
    if (searchText !== "") {
      const filteredData = filterResturant(searchText, allRestaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(allRestaurants);
    }
  }

  if (!isOnline) {
    return (
      <>
        <UserOffline />
      </>
    );
  }

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          className="auto-complete"
          placeholder="Search a restaurant you want..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            searchResturant(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="card-container">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/resturant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <ResturantCard
                  {...restaurant?.info}
                  key={restaurant?.info?.id}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
