import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "../components/Layout";

// image background or other visual?

export default function About() {
  const author = { featuredOn: ["BBC"], about: "my name is Billy" };
  const { featuredOn, about } = author;
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true });

  return (
    author && (
      <motion.section
        ref={aboutRef}
        className="h-fit w-full md:w-11/12 mx-auto shadow-lg bg-white rounded p-8"
        style={{
          transform: isInView ? "none" : "translateX(100%)",
          opacity: isInView ? 1 : 0,
          transition: "all .5s cubic-bezier(0.72, 0.37, 0, 0.76)",
        }}
      >
        <h2 className="font-serif text-gray-500 uppercase tracking-wider text-2xl flex justify-between items-center">
          How it Happens
        </h2>
        <p className="text-black tracking-wide mt-4 lg:text-xl">{about}</p>
        <section className="mt-12 text-black text-xl">
          <h6 className="my-4">See Me Featured Here</h6>
          <ul>
            {featuredOn &&
              featuredOn.map((feature, idx) => (
                <a
                  href={feature.url}
                  target="_blank"
                  rel="noreferrer"
                  key={idx}
                >
                  <li className="my-4 text-xl text-green-300 tracking-wider hover:underline cursor-pointer transition-all duration-500 ease-in-out">
                    {feature.title}
                  </li>
                </a>
              ))}
          </ul>
        </section>
      </motion.section>
    )
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
