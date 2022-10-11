import ReactPlayer from "react-player/vimeo";
import { getClient, usePreviewSubscription } from "../lib/sanity";
import { groq } from "next-sanity";

export default function HeroBackground(props) {
    const { video } = props;
    console.log(video);

    const { data: videoData } = usePreviewSubscription(query, {
        initialData: video,
    })

    const bgStyles = {
        width: '100%',
        height: '50vh',
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='12' height='12' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(228)'%3E%3Crect width='100%25' height='100%25' fill='rgba(247, 250, 252,1)'/%3E%3Cpath d='M0 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5zM0 69.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z' fill='rgba(237, 242, 247,1)'/%3E%3Cpath d='M20 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z' fill='rgba(254, 178, 178,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`
    }

    return (
        <>
        <div style={bgStyles}></div>
        {/* <ReactPlayer 
            url={videoData.url}
            muted={true}
            playing={true}
            loop={true}
            style={bgStyles}
            width="100vh"
            height="50vh"
            /> */}
        </>
    )
}

const query = groq`*[_type == video]`

export async function getStaticProps({ params, preview = false }) {
    const video = await getClient(preview).fetch(query);

    return {
      props: {
        video,
        preview
      } 
    }
  }
