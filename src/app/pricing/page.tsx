"use client";

import { ContactComponent } from "@/components/contact";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingPage() {
  const bundles = [
    {
      title: "Website & Digital Marketing Combo",
      description: "Tailored for businesses seeking comprehensive solutions.",
      features: [
        "Custom Website Design & Development",
        "SEO Optimization",
        "Social Media Management",
        "Content Marketing Strategy",
      ],
    },
    {
      title: "Application Development & SaaS Combo",
      description: "Full SaaS solutions for scalable businesses.",
      features: [
        "Cross-Platform Mobile or Web Application",
        "Full SaaS Solution Development",
        "API Integration & Cloud Services",
        "Maintenance & Support",
      ],
    },
    {
      title: "Ultimate Business Growth Combo",
      description: "Comprehensive package for growth-focused businesses.",
      features: [
        "Website Development",
        "SEO & Digital Marketing",
        "Application or SaaS Development",
        "Lead Generation",
        "Social Media Campaigns",
      ],
    },
  ];

  const generalServices = [
    {
      title: "Website Development",
      features: [
        "Custom Website Design & Development",
        "Responsive & Mobile-Optimized",
        "eCommerce Solutions",
        "CMS Integration",
      ],
    },
    {
      title: "Application Development",
      features: [
        "Mobile App Development (iOS & Android)",
        "Web App Development",
        "UI/UX Design",
        "Ongoing App Maintenance",
      ],
    },
    {
      title: "SaaS Solutions",
      features: [
        "Custom SaaS Platform Development",
        "API Development & Integration",
        "Cloud Hosting & Infrastructure",
        "Ongoing Support & Upgrades",
      ],
    },
    {
      title: "Digital Marketing",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Management",
        "Pay-Per-Click (PPC) Advertising",
        "Email Marketing Campaigns",
        "Analytics & Reporting",
      ],
    },
    {
      title: "Lead Generation",
      features: [
        "Targeted Lead Campaigns",
        "Funnel Creation & Management",
        "Data-Driven Strategies",
        "Lead Nurturing & Retargeting",
      ],
    },
    {
      title: "Branding & Design",
      features: [
        "Logo & Visual Identity Design",
        "Brand Strategy Development",
        "Marketing Collateral Design",
        "Rebranding Services",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative text-blue-800 bg-white mt-[100px]"
    >
      <div className="container bg-blue-50 mx-auto px-4 max-w-9xl rounded-lg ">
        <h2 className="text-3xl font-bold mb-4 pt-10 text-center">
          Our Pricing
        </h2>
        <p className="text-xl mb-12 text-center">
          Get more value with our exclusive service combos tailored for your
          needs.
        </p>

        {/* Bundled Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <Card
              key={index}
              className="bg-white border-blue-200 text-blue-600 flex flex-col justify-between"
            >
              <CardHeader>
                {/* Fixed height for Title and Description */}
                <div className="h-28">
                  <CardTitle className="text-2xl font-bold">
                    {bundle.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {bundle.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mt-4">
                  {bundle.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-4">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    const aboutElement = document.getElementById("contact");
                    if (aboutElement) {
                      aboutElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Enquire for Pricing
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* General Services */}
        <h3 className="text-2xl font-bold mt-12 mb-4 text-center">
          General Pricing List for All Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {generalServices.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-blue-200 text-blue-600 flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-4">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    const aboutElement = document.getElementById("contact");
                    if (aboutElement) {
                      aboutElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Enquire for Pricing
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <ContactComponent />
      </div>
    </section>
  );
}
