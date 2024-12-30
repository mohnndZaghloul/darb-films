import { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const VideoComponent = ({ URL }: { URL: string }) => {
  const [isPlayed, setIsPlayed] = useState(false);

  return (
    <motion.div
      className={`relative border ${
        isPlayed ? "grayscale-0" : "grayscale"
      } transition duration-500 aspect-[16/9] w-full h-full bg-cover`}>
      <ReactPlayer width="100%" height="100%" url={URL} playing={isPlayed} />
      <div
        onClick={() => setIsPlayed(!isPlayed)}
        className="z-40 absolute top-0 w-full h-full cursor-pointer"
      />
    </motion.div>
  );
};

export default VideoComponent;
