import Link from "next/link";

export default function Nav() {
  return (
    <div className="mt-8 flex items-center">
      <Link href="/">
        <a className="nav-link mr-6 tracking-wider text-md md:text-xl hover:text-gray-600 hover:underline cursor-pointer">
          Video
        </a>
      </Link>
      <Link href="/stop-motion">
        <a className="nav-link mr-6 tracking-wider text-md md:text-xl hover:text-gray-600 hover:underline cursor-pointer">
          Projects
        </a>
      </Link>
      <Link href="/about">
        <a className="nav-link mr-6 tracking-wider text-md md:text-xl hover:text-gray-600 hover:underline cursor-pointer">
          About
        </a>
      </Link>
    </div>
  );
}
