"use client";

import React from "react";
import Link from "next/link";

import { PricingCard } from "./ui/card";

export  function PricingComponent() {
  const services = [
    {
      name: "Digital Marketing",
      description:
        "Boost your online presence and reach your target audience effectively.",
      features: [
        "Social media management",
        "SEO optimization",
        "Content marketing",
        "PPC advertising",
      ],
    },
    {
      name: "Web Development",
      description:
        "Create stunning, responsive websites that drive conversions.",
      features: [
        "Custom design",
        "Responsive layouts",
        "CMS integration",
        "E-commerce functionality",
      ],
    },
    {
      name: "App Development",
      description:
        "Build powerful, user-friendly mobile applications for iOS and Android.",
      features: [
        "Native app development",
        "Cross-platform solutions",
        "UI/UX design",
        "App store optimization",
      ],
    },
    {
      name: "Custom Tailoring",
      description:
        "Start your business or grow your company with our custom solutions.",
      features: [
        "Website design",
        "Marketing strategy",
        "Custom development",
        "Multiple Solutions",
      ],
    },
  ];

  return (
    <section id="pricing" className="pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-blue-800">
          Pricing that suits everyone
        </h2>
        <p className="mb-12 text-center text-xl text-gray-600">
          Explore our range of services tailored to elevate your digital
          presence
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <PricingCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/pricing">
            <button className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105">
              View Full Pricing Details
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
