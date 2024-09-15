"use client";

import Link from "next/link";

export function FooterComponent() {
  return (
    <footer className="bg-blue-800 text-white py-12 rounded-t-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">HyperDigital</h3>
            <p className="text-blue-200">
              Innovative solutions for the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-blue-200 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-blue-200 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-blue-200 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-blue-200 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-blue-200">Phone: +91-9733203984</p>
            <p className="text-blue-200">Email: info@hyperdigital.com</p>
            <p className="text-blue-200">
              Navi Mumbai, India - 400614
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} HyperDigital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
