import ResturantCard, {withPromtedLabel} from "./ResturantCard";

const Body = () => {
  const ResturantCardPromoted = withPromtedLabel(ResturantCard);

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      {filteredRestaurants.map((restaurant) => {
        return (
          <>
            {restaurant?.info?.isOpen ? (
              <ResturantCardPromoted
                {...restaurant?.info}
                key={restaurant?.info?.id}
              />
            ) : (
              <ResturantCard {...restaurant?.info} key={restaurant?.info?.id} />
            )}
          </>
        );
      })}
    </>
  );
};

export default Body;
