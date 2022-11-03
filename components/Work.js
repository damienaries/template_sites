import VideoPlayer from './VideoPlayer';

export default function Work({ videos }){
    return (
        <div className="w-full md:w-11/12 my-8 mx-auto bg-white grid grid-cols-1 md:grid-cols-2">
            {
                videos && videos.map(v => (
                    <div className="h-80 w-full overflow-hidden hover:bg-gray-100/20" key={v.title}>
                        <h4 className="hidden m-4 text-green-100 capitalize text-3xl tracking-wide absolute text-wrap">{v.title}</h4>
                        <VideoPlayer title={v.title} url={v.url} />
                    </div>
                ))
            }
        </div>
    )
}