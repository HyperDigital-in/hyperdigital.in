"use client";

import Link from "next/link";

const socialLinks = [
  {
    href: "https://linkedin.com/company/hyperdigitalin",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    href: "https://www.x.com/hyper_digital_",
    label: "Twitter",
    Icon: XIcon,
  },
  {
    href: "https://www.instagram.com/hyperdigital.in",
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

const quickLinks = [
  { href: "/#about", text: "About" },
  { href: "/#services", text: "Services" },
  { href: "/pricing", text: "Pricing" },
  { href: "/terms", text: "Terms and Conditions" },
];

export function FooterComponent() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
          <HyperDigitalSection title="HyperDigital" content={renderContent()} />
          <Section title="Quick Links" content={renderQuickLinks()} />
          <ContactSection />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

function HyperDigitalSection({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start">
      {" "}
      <span className="text-3xl font-semibold mb-4 bg-gradient-to-br from-blue-500 via-purple-700 to-primary bg-clip-text text-transparent animate-blur">
        {title}
      </span>
      {content}
    </div>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {content}
    </div>
  );
}

function renderContent() {
  return (
    <>
      <p>Innovative solutions for the digital age.</p>
      <div className="flex space-x-2 mt-4">
        {socialLinks.map(({ href, label, Icon }) => (
          <Link key={label} href={href} target="_blank" aria-label={label}>
            <Icon />
          </Link>
        ))}
      </div>
    </>
  );
}

function renderQuickLinks() {
  return (
    <ul className="space-y-2">
      {quickLinks.map(({ href, text }) => (
        <li key={text}>
          <Link href={href} className="text-gray-300 hover:text-white">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactSection() {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-xl font-semibold mb-4">Contact</h3>
      <p className="text-gray-300">Phone: +91-9733203984</p>
      <p className="text-gray-300">Email: admin@hyperdigital.in</p>
      <p className="text-gray-300">Navi Mumbai, India - 400614</p>
    </div>
  );
}

function FooterBottom() {
  return (
    <div
      className="mt-8 pt-8 border-t text-center text-blue-200"
      style={{
        borderImage: "linear-gradient(to right, #FAF5FF, #EBF8FF) 1",
      }}
    >
      <p>&copy; 2024 HyperDigital. All rights reserved.</p>
    </div>
  );
}

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
      className="icon"
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
      className="icon"
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
      className="icon"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M16.5 7.5l0 .01" />
    </svg>
  );
}
