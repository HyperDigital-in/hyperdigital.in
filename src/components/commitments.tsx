"use client";

import { Trophy, Clock3, MessagesSquare, Boxes } from "lucide-react";

export function CommitmentsComponent() {
  const commitments = [
    {
      title: "Dedicated Team",
      description:
        "Our talented team of professionals works tirelessly to ensure that every project exceeds expectations. We take pride in our attention to detail and our ability to bring your vision to life.",
      icon: Trophy,
    },
    {
      title: "On-Time Delivery",
      description:
        "We value your time and are committed to meeting deadlines. With efficient project management and clear communication, we deliver results on time, every time.",
      icon: Clock3,
    },
    {
      title: "Reliable Partnerships",
      description:
        "We collaborate with the best-in-class freelancers and industry experts to provide top-notch services. Our network ensures that we deliver the highest quality solutions, tailored to your needs.",
      icon: MessagesSquare,
    },
    {
      title: "Innovative Approach",
      description:
        "We embrace the latest technologies and trends to provide innovative solutions that keep your business ahead of the curve. From creative designs to cutting-edge digital strategies, we help you stay competitive.",
      icon: Boxes,
    },
  ];

  return (
    <section id="commitments" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
          Our Commitments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {commitments.map((commitment, index) => (
            <div key={index} className="flex items-start">
              <commitment.icon className="w-12 h-12 mr-4 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {commitment.title}
                </h3>
                <p className="text-gray-700">{commitment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
