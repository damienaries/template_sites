import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({ url }){
    return (
        <div className="player-wrapper">
            <ReactPlayer 
                className="max-w-full"
                url={url} 
                playing={true} 
                controls={true}
                volume={.7}
                playsinline={true}
            />
        </div>
    )    
}