"use client";

import React from "react";
import {
  Laptop,
  Smartphone,
  Megaphone,
  Monitor,
  LayoutDashboard,
  BarChart3,
  Video,
  ShoppingCart,
  PieChart,
} from "lucide-react";
import { ServiceCard } from "./ui/card";

const services = [
  {
    title: "Expert Website Solutions",
    description:
      "Hyperdigital creates visually stunning, responsive websites optimized for user experience and SEO, turning visitors into loyal customers.",
    icon: Laptop,
  },
  {
    title: "Mobile App Development",
    description:
      "Our team develops secure, scalable applications tailored to your business needs, across mobile, web, and cross-platform environments.",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with our digital marketing services, including social media management, SEO, and lead generation, designed to drive traffic and increase conversions.",
    icon: Megaphone,
  },
  {
    title: "Innovative SaaS Solutions",
    description:
      "We provide cloud-based SaaS solutions to streamline business processes, improve efficiency, and integrate seamlessly with existing systems.",
    icon: Monitor,
  },
  {
    title: "UI/UX Design Excellence",
    description:
      "We craft intuitive and engaging user interfaces to enhance customer satisfaction and improve retention.",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics & Insights",
    description:
      "Leverage data-driven insights to optimize strategies and understand user behavior for business growth.",
    icon: BarChart3,
  },
  {
    title: "Branding & Graphic Design",
    description:
      "Develop a strong brand identity with our logo design, visual branding, and marketing materials that resonate with your audience.",
    icon: PieChart,
  },
  {
    title: "Video & Content Creation",
    description:
      "Engage your audience with impactful video content and high-quality copywriting tailored to your marketing goals.",
    icon: Video,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Launch and manage successful online stores with our complete e-commerce services, including design, development, and payment integration.",
    icon: ShoppingCart,
  },
];

export function ServicesComponent() {
  return (
    <section id="services" className="py-20 rounded-lg">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-blue-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
