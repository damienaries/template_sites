import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Work from "../components/Work";

export default function Home({ videos, visuals }) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return pageLoaded && <Work videos={videos} visuals={visuals} />;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
