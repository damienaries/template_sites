import { useRef, useEffect, useState } from 'react';
import { stopMotionQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.js';
import Layout from '../components/Layout';
import VideoPlayer from '../components/VideoPlayer';
import { motion, useInView } from 'framer-motion';

export default function StopMotion({ stopMotions }){
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
      setPageLoaded(true);
    }, [])

    const motionRef = useRef(null);
    const isInView = useInView(motionRef, { once: true });

    return pageLoaded && stopMotions && (
        <motion.section 
            ref={motionRef}
            style={{ 
            transform: isInView ? "none" : "translateX(-100%)",
            opacity: isInView ? 1 : 0,
            transition: "all .5s cubic-bezier(0.72, 0.37, 0, 0.76)" 
        }} 
        className="bg-white w-full mx-1 shadow-sm rounded p-4 lg:p-8 flex flex-col :flex-row">
          {stopMotions && stopMotions.map((sm, idx) => (
            <div className="h-full md:h-2/3 w-10/12 mx-auto my-4" key={idx}>
              <VideoPlayer  
                url={`https://www.youtube-nocookie.com/embed/${sm.id}`}
                controls={false}
                autoplay={isInView}
                loop={false}/>
            </div>
          ))}
        </motion.section>
    )
}

StopMotion.getLayout = function getLayout(page){
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

  export async function getStaticProps(){
    const stopMotions = await sanityClient.fetch(stopMotionQuery)
    
    return {
      props: {
        stopMotions
      }
    }
  }