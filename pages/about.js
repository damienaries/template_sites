import styled from "@emotion/styled";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { author } from "../backend/data";
import Layout from "../components/Layout";
import authorImg from "../public/assets/author-pic.jpg";

export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true });

  const StyledAbout = styled.div`
    height: 100%;
    width: 100%;
    min-height: 600px;
    padding: 2rem;
  `;

  return (
    author && (
      <motion.section
        ref={aboutRef}
        className="h-fit w-full md:w-11/12 mx-auto shadow-lg rounded"
        style={{
          transform: isInView ? "none" : "translateX(100%)",
          opacity: isInView ? 1 : 0,
          transition: "all .5s cubic-bezier(0.72, 0.37, 0, 0.76)",
          backgroundImage: `linear-gradient(30deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${authorImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          width: "100%",
          height: "100%",
        }}
      >
        <StyledAbout>
          <h2 className="font-serif text-gray-500 uppercase tracking-wider text-2xl flex justify-between items-center">
            How it Happens
          </h2>
          <p className="text-gray-700 tracking-wide mt-4 lg:text-xl">
            {`Hey I\'m ${author.name}, ${author.services[0]} based in the US. 
            ${author.bio}`}
          </p>
          <section className="mt-12 text-gray-700 text-xl">
            <h6 className="my-4">See Me Featured Here</h6>
            <ul>
              {author.featuredOn &&
                author.featuredOn.map((feature, idx) => (
                  <a
                    href={`https://${feature}.com`}
                    target="_blank"
                    rel="noreferrer"
                    key={idx}
                  >
                    <li className="my-4 text-xl text-green-300 tracking-wider hover:underline cursor-pointer transition-all duration-500 ease-in-out">
                      {feature}
                    </li>
                  </a>
                ))}
            </ul>
          </section>
        </StyledAbout>
      </motion.section>
    )
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
