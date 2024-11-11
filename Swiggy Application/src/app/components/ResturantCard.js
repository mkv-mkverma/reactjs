import {useContext} from "react";
import {IMG_CDN_URL} from "../public/common/constant";
import UserContext from "../utils/userContext";

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="card-image"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span className="card-details">
        <h4
          style={
            avgRatingString < 4
              ? {backgroundColor: "var(--light-red)"}
              : avgRatingString === "--"
              ? {backgroundColor: "white", color: "black"}
              : {color: "white"}
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const withPromtedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <lable>Promoted</lable>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export const withLogging = (WrappedComponent) => {
  return (props, ref) => {
    console.log("Component is rendered");
    return <WrappedComponent {...props} ref={ref} />;
  };
};

export default ResturantCard;
