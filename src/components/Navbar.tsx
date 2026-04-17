import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonial', href: '#testimonials' },
  ];

  return (
    // Outer container to handle the "floating" position
    <nav className="fixed top-0 w-full z-50 flex justify-center py-3 px-2 lg:p-6">
      <div 
        className={`w-full max-w-screen-2xl transition-all duration-500 ease-in-out px-2 md:px-3 py-1 md:py-2 flex items-center justify-between rounded-full 
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20' 
          : 'bg-white shadow-sm border border-gray-100'
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 pl-1">
         
          <img src="/logo2.png" alt="APIHub Solutions" className="h-auto w-32 lg:w-36" />
        </div>

        {/* Desktop Links - Refined Typography */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[15px] font-medium transition-all duration-200 
                ${link.name === 'Home' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button - Pill shaped and high contrast */}
        <div className="pr-1">
          <button className="bg-[#0f0a19] text-white px-7 py-2.5 rounded-full text-[14px] font-medium transition-transform active:scale-95 hover:bg-black">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;