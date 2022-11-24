import { useRef, useEffect, useState } from 'react';
import { stopMotionQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.js';
import Layout from '../components/Layout';
import { motion, useInView } from 'framer-motion';

export default function StopMotion({ stopMotions }){
    const [pageLoaded, setPageLoaded] = useState(false);
    const stopMotionRef = useRef(null);
    const isInView = useInView(stopMotionRef, { once: true });

    useEffect(() => {
      setPageLoaded(true);
    }, [])

    return pageLoaded && (
        <section  
        ref={stopMotionRef}
          style={{
            transform: pageLoaded ? 'none' : 'translateX(-200%)',
            transition: "all 1.5s cubic-bezier(0.72, 0.37, 0, 0.76)"
          }}
          className="bg-white w-full mx-1 shadow-sm rounded p-4 lg:p-8 flex flex-col :flex-row">
          {stopMotions && stopMotions.map((sm, idx) => (
            <div 
              className="h-full w-11/12 mx-auto my-4 shadow" key={idx}>
              <iframe src={`https://www.youtube.com/embed/${sm.id}?ecver=1&amp;iv_load_policy=3&amp;loop=1&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1`} 
                  width="100%" 
                  height="315" 
                  frameBorder="0">
              </iframe>
            </div>
          ))}
        </section>
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