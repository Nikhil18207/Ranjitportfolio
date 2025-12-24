import React from 'react';

/**
 * Header Section Component
 * 
 * Clones the minimalist black navigation bar featuring the "DANIEL RUSSO" logo 
 * with its circular icon on the left and a text-based menu on the right.
 * 
 * Theme: Dark
 * Layout: fixed or static 80px height
 */
export default function Header() {
  const menuItems = [
    { label: 'NARRATIVE', href: '#narrative' },
    { label: 'COMMERCIAL', href: '#commercial' },
    { label: 'MUSIC-VIDEOS', href: '#music-videos' },
    { label: 'BIO', href: '#bio' },
    { label: 'GEAR', href: '#gear' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white h-[80px] flex items-center px-8 md:px-12">
      <div className="container mx-auto flex justify-between items-center max-w-[1200px]">
        {/* Logo Section */}
        <a href="/" className="flex items-center group gap-3">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Minimalist circular icon - based on screenshot observation */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full text-white" 
              fill="none" 
              stroke="white" 
              strokeLinecap="round" 
              strokeWidth="2.5"
            >
              <circle cx="50" cy="50" r="45" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
              <line x1="18" y1="18" x2="82" y2="82" />
              <line x1="82" y1="18" x2="18" y2="82" />
            </svg>
          </div>
          <span className="font-logo text-[14px] leading-none tracking-[0.2em] font-normal uppercase">
            DANIEL.RUSSO
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[40px]">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link text-[12px] tracking-[0.15em] hover:opacity-70 transition-opacity duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon (Visual Only for Pixel-Perfect Accuracy) */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <div className="w-6 h-[1px] bg-white"></div>
          <div className="w-6 h-[1px] bg-white"></div>
          <div className="w-6 h-[1px] bg-white"></div>
        </div>
      </div>
    </header>
  );
}