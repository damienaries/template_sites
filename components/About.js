export default function About ({aboutOpen, author}) {
    const {featuredOn, about} = author;

    const positioning = aboutOpen ? 'left-0' : 'left-full';

    return (
        <section className={`absolute z-20 top-0 h-fit bg-white w-full mx-1 shadow-sm rounded p-4 lg:p8 ${positioning}`}>
            <h2 className="font-serif text-gray-500 uppercase tracking-wider text-2xl">
                How it Happens
            </h2>
            <p className="text-black tracking-wide mt-4 lg:text-xl">
                {about}
            </p>
            <section className="mt-4">
                <h6 className="my-4">See Me Featured Here</h6>
                <ul>
                {featuredOn && featuredOn.map((feature, idx) => (
                    <a href={feature.url} target="_blank" key={idx}>
                        <li className="my-4 text-green-300 hover:underline hover:tracking-wider cursor-pointer">{feature.title}</li>
                    </a>
                ))}
                </ul>
            </section>
        </section>
    )
}
