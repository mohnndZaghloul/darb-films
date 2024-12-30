import { useState } from "react";
import ReactPlayer from "react-player";

const VideoComponent = ({
  URL,
  thumbnail,
}: {
  URL: string;
  thumbnail: string;
}) => {
  const [isPlayed, setIsPlayed] = useState(false);

  return (
    <div
      onClick={() => setIsPlayed(!isPlayed)}
      className={`cursor-pointer border ${
        isPlayed ? "grayscale-0" : "grayscale"
      } transition duration-500 aspect-[16/9] w-full h-full bg-cover`}>
      <ReactPlayer
        controls={isPlayed}
        playing={isPlayed}
        light={thumbnail}
        width="100%"
        height="100%"
        url={URL}
      />
    </div>
  );
};

export default VideoComponent;
