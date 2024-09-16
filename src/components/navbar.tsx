"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after selection
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-blue-200">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/HDLogoTransparent.png"
            alt="HyperDigital Logo"
            width={60}
            height={60}
            className="h-auto w-auto"
          />
        </Link>
        {/* Menu Icon for Mobile */}
        <Menu
          className="lg:hidden text-blue-600 hover:text-purple-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Menu>
        {/* Navigation Links for Desktop */}
        <ul className={`hidden lg:flex space-x-6`}>
          <li>
            <a
              href={`#about`}
              className="text-blue-600 hover:text-purple-600"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href={`#services`}
              className="text-blue-600 hover:text-purple-600"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services");
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href={`#team`}
              className="text-blue-600 hover:text-purple-600"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("team");
              }}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href={`#pricing`}
              className="text-blue-600 hover:text-purple-600"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("pricing");
              }}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href={`#contact`}
              className="text-blue-600 hover:text-purple-600"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white border-t border-blue-200`}
      >
        <div className="flex flex-col space-y-4 py-4 px-6">
          <a
            href={`#about`}
            className="text-blue-600 hover:text-purple-600"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("about");
            }}
          >
            About
          </a>
          <a
            href={`#services`}
            className="text-blue-600 hover:text-purple-600"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("services");
            }}
          >
            Services
          </a>
          <a
            href={`#team`}
            className="text-blue-600 hover:text-purple-600"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("team");
            }}
          >
            Team
          </a>
          <a
            href={`#pricing`}
            className="text-blue-600 hover:text-purple-600"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("pricing");
            }}
          >
            Pricing
          </a>
          <a
            href={`#contact`}
            className="text-blue-600 hover:text-purple-600"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
