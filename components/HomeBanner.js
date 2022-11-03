export default function HomeBanner ({ showWork, showAbout }) {
   
    return (
        <section className="hero w-full h-1/4 bg-gray-100 relative">
            <div className="hero-content w-full lg:w-1/2 text-left p-6">
                <h1 className="text-4xl md:text-6xl xl:text-7xl text-black font-semibold font-extrabold tracking-widest font-sans uppercase mt-6">
                    Alex Budman
                </h1>
                <h4 className="uppercase text-sm md:text-base">
                    Director - Videographer - Editor - Consultant
                </h4>
                <div className="mt-8 flex">
                    <h4 className="mr-4 tracking-widest text-xl hover:text-gray-600 hover:underline cursor-pointer" onClick={showWork}>Work</h4>
                    <h4 className="mr-4 tracking-widest text-xl hover:text-gray-600 hover:underline cursor-pointer" onClick={showAbout}>About</h4>
                </div>  
            </div>
            
      </section>
    )
}