import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Visuals({ photos }) {
  const visualRef = useRef(null);
  const isInView = useInView(visualRef, { once: true });

  const showTitleOverlay = (slug) => {
    document.querySelector(`.${slug}`).classList.remove("hidden");
  };
  const hideTitleOverlay = (slug) => {
    document.querySelector(`.${slug}`).classList.add("hidden");
  };

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
        photos.map((photo) => (
          <Link
            href={`/projects#${photo.slug}`}
            key={photo.slug}
            class="h-fit w-fit overflow-hidden"
          >
            <div
              className="max-w-full mb-8 h-72 overflow-hidden w-full relative cursor-pointer transition-all duration-500 shadow"
              key={photo.slug}
              onMouseEnter={() => showTitleOverlay(photo.slug)}
              onMouseLeave={() => hideTitleOverlay(photo.slug)}
            >
              <Image
                src={photo.url}
                width={100}
                height={150}
                layout="responsive"
                alt={photo.title}
                priority={true}
                className=" cursor-pointer"
              />
              <div
                className={`${photo.slug} hidden w-full h-full absolute top-0 left-0 z-10 bg-white opacity-75 text-gray-900 flex flex-col items-center justify-end p-4 transition-all duration-500 ease-in-out`}
              >
                <span className="text-4xl">{photo.title}</span>
                <span className="text-xl py-4">{photo.client}</span>
                <span className="tetx-xl">{photo.date}</span>
              </div>
            </div>
          </Link>
        ))}
    </aside>
  );
}
