"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub, FaLinkedin, FaInstagram, FaMedium, FaMoon, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "next-themes" // Add this import
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"

export const navLinks = [
  {
    text: "ABOUT",
    link: "/about",
  },
  {
    text: "WRITING",
    link: "/writing",
  },
  {
    text: "READING",
    link: "/reading",
  },
];

export const socialLinks = [
  {
    icon: FaXTwitter,
    link: "https://twitter.com/cvetko_tim",
    name: "Twitter",
  },
  {
    icon: FaGithub,
    link: "https://github.com/Timothy102",
    name: "GitHub",
  },
  {
    icon: FaMedium,
    link: "https://timc102.medium.com",
    name: "GitHub",
  },
  {
    icon: FaLinkedin,
    link: "https://linkedin.com/in/timc9",
    name: "LinkedIn",
  },
  {
    icon: FaInstagram,
    link: "https://instagram.com/tim_cvetko",
    name: "Instagram",
  },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Debug log
    console.log('Current theme:', theme);
    console.log('Resolved theme:', resolvedTheme);
    console.log('Document classes:', document.documentElement.classList);
  }, [theme, resolvedTheme]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Force the class update
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed w-full h-full pointer-events-none">
      <div className="w-full h-full max-w-[1400px] mx-auto relative">
        {/* Logo and Theme Toggle */}
        <div className="fixed top-8 left-8 flex flex-col row items-center gap-4 pointer-events-auto">
          <Link href="/">
            <p className="font-aeonik-bold text-[21px] md:text-[18px] tracking-tighter dark:text-white text-black hover:text-blue-500 transition-colors">
              tim c
            </p>
          </Link>
          <button
            onClick={toggleTheme}
            className="text-[18px] dark:text-white text-black hover:text-blue-500 transition-colors"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
        </div>

        {isMobile ? (
          <div className="fixed top-8 right-8 pointer-events-auto">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="dark:text-white text-black">
                  <RxHamburgerMenu className="text-[21px] cursor-pointer" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="dark:bg-black bg-white border-none">
                <nav className="flex flex-col gap-8 pt-20">
                  {navLinks.map((link) => (
                    <Link
                      key={link.text}
                      href={link.link}
                      className="text-[32px] dark:text-white text-black hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </Link>
                  ))}
                  <div className="flex flex-row space-x-6 pt-6">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-white text-black text-2xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <social.icon />
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <>
            {/* Main Navigation - Top Right */}
          <nav className="fixed top-8 right-8 flex flex-col gap-6 items-end pointer-events-auto">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.link}
                className="dark:text-white text-black text-sm font-aeonik-bold tracking-wide hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-200" // Updated styles
              >
                {link.text}
              </Link>
            ))}
          </nav>
            
            {/* Social Links - Bottom Right */}
            <div className="fixed bottom-8 right-8 flex flex-col gap-6 items-end pointer-events-auto">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-[#ffffff80] text-[#00000080] hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;