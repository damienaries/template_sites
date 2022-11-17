import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import VideoPlayer from "./VideoPlayer";

export default function Visuals({ visuals }){
    const visualRef = useRef(null);
    const isInView = useInView(visualRef, { once: true });
    return (
        <motion.aside 
            ref={visualRef}
            style={{ 
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.72, 0.37, 0, 0.76) 0.2s"
            }}
            className="hidden lg:flex flex-col items-center justify-start w-1/4 mt-0">
            {visuals && visuals.map((visual, idx) => (
                <div className="visual max-w-full mb-8" key={idx}>
                    <VideoPlayer 
                        url={`https://www.youtube-nocookie.com/embed/${visual.id}`} 
                        controls={false} 
                        autoplay={useInView}
                        loop={true} />
                </div>
            ))}
        </motion.aside>
    )
}