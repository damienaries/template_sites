import {useState} from 'react';
import Layout from '../components/Layout';
import HomeBanner from '../components/HomeBanner';
import Work from '../components/Work';
import About from '../components/About';
import { indexPageQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.js';

export default function Home({ videos }) {
  const [aboutOpen, setAboutOpen] = useState(false);

  const showWork = () => {
   setAboutOpen(false);   
  }

  const showAbout = () => {
      setAboutOpen(!aboutOpen)
  }

  return (
    <div className="main overflow-x-hidden">
      <HomeBanner showWork={showWork} showAbout={showAbout} />
      <section className="relative">
        <Work videos={videos} />
        <About aboutOpen={aboutOpen} />
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

  return {
    props: {
      videos
    }
  }
}