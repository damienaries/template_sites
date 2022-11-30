import { useState, useRef } from "react";
import styled from "@emotion/styled";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { motion, useInView } from "framer-motion";
import PlayIcon from './icons/PlayIcon';

// TODO on play expand to full width

export default function LazyVideoPlayer({ video }){
    const { id, service, thumbnail, title } = video;
    const [showVideo, setShowVideo] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);
    const isInView = useInView(playerRef, { once: true });

    const handleClick = () => {
        setShowVideo(!showVideo);
        setIsPlaying(!isPlaying);
    }
    
    return (
        <VideoWrapper className={`w-full ${showVideo ? 'full-size-video' : ''}`}>
            <motion.div
                ref={playerRef}
                style={{
                    transform: isInView ? "none" : "translateY(100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all .5s cubic-bezier(0.72, 0.37, 0, 0.76)"
                }}
                onClick={handleClick}>
                {showVideo ? (
                    service === 'youtube' ? (
                        <VideoPlayer url={`https://www.youtube-nocookie.com/embed/${id}`} autoplay={true} />
                        ) : (
                            // Or Vimeo
                            <VideoPlayer url={`http://player.vimeo.com/${id}`} autoplay={true} />
                        )
                    ) : thumbnail && (
                        <motion.button 
                            type="button" 
                            whileHover={{
                                backgroundColor: '#fcfffc',
                                color: '#000011',
                            }} 
                            className="w-full h-48 md:h-52 center relative transition duration-500 ease-in-out text-transparent shadow-md">
                                <div className="absolute h-full w-full thumbnail-container top-0 left-0 overflow-hidden">
                                    <Image 
                                        src={urlFor(thumbnail.asset).url()} 
                                        width={560} 
                                        height={315} 
                                        layout="responsive" 
                                        alt={title} 
                                        priority={true}
                                        className="hover:scale-110 transition duration-500 ease-in-out hover:cursor-pointer" />
                                </div>
                        </motion.button>
                )}
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '3rem' }}
                        transition={{ duration: 1, delay: 1 }}
                        className="py-2 px-4 w-full bg-gray-100 flex justify-between items-center transition-all ease-in-out shadow">
                        <h4 className="text-lg text-black">{title}</h4>
                        <span 
                            className="text-black text-lg hover:cursor-pointer hover:text-gray-500" 
                            onClick={() => setIsPlaying(!isPlaying)}>
                                {isPlaying ? (
                                    <span>X</span>
                                ) : (
                                    <PlayIcon currentColor='black' size='20'/>
                                )}
                        </span>
                    </motion.div>
            </motion.div>
        </VideoWrapper>
    )
}

const VideoWrapper = styled.div`
    
    &.full-size-video {
        max-width: 90vw;
        margin: 0 auto;
        background-color: black;
        transition: all .3s cubic-bezier(0.72, 0.37, 0, 0.76);
    }
`