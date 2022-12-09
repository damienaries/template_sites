import ReactPlayer from "react-player";

export default function VideoPlayer({ 
    url, 
    controls = false, 
    autoplay = false, 
    loop = false 
  }){
    return (
        <div className="player-wrapper">
            <ReactPlayer 
                className="max-w-full"
                url={url} 
                playing={autoplay} 
                controls={controls}
                volume={.6}
                playsinline={true}
                loop={loop}
            />
        </div>
    )    
}