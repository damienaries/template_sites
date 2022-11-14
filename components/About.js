import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


export default function About ({aboutOpen, setAboutOpen, author}) {
    const {featuredOn, about} = author;
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { once: true });

    const positioning = aboutOpen ? 'left-0' : 'left-full';

    return (
        <motion.section ref={aboutRef} className={`absolute z-20 top-0 h-fit bg-white lg:bg-white/95 w-full mx-1 shadow-lg hover:bg-white rounded p-8 ${positioning}`}
        style={{ 
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all .3s cubic-bezier(0.72, 0.37, 0, 0.76)" 
        }}>
            <h2 className="font-serif text-gray-500 uppercase tracking-wider text-2xl flex justify-between items-center">
                How it Happens
                <span className="transition-all text-2xl hover:cursor-pointer hover:rotate-180"
                onClick={() => setAboutOpen(!aboutOpen)}>X</span>
            </h2>
            <p className="text-black tracking-wide mt-4 lg:text-xl">
                {about}
            </p>
            <section className="mt-12 text-black text-xl">
                <h6 className="my-4">See Me Featured Here</h6>
                <ul>
                {featuredOn && featuredOn.map((feature, idx) => (
                    <a href={feature.url} target="_blank" key={idx}>
                        <li className="my-4 text-xl text-green-300 tracking-wider hover:underline cursor-pointer transition-all duration-500 ease-in-out">{feature.title}</li>
                    </a>
                ))}
                </ul>
            </section>
        </motion.section>
    )
}
