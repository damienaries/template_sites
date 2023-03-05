import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Visuals({ photos }) {
  const visualRef = useRef(null);
  const isInView = useInView(visualRef, { once: true });

  return (
    <aside
      ref={visualRef}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 5s cubic-bezier(0.72, 0.37, 0, 0.76)",
      }}
      className="hidden lg:flex flex-col items-center justify-start w-1/4 mt-0 ml-4"
    >
      {photos &&
        photos.map((photo, idx) => (
          <div
            className="max-w-full mb-8 h-72 overflow-hidden w-full"
            key={idx}
          >
            <Image
              src={photo.url}
              width={100}
              height={150}
              layout="responsive"
              alt={photo.title}
              priority={true}
              className="hover:scale-110 transition duration-500 ease-in-out hover:cursor-pointer"
            />
          </div>
        ))}
    </aside>
  );
}
