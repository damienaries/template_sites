import ReactPlayer from "react-player";

export default function VideoPlayer({ title, url }){
    return (
        <div className="player-wrapper">
            <ReactPlayer 
                url={url} 
                playing={false} 
                controls={false}
                width={800}
                height={500}
                volume={.7}
                playsinline={true}
            />
        </div>
    )
        
}