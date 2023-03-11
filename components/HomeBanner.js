import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { author } from "../backend/data";
import Nav from "../components/Nav";

export default function HomeBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200%)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.72, 0.37, 0, 0.76) 0s",
      }}
      className="hero w-full h-1/4 bg-gray-100 shadow-lg relative mb-6 md:mb-12"
    >
      <div className="hero-content w-full lg:w-1/2 text-left p-6">
        <Link href="/">
          <h1 className="text-3xl md:text-5xl text-black font-semibold font-extrabold tracking-widest font-sans uppercase mt-6">
            {author.name}
          </h1>
        </Link>

        <h4 className="uppercase text-sm">{author.services.join(" - ")}</h4>
        <Nav />
      </div>
    </motion.section>
  );
}
