"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "919895464357";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = "Hi! I would like to know more about your travel packages.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#26352A]/5 bg-[#FAF9F2]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          {/* Logo mark */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D9F36A] transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
            <span className="font-serif text-xl font-bold text-[#26352A]">
              M
            </span>
          </div>

          {/* Brand name */}
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[23px] font-semibold tracking-tight text-[#26352A]">
              Munnargram
            </span>

            <span className="mt-1.5 text-[9px] font-semibold tracking-[0.25em] text-[#7D8475]">
              TRAVEL · EXPLORE · REPEAT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[13px] font-medium tracking-wide text-[#414A3E] transition-colors duration-300 hover:text-[#E87932]"
            >
              {link.label}

              {/* Hover underline */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#FF8A38] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={handleWhatsApp}
          className="group hidden items-center gap-2 rounded-full bg-[#D9F36A] px-5 py-3 text-[13px] font-semibold text-[#26352A] transition-all duration-300 hover:bg-[#FF8A38] hover:shadow-lg hover:shadow-[#FF8A38]/20 md:flex"
        >
          Let's Talk
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#26352A]/10 text-[#26352A] transition-all duration-300 hover:border-[#D9F36A] hover:bg-[#D9F36A] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-[84px] w-full overflow-hidden border-t border-[#26352A]/5 bg-[#FAF9F2]/95 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`border-b border-[#26352A]/5 py-4 text-sm font-medium text-[#26352A] transition-all duration-300 hover:pl-2 hover:text-[#E87932] ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile WhatsApp CTA */}
          <button
            onClick={() => {
              closeMenu();
              handleWhatsApp();
            }}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#D9F36A] px-5 py-3.5 text-sm font-semibold text-[#26352A] transition-all duration-300 hover:bg-[#FF8A38]"
          >
            Enquire on WhatsApp
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
