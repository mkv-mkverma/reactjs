import React from "react";
import {IMG_CDN_URL} from "../public/common/constant";

const MovieCard = ({posterPath, title}) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt={title} />
    </div>
  );
};

export default MovieCard;
