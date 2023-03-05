import styled from "@emotion/styled";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import PlayIcon from "./icons/PlayIcon";
import VideoPlayer from "./VideoPlayer";

// TODO on play expand to full width

export default function LazyVideoPlayer({ video }) {
  const { url, client, date, title } = video;
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const isInView = useInView(playerRef, { once: true });

  const handleClick = () => {
    setShowVideo(!showVideo);
    setIsPlaying(!isPlaying);
  };

  return (
    <VideoWrapper className="w-full relative">
      <motion.div
        ref={playerRef}
        style={{
          transform: isInView ? "none" : "translateY(100%)",
          opacity: isInView ? 1 : 0,
          transition: "all .5s cubic-bezier(0.72, 0.37, 0, 0.76)",
        }}
        onClick={handleClick}
      >
        {showVideo ? (
          <div className="video-modal flex items-center justify-center">
            <div className="modal-content px-2 md:px-4 py-4 md:py-8 bg-gray-500 w-full">
              <div
                className="h-8 w-full flex justify-end items-center text-gray-900 px-4 bg-gray-500"
                onClick={handleClick}
              >
                X
              </div>
              <div className="flex flex-col md:flex-row">
                <VideoPlayer
                  className="w-11/12"
                  url={`https://www.youtube.com/watch?v=NpEaa2P7qZI`}
                  autoplay={true}
                />
                <div className="h-full w-full text-left p-2">
                  <p>Project descrption</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque est alias nihil maxime ipsa rerum praesentium
                    aspernatur fuga libero qui?
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          url && (
            <motion.button
              type="button"
              whileHover={{
                backgroundColor: "#fcfffc",
                color: "#000011",
              }}
              className="w-full h-48 md:h-60 center relative transition duration-500 ease-in-out text-transparent shadow-md"
            >
              <div className="absolute h-full w-full thumbnail-container top-0 left-0 overflow-hidden">
                <Image
                  src={url}
                  width={660}
                  height={415}
                  layout="responsive"
                  alt={title}
                  priority={true}
                  className="hover:scale-110 transition duration-500 ease-in-out hover:cursor-pointer"
                />
              </div>
            </motion.button>
          )
        )}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "3rem" }}
          transition={{ duration: 1, delay: 1 }}
          className="py-2 px-4 w-full bg-gray-100 flex justify-between items-center transition-all ease-in-out shadow"
        >
          <h4 className="text-lg text-black">
            {`${client} - ${date} - ${title}`}
          </h4>
          <span
            className="text-black text-lg hover:cursor-pointer hover:text-gray-500"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <span>X</span>
            ) : (
              <PlayIcon currentColor="black" size="20" />
            )}
          </span>
        </motion.div>
      </motion.div>
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  .video-modal {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: -3px 5px 19px -2px rgba(0, 0, 0, 0.75);
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.3s cubic-bezier(0.72, 0.37, 0, 0.76);
  }
`;
