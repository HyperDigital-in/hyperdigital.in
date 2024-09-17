"use client";

import Link from "next/link";

export function FooterComponent() {
  return (
    <footer className="bg-blue-800 text-white py-12 rounded-t-md mx-4 sm:mx-6 lg:mx-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">HyperDigital</h3>
            <p className="text-blue-200">
              Innovative solutions for the digital age.
            </p>
            <div className="flex space-x-2 mt-4">
              <Link
                href="https://linkedin.com/company/hyperdigitalin"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href="https://www.x.com/hyper_digital_"
                target="_blank"
                aria-label="Twitter"
              >
                <XIcon />
              </Link>
              <Link
                href="https://www.instagram.com/hyperdigital.in"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-blue-200 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-blue-200 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-blue-200 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-200 hover:text-white">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-blue-200">Phone: +91-9733203984</p>
            <p className="text-blue-200">Email: admin@hyperdigital.in</p>
            <p className="text-blue-200">Navi Mumbai, India - 400614</p>
          </div>
          {/* <div className="flex flex-col items-end">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-blue-200">Phone: +91-9733203984</p>
            <p className="text-blue-200">Email: admin@hyperdigital.in</p>
            <p className="text-blue-200">Navi Mumbai, India - 400614</p>
          </div> */}
        </div>

        <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-200">
          <p>&copy; 2024 HyperDigital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M8 11l0 5" />
      <path d="M8 8l0 .01" />
      <path d="M12 16l0 -5" />
      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M16.5 7.5l0 .01" />
    </svg>
  );
}
