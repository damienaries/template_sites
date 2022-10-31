export default function About ({aboutOpen}) {

    const positioning = aboutOpen ? 'left-0' : 'left-full';

    return (
        <section className={`absolute top-2 h-fit bg-white w-full border border-green-300 p-4 lg:p8 ${positioning}`}>
            <h2 className="font-serif text-gray-500 uppercase tracking-wider text-2xl">
                How it Happens
            </h2>
            <p className="text-black tracking-wide mt-4 lg:text-xl">
            Hi! My name is Alex Budman and I am a one woman show. I shoot, direct, edit and produce shoots.
            </p>
            <section className="mt-4">
                <h6 className="my-4">See my stuff Featured here</h6>
                <ul>
                    {/* for links in featured work */}
                    <li className="my-2 text-green-300 hover:underline cursor-pointer">Feature 1</li>
                    <li className="my-2 text-green-300 hover:underline cursor-pointer">Feature 2</li>
                    <li className="my-2 text-green-300 hover:underline cursor-pointer">Feature 3</li>
                </ul>
            </section>
        </section>
    )
}