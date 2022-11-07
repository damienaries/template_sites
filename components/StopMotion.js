export default function StopMotion({ stopMotions }){
    console.log(stopMotions)

    return (
        <section className={`absolute top-0 bg-white w-full mx-1 shadow-sm rounded p-4 lg:p8`}>
            <h2 className="font-serif text-gray-500 uppercase tracking-wider text-2xl">
                A few examples of my stop motion work
            </h2>
            <section className="mt-4">
                {stopMotions && stopMotions.map((sm, idx) => (
                    <div className="h-36-w 20">
                        <iframe
                        width={560}
                        height={315}
                        src={sm.url}
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={sm.url}
                        className="aspect-[16/9] h-full w-full p-0 border border-gray-500"
                    />
                    </div>
                ))}
            </section>
        </section>
    )
}