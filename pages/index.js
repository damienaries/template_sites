import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import Work from '../components/Work';
import { videoQuery, visualsQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.js';

export default function Home({ videos, visuals }) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, [])


  return pageLoaded && (
    <Work videos={videos} visuals={visuals} />
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
  const visuals = await sanityClient.fetch(visualsQuery);
  
  return {
    props: {
      videos,
      visuals,
    }
  }
}
