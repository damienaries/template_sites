import { useState } from "react";
import styled from "@emotion/styled";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

// expand and shrink vid size on play/not play
// hover overlay
// custom animations and transitions with styled

export default function LazyVideoPlayer({ video }){
    const { id, service, thumbnail, title } = video;
    const [showVideo, setShowVideo] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setShowVideo(!showVideo);
        setIsPlaying(!isPlaying);
    }
    
    return (
        <VideoWrapper className={`w-full ${showVideo ? 'full-size-video' : ''}`} 
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
            <AnimatedButton 
                type="button"  
                className="animated-btn w-full h-44 md:h-64 lg:h-80 center relative transition duration-500 ease-in-out text-transparent hover:text-white">
                    <div className="absolute h-full w-full thumbnail-container top-0 left-0 overflow-hidden -z-1">
                        <Image 
                            src={urlFor(thumbnail.asset).url()} 
                            width={560} 
                            height={315} 
                            layout="responsive" 
                            alt={title} />
                    </div>
                    <h4 className="absolute left-4 top-4 text-xl">{title}</h4>
            </AnimatedButton>
        )}
        </VideoWrapper>
    )
}

const VideoWrapper = styled.div`
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }

    &.full-size-video {
        & > iframe {
            max-width: 100%;
            margin: 0 auto;
        }
    }
`

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