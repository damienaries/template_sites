import VideoPlayer from './VideoPlayer';
import LazyVideoPlayer from './LazyVideoPlayer';

// TODO grab thumbnail for each vid and add to sanity
// animate component loading 

export default function Work({ videos }){

    return (
        <div className="w-full md:w-11/12 px-4 my-8 mx-auto bg-white grid grid-cols-1 md:grid-cols-2">
            {
                videos && videos.map(v => (
                    <LazyVideoPlayer title={v.title} url={v.url} key={v.title}/>
                ))
            }
        </div>  
    )
}