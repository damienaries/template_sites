import ReactPlayer from "react-player";

export default function VideoPlayer({ url, width, height }){
    return (
        <div className="player-wrapper">
            <ReactPlayer 
                className="max-w-full"
                url={url} 
                playing={true} 
                controls={true}
                width={width}
                height={height}
                volume={.7}
                playsinline={true}
            />
        </div>
    )    
}