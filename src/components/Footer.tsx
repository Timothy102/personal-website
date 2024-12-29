import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => (
  <>
    <footer className="flex flex-col px-8 lg:px-24 pb-5 lg:pb-10 items-start">
      <div className="flex flex-col gap-y-4 w-full">
        <h2 className="font-aeonik-bold text-xl">Find and follow me over here</h2>
        
        <Link href="https://twitter.com/cvetko_tim" className="hover:text-blue-500 transition-all duration-300">
          Twitter
        </Link>

        <Link href="#" className="hover:text-red-500 transition-all duration-300">
          Youtube
        </Link>

        <Link href="#" className="hover:text-blue-700 transition-all duration-300">
          LinkedIn
        </Link>

        <Link href="#" className="hover:text-pink-500 transition-all duration-300">
          Instagram
        </Link>

        <p className="mt-8 text-sm text-gray-400">©timcvetko 2025</p>
      </div>
    </footer>
  </>
)
export default Footer