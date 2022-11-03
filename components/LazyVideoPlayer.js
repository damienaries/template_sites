import { useState } from "react";

// todo cache videos
// custom animations and transitions with styled?

export default function LazyVideoPlayer({ title, url }){
    const [showVideo, setShowVideo] = useState(false);
    
    return showVideo ? (
        <iframe
            width={560}
            height={315}
            src={url}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
            className="aspect-[16/9] h-full w-full p-0 border border-gray-500"
        />
    ) : (
        <button 
            type="button" 
            onClick={() => setShowVideo(true)} 
            className="border border-blue-500 h-36 md:h-48 lg:h-80 center hover:bg-gray-500 relative transition duration-500 ease-in-out">
                <h4 className="absolute left-2 top-2 hidden">{title}</h4>
                <div className="px-4 py-2 rounded-full bg-green-100 shadow center">
                    Play {title}
                </div>
        </button>
    )
}