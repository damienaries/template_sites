import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import useLocalStorage  from '../hooks/useLocalStorage';
// youtube short won't autoplay -> add hover or scroll event

export default function Visuals({ visuals }){
    const visualRef = useRef(null);
    const isInView = useInView(visualRef, { once: true });

    return (
        <aside 
            ref={visualRef}
            style={{ 
                opacity: isInView ? 1 : 0,
                transition: "all 5s cubic-bezier(0.72, 0.37, 0, 0.76)"
            }}
            className="hidden lg:flex flex-col items-center justify-start w-1/4 mt-0 ml-4">
            {visuals && visuals.map((visual, idx) => (
                <div className="visual max-w-full mb-8" key={idx}>
                    <iframe src={`https://www.youtube.com/embed/${visual.id}?ecver=1&amp;iv_load_policy=3&amp;loop=1&amp;rel=0&amp;showinfo=0&amp;autohide=1&amp&secure`} 
                        width="100%" 
                        height="315" 
                        frameBorder="0">
                    </iframe>
                </div>
            ))}
        </aside>
    )
}