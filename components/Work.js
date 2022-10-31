import VideoPlayer from './VideoPlayer';

export default function Work({ videos }){
    return (
        <div className="absolute w-full md:w-11/12 mx-auto bg-white grid grid-cols-1 md:grid-cols-2">
            {
                videos && videos.map(v => (
                    <VideoPlayer title={v.title} url={v.url}  key={v.title}/>
                ))
            }
        </div>
    )
}