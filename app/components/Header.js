import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/assets/logo.svg" alt="LWS Blogify" width={48} height={48} className="h-12 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Get started
          </a>
        </nav>

        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
