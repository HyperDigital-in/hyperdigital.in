"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Laptop,
  Smartphone,
  Megaphone,
  Monitor,
  LayoutDashboard,
  ChartNoAxesCombined,
  Video,
  ShoppingCart,
  BarChart,
} from "lucide-react";

export function ServicesComponent() {
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
      icon: ChartNoAxesCombined,
    },
    {
      title: "Branding & Graphic Design",
      description:
        "Develop a strong brand identity with our logo design, visual branding, and marketing materials that resonate with your audience.",
      icon: BarChart,
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

  return (
    <section id="services" className="py-20 bg-blue-50 rounded-lg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-purple-700">
                  <service.icon className="w-6 h-6 mr-2 text-blue-600" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
