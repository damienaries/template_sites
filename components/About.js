export default function About ({aboutOpen, author}) {
    const {title, featuredOn, about} = author;

    const positioning = aboutOpen ? 'left-0' : 'left-full';

    return (
        <section className={`absolute top-2 h-fit bg-white w-full border border-green-300 p-4 lg:p8 ${positioning}`}>
            <h2 className="font-serif text-gray-500 uppercase tracking-wider text-2xl">
                How it Happens
            </h2>
            <p className="text-black tracking-wide mt-4 lg:text-xl">
                {about}
            </p>
            <section className="mt-4">
                <h6 className="my-4">See Me Featured Here</h6>
                <ul>
                {featuredOn && featuredOn.map(r => (
                    <li className="my-2 text-green-300 hover:underline cursor-pointer" key={r}>{r}</li>
                ))}
                </ul>
            </section>
        </section>
    )
}
