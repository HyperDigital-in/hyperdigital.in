"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#team", label: "Team" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/HDLogoTransparent.png"
            alt="HyperDigital Logo"
            width={60}
            height={60}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-gray-400 hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <Menu
          className="lg:hidden text-blue-600 hover:text-purple-600 cursor-pointer"
          onClick={handleToggleMenu}
        />

        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-blue-200 lg:hidden">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-600 hover:text-purple-600"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
