import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function HomeBanner ({ showWork, showAbout }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section 
            ref={ref}
            style={{ 
                transform: isInView ? 'none' : 'translateY(200%)',
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.72, 0.37, 0, 0.76) 0s"
            }}
        className="hero w-full h-1/4 bg-gray-100 shadow-lg relative mb-12">
            <div className="hero-content w-full lg:w-1/2 text-left p-6">
                <h1 className="text-4xl md:text-6xl xl:text-7xl text-black font-semibold font-extrabold tracking-widest font-sans uppercase mt-6">
                    Alex Budman
                </h1>
                <h4 className="uppercase text-sm md:text-base">
                    Director - Videographer - Editor - Consultant
                </h4>
                <div className="mt-8 flex items-center">
                    <h4 className="nav-link mr-6 tracking-wider text-md md:text-xl hover:text-gray-600 hover:underline cursor-pointer" onClick={showWork}>Video</h4>
                    <h4 className="nav-link mr-6 tracking-wider text-center text-md md:text-xl hover:text-gray-600 hover:underline cursor-pointer">Stop Motion</h4>
                    <h4 className="nav-link tracking-wider text-md md:text-xl hover:text-gray-600 hover:underline cursor-pointer" onClick={showAbout}>About</h4>
                </div>  
            </div>
            
      </motion.section>
    )
}