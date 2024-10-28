"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    name: "Kishan Tripathi",
    role: "Marketing Coordinator",
    image: "/teams/default-avatar.png",
    bio: "Kishan manages our marketing campaigns, working closely with clients and teams to achieve business goals.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Shubham Singh",
    role: "Project Manager",
    image: "/teams/default-avatar.png",
    bio: "Shubham leads our development projects, ensuring high-quality, efficient, and innovative solutions.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Manish Basotia",
    role: "Financial Advisor",
    image: "/teams/default-avatar.png",
    bio: "Manish ensures smooth financial operations through strategic planning, optimizing efficiency, and supporting business growth.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Ayush Kushwaha",
    role: "Marketing Manager",
    image: "/teams/default-avatar.png",
    bio: "Ayush leads our marketing team, ensuring our clients' brands are represented effectively and consistently.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Anandita Duvey",
    role: "Social Media Manager",
    image: "/teams/default-avatar.png",
    bio: "Anandita develops social media strategies for clients, creating engaging content to boost brand presence and engagement.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];

const sliderSettings = {
  dots: false,
  lazyLoad: "ondemand" as const,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export function TeamComponent() {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const handleResize = () => sliderRef.current?.slickGoTo(0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 "
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-blue-800">
          Our Team
        </h2>
        <div className="relative">
          <Slider ref={sliderRef} {...sliderSettings}>
            {team.map((member, index) => (
              <div key={index} className="px-2">
                <Card className="bg-[#FAFAFA] border-blue-200 flex flex-col h-[600px]">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="rounded-full mb-4"
                      loading="lazy"
                    />
                    <h3 className="text-xl font-semibold text-blue-700">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 mb-2">{member.role}</p>
                    <p className="text-gray-700 mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-4 mt-full mb-5">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                        aria-label={`Twitter profile of ${member.name}`}
                      >
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
