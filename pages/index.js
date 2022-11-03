import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import HomeBanner from '../components/HomeBanner';
import Work from '../components/Work';
import About from '../components/About';
import { indexPageQuery, authorQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.js';

export default function Home({ videos, author }) {
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
        <Work videos={videos} />
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
  const videos = await sanityClient.fetch(indexPageQuery);
  const author = await sanityClient.fetch(authorQuery);
  
  return {
    props: {
      videos,
      author
    }
  }
}