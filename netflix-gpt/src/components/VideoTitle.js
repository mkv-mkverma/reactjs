import React from "react";

const VideoTitle = ({title, overview}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{overview}</h2>
      <button type="button">Play</button>
      <button type="button">More Info</button>
    </div>
  );
};

export default VideoTitle;
