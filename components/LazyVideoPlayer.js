import { useState } from "react";
import PlayIcon from '../components/icons/PlayIcon';
import styled from "@emotion/styled";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

// fix videos in responsive frame
// expand and shrink vid size on play/not play
// todo cache videos
// custom animations and transitions with styled?

export default function LazyVideoPlayer({ video }){
    const { id, service, thumbnail, title } = video;
    const [showVideo, setShowVideo] = useState(false);
    
    return (
        <div className="video-wrapper w-full" 
            onClick={() => setShowVideo(!showVideo)}>
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
            <AnimatedButton 
                type="button"  
                className="animated-btn w-full h-48 md:h-64 lg:h-80 center hover:bg-gray-500 relative transition duration-500 ease-in-out text-transparent hover:text-white">
                    <div className="absolute h-full w-full thumbnail-container top-0 left-0 overflow-hidden">
                        <Image src={urlFor(thumbnail.asset).url()} width={560} height={315} layout="responsive" alt={title} />
                    </div>
                    <h4 className="absolute left-2 top-2">{title}</h4>
                    <div className="p-3 rounded-full bg-white shadow center z-10">
                        <PlayIcon currentColor="#c5dec5" size="30"/>
                    </div>
            </AnimatedButton>
        )}
        </div>
    )
}

const AnimatedButton = styled.button`
    @keyframes load {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .animated-btn {
        animation: load 2s ease-in-out;
        background-color: rgba(0, 0, 0, .2);
    }
`