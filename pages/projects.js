import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "../backend/data";
import Layout from "../components/Layout";
/************************************
 * TODO build page
 * Add slug as id for navigation target and seo
 * Each project a row, horizontal scroll
 *
 ************************************/

export default function Projects() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const { photo } = projects;
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: true });

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    pageLoaded && (
      <motion.section
        ref={projectRef}
        style={{
          transform: pageLoaded ? "none" : "translateX(-200%)",
          transition: "all 1.5s cubic-bezier(0.72, 0.37, 0, 0.76)",
        }}
        className="bg-white w-full mx-1 shadow-sm rounded p-4 lg:p-8"
      >
        {photo &&
          photo.map((photo, idx) => (
            <div
              className="w-full mx-auto my-4 shadow flex items-center justify-start overflow-x-scroll overflow-y-none"
              style={{ height: "600px" }}
              key={idx}
              id={photo.slug}
            >
              <div style={{ height: "100%", width: "400px" }}>
                <Image
                  src={photo.url}
                  width={100}
                  height={150}
                  layout="responsive"
                  alt={photo.title}
                  priority={true}
                />
              </div>
              {/* for each photo in photo.images -> image */}
            </div>
          ))}
      </motion.section>
    )
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
