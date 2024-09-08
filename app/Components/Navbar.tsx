"use client";

import { AlignJustify, X, Home, ServerIcon, Info, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { Nunito } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

const nunito = Nunito({
    subsets: ['latin'],
    weight: ["400", "500"]
});

export default function Navbar() {
    const [navClicked, setNavClicked] = useState<boolean>(false);
    const path = usePathname();
    return (
        <nav className={`bg-gray-100 text-gray-900 shadow-sm ${nunito.className} fixed top-0 left-0 right-0 z-50`}>
            <div className="px-4 lg:px-8 sm:px-6 mx-auto max-w-7xl">
                <div className="flex justify-between md:justify-center items-center h-24">
                    {/* Left side navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="/" className={`hover:text-sky-600 text-md ${path === '/' ? 'text-sky-600' : ''}`}>Home</a>
                        <a href="#services" className={`hover:text-sky-600 text-md ${path === '/services' ? 'text-sky-600' : ''}`}>Services</a>
                    </div>

                    {/* Center Logo */}
                    <div className="h-48 w-48 mx-4 rounded-full flex justify-center items-center">
                        <a href="/" className="w-full h-full">
                            <img src="/logo.png" alt="gst suvidha kendra" className="h-full object-contain" />
                        </a>
                    </div>

                    {/* Right Side Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#about" className={`hover:text-sky-600 text-md ${path === '#about' ? 'text-sky-600' : ''}`}>About</a>
                        <a href="#contact" className={`hover:text-sky-600 text-md ${path === '/contact' ? 'text-sky-600' : ''}`}>Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-800"
                        onClick={() => setNavClicked(!navClicked)}
                    >
                        {navClicked ? <X className="w-6 h-6 hover:text-sky-600 mr-10" /> : <AlignJustify className="w-6 h-6 hover:text-sky-600 mr-10" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden p-6 ${navClicked ? 'flex flex-col justify-center ' : 'hidden'} ${nunito.className}`}>
                    <Link href="/" className={`ml-12 ${path === '/' ? 'text-sky-600' : ''}`}>
                        <div className="flex space-x-3 hover:text-sky-600 text-md my-2">
                            <Home className="w-6 h-6" />
                            <span>Home</span>
                        </div>
                    </Link>
                    <Link href="#services" className={`ml-12 ${path === '/services' ? 'text-sky-600' : ''}`}>
                        <div className="flex space-x-3 hover:text-sky-600 text-md my-2">
                            <ServerIcon className="w-6 h-6" />
                            <span>Services</span>
                        </div>
                    </Link>
                    <Link href="#about" className={`ml-12 ${path === '#about' ? 'text-sky-600' : ''}`}>
                        <div className="flex space-x-3 hover:text-sky-600 text-md my-2">
                            <Info className="w-6 h-6" />
                            <span>About</span>
                        </div>
                    </Link>
                    <Link href="#contact" className={`ml-12 ${path === '#contact' ? 'text-sky-600' : ''}`}>
                        <div className="flex space-x-3 hover:text-sky-600 text-md my-2">
                            <Mail className="w-6 h-6" />
                            <span>Contact</span>
                        </div>
                    </Link>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 mt-2"></div>
        </nav>
    );
}
