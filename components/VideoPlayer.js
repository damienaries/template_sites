import ReactPlayer from "react-player";

export default function VideoPlayer({ title, url }){
    console.log(title, url);

    <div className="video-container border border-green-300 h-24">
        <h4 className="text-black">{title}</h4>
        {/* <ReactPlayer 
            url={url} 
            playing={false} 
            controls={true}
            width={400}
            height={100} 
            volume={.7}
            playsinline={true}
        /> */}
    </div>
}