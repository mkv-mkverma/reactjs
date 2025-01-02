const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-gray-300 bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="bg-white bg-opacity-80 text-black py-2 px-7 rounded-md text-lg hover:bg-opacity-60">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white bg-opacity-30 py-2 px-7 rounded-md text-lg hover:bg-opacity-10">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
