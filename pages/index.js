import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import HomeBanner from '../components/HomeBanner';
import Work from '../components/Work';
import About from '../components/About';
import StopMotion from '../components/StopMotion';
import { videoQuery, authorQuery, visualsQuery, stopMotionQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.js';

export default function Home({ videos, author, visuals, stopMotions }) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, [])

  const showWork = () => setAboutOpen(false);
  const showAbout = () => setAboutOpen(!aboutOpen);

  return pageLoaded && (
    <div className="main overflow-x-hidden">
      <HomeBanner showWork={showWork} showAbout={showAbout} />
      <section className="relative">
        <Work videos={videos} visuals={visuals} />
        {/* <StopMotion stopMotions={stopMotions} /> */}
        <About aboutOpen={aboutOpen} author={author} />
      </section>
    </div>  
  )
}

Home.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps(){
  const videos = await sanityClient.fetch(videoQuery);
  const author = await sanityClient.fetch(authorQuery);
  const visuals = await sanityClient.fetch(visualsQuery);
  const stopMotions = await sanityClient.fetch(stopMotionQuery)
  
  return {
    props: {
      videos,
      author,
      visuals,
      stopMotions
    }
  }
}