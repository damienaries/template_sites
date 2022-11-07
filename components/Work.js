import { useState } from 'react';
import LazyVideoPlayer from './LazyVideoPlayer';

// animate component loading 

export default function Work({ videos, visuals }){
    const [content] = useState([...videos, ...visuals]);
    return (
        <div className="w-full md:w-11/12 px-4 mt-8 mb-20 mx-auto bg-white grid grid-cols-1 md:grid-cols-2">
            {
                content && content.map((video, idx) => (
                    <LazyVideoPlayer video={video} key={idx}/>
                ))
            }
        </div>  
    )
}