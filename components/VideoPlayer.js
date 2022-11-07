import ReactPlayer from "react-player";

export default function VideoPlayer({ title, url }){
    return (
        <div className="player-wrapper">
            <ReactPlayer 
                url={url} 
                playing={true} 
                controls={true}
                width={560}
                height={315}
                volume={.7}
                playsinline={true}
            />
        </div>
    )
        
}