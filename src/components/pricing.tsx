import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

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
    description: "Create stunning, responsive websites that drive conversions.",
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

export default function PricingComponent() {
  return (
    <section id="pricing" className="py-20 text-blue-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Pricing that suits everyone</h2>
        <p className="text-xl mb-12 text-center">
          Explore our range of services tailored to elevate your digital
          presence
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-blue-200 text-blue-600 h-[400px] md:h-[450px] lg:h-[500px] flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {service.name}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 scroll-smooth ">
                    Contact Us
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/pricing">
            <Button
              variant="outline"
              className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white hover:shadow-[0_0_5px_4px_rgba(0,112,255,0.5)] transition-shadow duration-300 ease-in-out"
            >
              View Full Pricing Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
