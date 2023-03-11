import { useEffect, useState } from "react";
import { projects } from "../backend/data";
import Layout from "../components/Layout";
import Work from "../components/Work";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const { video, photo } = projects;

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return pageLoaded && <Work videos={video} photos={photo} />;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
