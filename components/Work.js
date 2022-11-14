import { useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import LazyVideoPlayer from './LazyVideoPlayer';


export default function Work({ videos, visuals }){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <div className="flex w-full mt-6 mb-20">
            <div
                ref={ref} 
                className="w-full md:w-11/12 px-4 mx-auto bg-white grid grid-cols-1 md:grid-cols-2" 
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.72, 0.37, 0, 0.76) 1s"
                }}>
                    {
                        videos && videos.map((video, idx) => (
                            <LazyVideoPlayer video={video} key={idx}/>
                        ))
                    }
            </div> 
            <aside className="hidden lg:flex flex-col items-center justify-start w-1/4">
                {visuals && visuals.map(visual => (
                    <div className="visual">
                        <iframe 
                            allowFullScreen="allowFullScreen" 
                            src={`${visual.url}?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp`} 
                            allowtransparency="true" 
                            frameBorder="0">
                        </iframe>
                    </div>
                ))}
            </aside>
        </div>
        
    )
}