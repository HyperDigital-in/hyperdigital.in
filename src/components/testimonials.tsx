"use client";

import React from "react";
import { TestimonialCard } from "./ui/card";

export function TestimonialsComponent() {
  const testimonials = [
    {
      quote:
        "Working with Hyperdigital has been a game-changer for our startup. They took our vision and transformed it into a powerful, user-friendly application that our clients love. The team's dedication to quality and innovation is evident in every detail. We couldn't be happier with the results!",
      name: "John Doe",
    },
    {
      quote:
        "From the initial consultation to the final delivery, the team at Hyperdigital was exceptional. They understood our needs perfectly and delivered a seamless SaaS solution that has streamlined our operations. Their expertise in both development and digital marketing has provided us with a comprehensive strategy to grow our business online.",
      name: "Vikram Sharma",
    },
    {
      quote:
        "Hyperdigital helped us redesign our website, and the transformation has been incredible. Not only does our site look fantastic, but it's also optimized for a better user experience. The team was incredibly professional and delivered the project ahead of schedule. I highly recommend Hyperdigital for anyone looking to elevate their online presence!",
      name: "Neha Mehta",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 mb-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-blue-800">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
