"use client";

import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsComponent() {
  const testimonials = [
    {
      name: "John Doe",
      company: "",
      text: "Working with Hyperdigital has been a game-changer for our startup. They took our vision and transformed it into a powerful, user-friendly application that our clients love. The team’s dedication to quality and innovation is evident in every detail. We couldn’t be happier with the results!",
    },
    {
      name: "Vikram Sharma",
      company: "",
      text: "From the initial consultation to the final delivery, the team at Hyperdigital was exceptional. They understood our needs perfectly and delivered a seamless SaaS solution that has streamlined our operations. Their expertise in both development and digital marketing has provided us with a comprehensive strategy to grow our business online.",
    },
    {
      name: "Neha Mehta",
      company: "",
      text: "Hyperdigital helped us redesign our website, and the transformation has been incredible. Not only does our site look fantastic, but it’s also optimized for a better user experience. The team was incredibly professional and delivered the project ahead of schedule. I highly recommend Hyperdigital for anyone looking to elevate their online presence!",
    },
  ];

  return (
    <section className="py-20 ">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-30vh bg-white border-blue-200">
            <CardContent className="p-6">
              <p className="text-blue-600 mb-4">&quot;{testimonial.text}&quot;</p>
              <p className="font-semibold text-purple-700">
                {testimonial.name}
              </p>
              <p className="text-sm text-blue-500">{testimonial?.company}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
