"use client";

import { Button } from "@/components/ui/button";

export function AboutComponent() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
          About{" "}
          <span className="bg-gradient-to-br from-blue-500 via-purple-700 to-primary bg-clip-text text-transparent animate-blur">
            HyperDigital
          </span>
        </h2>
        <p className="text-xl mb-6 text-gray-700">
          At{" "}
          <span className="bg-gradient-to-br from-blue-500 via-purple-700 to-primary bg-clip-text text-transparent animate-blur">
            HyperDigital
          </span>
          , we are passionate about driving digital transformation. As a leading
          agency, we specialize in crafting exceptional websites, custom
          applications, and innovative SaaS solutions that help businesses
          thrive online.
        </p>
        <p className="text-xl mb-6 text-gray-700">
          Our comprehensive digital marketing services, including SEO, social
          media management, and lead generation, are designed to enhance your
          brand’s presence and engage your audience effectively.
        </p>
        <p className="text-xl mb-8 text-gray-700">
          Whether you’re looking to build your brand, optimize your operations,
          or connect with customers, Hyperdigital is your partner in digital
          success.
        </p>
        <div className="text-center">
          {/* Hidden Button  */}
          <Button className="hidden bg-purple-600 hover:bg-purple-700 text-white">
            Learn More About Our Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
