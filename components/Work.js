import { useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import LazyVideoPlayer from './LazyVideoPlayer';
import Visuals from './Visuals';


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
            {visuals && <Visuals visuals={visuals} />}
        </div>
        
    )
}