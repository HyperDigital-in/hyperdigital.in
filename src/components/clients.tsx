"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export function ClientsComponent() {
  const clients = [
    "https://hyperdigital.in/wp-content/uploads/2024/09/1043.png",
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
          Our Clients
        </h2>
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          autoFill={true}
          className="overflow-hidden"
        >
          {clients.map((client, index) => (
            <div key={index} className="mx-8">
              <Image
                src={client}
                alt={`Client ${index + 1}`}
                width={120}
                height={60}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
