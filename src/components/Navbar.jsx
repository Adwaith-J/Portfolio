import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        <a href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-500 transition-all duration-300">
          Adwaith <span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm font-semibold text-gray-700">
          {["About", "Projects", "Skills", "Contact", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group px-1 py-1 hover:text-blue-500 transition-all duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6 text-gray-700" /> : <Bars3Icon className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t bg-white/70 backdrop-blur-lg shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-6 text-sm font-medium text-gray-700">
            {["About", "Projects", "Skills", "Contact", "Blog"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
