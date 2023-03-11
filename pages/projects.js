import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "../backend/data";
import Layout from "../components/Layout";

export default function Projects() {
  const { photo } = projects;
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
              className="min-w-full mb-12 shadow overflow-y-hidden rounded"
              key={idx}
            >
              <div
                className="w-full flex items-center justify-start "
                style={{ minHeight: "400px" }}
                id={photo.slug}
              >
                <div className="w-10/12.md:w-1/3.lg:md-w-1/4 flex flex-col md:flex-row relative">
                  <div className="title h-full p-4 w-full md:w-64 flex flex-row md:flex-col items-center md:items-start justify-evenly md:justify-start md:mb-4">
                    <span className="text-3xl">{photo.title}</span>
                    <span className="text-lg md:py-2">{photo.client}</span>
                    <span className="tetx-lg">{photo.date}</span>
                  </div>
                  <div
                    style={{ height: "350px", width: "350px" }}
                    className="shadow"
                  >
                    <Image
                      src={photo.url}
                      width={350}
                      height={350}
                      layout="responsive"
                      alt={photo.title}
                      priority={true}
                      className="rounded"
                    />
                  </div>
                </div>
                <div className="mx-8 flex items-center h-full">
                  {photo.images &&
                    photo.images.map((image, idx) => (
                      <div
                        style={{
                          width: "350px",
                          height: "350px",
                          overflow: "hidden",
                        }}
                        className="rounded shadow mx-4"
                        key={idx}
                      >
                        <div
                          style={{ height: "350px", width: "350px" }}
                          className="p-4"
                        >
                          <Image
                            src={`/assets/img/${image}.png`}
                            width={350}
                            height={350}
                            layout="responsive"
                            alt={idx}
                            priority={true}
                            className="rounded"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {photo.description && (
                <p className="py-8 px-4 hidden md:block">{photo.description}</p>
              )}
            </div>
          ))}
      </motion.section>
    )
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
