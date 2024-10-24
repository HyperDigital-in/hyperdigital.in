"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md max-w-7xl ">
      <div className="flex justify-around items-center py-4 px-4 sm:px-6 lg:px-8">
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
            <Link
              href="/#about"
              className="text-blue-600 hover:text-purple-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              className="text-blue-600 hover:text-purple-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="/#team" className="text-blue-600 hover:text-purple-600">
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/#pricing"
              className="text-blue-600 hover:text-purple-600"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-blue-600 hover:text-purple-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white border-t border-blue-200`}
      >
        <div className="flex flex-col justify-between items-center space-y-4 py-4 px-6">
          <Link
            href="/#about"
            className="text-blue-600 hover:text-purple-600"
            onClick={() => handleScroll()}
          >
            About
          </Link>
          <Link
            href="/#services"
            className="text-blue-600 hover:text-purple-600"
            onClick={() => handleScroll()}
          >
            Services
          </Link>
          <Link
            href="/#team"
            className="text-blue-600 hover:text-purple-600"
            onClick={() => handleScroll()}
          >
            Team
          </Link>
          <Link
            href="/#pricing"
            className="text-blue-600 hover:text-purple-600"
            onClick={() => handleScroll()}
          >
            Pricing
          </Link>
          <Link
            href="/#contact"
            className="text-blue-600 hover:text-purple-600"
            onClick={() => handleScroll()}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
