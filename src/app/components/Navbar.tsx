'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // lucide icons for menu and close


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = ['Introduction', 'About', 'Personal', 'Publications', 'Research', 'Contact']

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#343a40] shadow-md h-20">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/add-publication" passHref>
        <span className="text-white text-2xl font-amarante  cursor-pointer tracking-wide">
  Dr. Oluwasola S. Maitanmi
</span>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-white text-lg font-germania">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Hamburger icon (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#343a40] px-4 pb-4 space-y-4 text-white text-lg">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block border-b border-gray-600 py-2"
              onClick={() => setIsOpen(false)} // close on click
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
