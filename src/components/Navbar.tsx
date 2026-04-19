import React, { useState, useEffect, useRef } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { TbX, TbArrowRight, TbArrowRightToArc } from "react-icons/tb";
import { useConsultationModal } from "@/context/ConsultationModalContext";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { openModal } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center py-3 px-2 lg:p-6">
      <div ref={navRef} className="relative w-full max-w-screen-2xl">
        
        {/* === NAVBAR === */}
        <div
          className={`transition-all duration-500 px-3 py-2 border flex items-center justify-between rounded-full
          ${
            isScrolled
              ? "bg-white/80 backdrop-blur-sm shadow-lg border-gray-400/20"
              : "bg-white shadow-md shadow-primary-600/20 border-gray-400/40"
          }`}
        >
          {/* Logo - clickable to home page */}
          <a href="/" className="cursor-pointer">
            <img
              src="/logo2.png"
              alt="APIHub Solutions"
              className="w-30 md:w-32 lg:w-36 cursor-pointer"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[0.83rem] lg:text-[0.9rem] font-bold font-sora text-gray-500 hover:text-primary-600 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
           
            <button
              type="button"
              onClick={openModal}
              className="rounded-full bg-secondary-600 px-5 py-2 text-[0.83rem] font-medium text-white shadow-md transition hover:bg-secondary-700 md:bg-primary-600 md:text-sm md:hover:bg-primary-700 lg:py-2.5"
            >
              Book Consultation
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-primary-600 hover:bg-primary-700 transition"
            >
              {isMenuOpen ? (
                <TbX className="w-5 h-5 text-white" />
              ) : (
                <CgMenuRightAlt className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* === DROPDOWN MENU === */}
        <div
          className={`absolute left-0 right-0 mt-1 transition-all duration-300 origin-top
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
          }`}
        >
          <div className="mx-auto w-[95%] max-w-md">
            <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-2xl p-6 overflow-hidden">
              
              {/* subtle gradient glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary-50/40 via-transparent to-secondary-50/30 pointer-events-none" />

              {/* CONTENT */}
              <div className="relative z-10">

                {/* Links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-1 rounded-xl text-slate-600 font-sora text-[0.9rem] font-semibold hover:bg-slate-100 transition group"
                    >
                      <span>{link.name}</span>
                      <TbArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </a>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-500 border-dashed my-4" />

                {/* CTA Block */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-sora font-semibold text-secondary-700">
                      Start your project
                    </p>
                    <p className="text-xs text-slate-500">
                      Let’s build something powerful
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      openModal();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-primary-700"
                  >
                    <span>Get Started</span>
                    <TbArrowRightToArc className="h-4 w-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;