import Link from "next/link";
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter();

    return (
        <header className="w-full py-6 px-8 bg-transparent flex justify-between items-center">
            <h1 className="uppercase font-semibold font-serif tracking-wider text-gray-500 cursor-pointer" onClick={() => router.push('/')}>Logo</h1>
            <nav className="flex justify-evenly items-center w-1/4">
                <Link href="/work">
                    <a className="text-gray-900 hover:text-green-300 pointer">Videos</a>
                </Link>
                <Link href="/about">
                    <a className="text-gray-900 hover:text-green-300 pointer">About</a>
                </Link>
                <a className="text-gray-900 hover:text-green-300 pointer" href="https://www.instagram.com" target="_blank">IG</a> {/* todo get IG icon and link to author's profile */}
                <a className="text-gray-900 hover:text-green-300 pointer" href="https://www.vimeo.com" target="_blank">Vimeo</a> {/* todo get icon and link to author's profile */}
            </nav>
        </header>
    )
}

export default Navbar;