import { useState } from "react";
import styled from "@emotion/styled";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { motion } from "framer-motion";
import useWindowDimensions from '../hooks/useWindowDimensions';
// import PlayIcon from "./icons/PlayIcon";

// play expand to full width, play/pause and button underneath

export default function LazyVideoPlayer({ video }){
    const { id, service, thumbnail, title } = video;
    const [showVideo, setShowVideo] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const { width } = useWindowDimensions();

    const handleClick = () => {
        setShowVideo(!showVideo);
        setIsPlaying(!isPlaying);
    }
    
    return (
        <VideoWrapper className={`w-full ${showVideo ? 'full-size-video' : ''}`}>
            <motion.div
                initial={{ opacity: 0 }}    
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                style={{transition: "all .3s cubic-bezier(0.72, 0.37, 0, 0.76) .3s"}}
                onClick={handleClick}>
                {showVideo ? (
                service === 'youtube' ? (
                        <iframe 
                            allowFullScreen="allowFullScreen" 
                            src={`https://www.youtube.com/embed/${id}?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560`} 
                            width="560" 
                            height="315" 
                            allowtransparency="true" 
                            frameBorder="0">
                        </iframe>
                    ) : (
                        // Or Vimeo
                        <VideoPlayer title={title} url={`https://player.vimeo.com/${id}`}/>
                    )
                ) : thumbnail && (
                <motion.button 
                    type="button" 
                    whileHover={{
                        backgroundColor: '#fcfffc',
                        color: '#000011'
                    }} 
                    className="w-full h-48 center relative transition duration-500 ease-in-out text-transparent">
                        <div className="absolute h-full w-full thumbnail-container top-0 left-0 overflow-hidden -z-1">
                            <Image 
                                src={urlFor(thumbnail.asset).url()} 
                                width={560} 
                                height={315} 
                                layout="responsive" 
                                alt={title} 
                                className="hover:opacity-30 transition duration-500 ease-in-out hover:cursor-pointer" />
                        </div>
                        <h4 className="absolute left-4 top-1/2 text-3xl">{title}</h4>
                </motion.button>
            )}
            {isPlaying && (
                <div className="py-2 px-8 w-full bg-gray-100 flex justify-between items-center transition-all ease-in-out shadow">
                    {/* <PlayIcon currentColor={'#000011'} size={20} onClick={playVideo}/> */}
                    <h4 className="text-xl text-black">{title}</h4>
                    <span 
                        className="text-black text-2xl hover:cursor-pointer hover:text-gray-500" 
                        onClick={() => setIsPlaying(false)}>
                            X
                    </span>
                </div>
            )}
            </motion.div>
        </VideoWrapper>
    )
}

const VideoWrapper = styled.div`

    &.full-size-video {
        position: initial;
        max-width: 90vw;
        padding: 8rem auto;
        background-color: black;

        & > iframe {
            max-width: 100%;
            margin: 0 auto;
        }
    }
`