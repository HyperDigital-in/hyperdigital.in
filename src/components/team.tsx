"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function TeamComponent() {
  const sliderRef = useRef<Slider>(null);

  const team = [
    {
      name: "Kishan Tripathi",
      role: "Marketing Coordinator",
      image:
        "https://i1.sndcdn.com/artworks-lzVd2mJyMOJTUlhl-mXw2CA-t500x500.jpg",
      bio: "Kishan manages our marketing campaigns, working closely with clients and teams to achieve business goals.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Subham Singh",
      role: "Project Manager",
      image:
        "https://i1.sndcdn.com/artworks-lzVd2mJyMOJTUlhl-mXw2CA-t500x500.jpg",
      bio: "Subham leads our development projects, ensuring high-quality, efficient, and innovative solutions.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Manish Basotia",
      role: "Financial Advisor",
      image:
        "https://i1.sndcdn.com/artworks-lzVd2mJyMOJTUlhl-mXw2CA-t500x500.jpg",
      bio: "Manish oversees our financial operations,  to ensure our business is financially runs smoothly and efficiently.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Ayush Khushwaha",
      role: "Marketing Manager",
      image:
        "https://i1.sndcdn.com/artworks-lzVd2mJyMOJTUlhl-mXw2CA-t500x500.jpg",
      bio: "Ayush leads our marketing team, ensuring our clients' brands are represented effectively and consistently.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Anandita Duvey",
      role: "Social Media Manager",
      image:
        "https://i1.sndcdn.com/artworks-lzVd2mJyMOJTUlhl-mXw2CA-t500x500.jpg",
      bio: "Anandita manages our social media presence, creating engaging content and building relationships with our audience.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  ];

  const settings = {
    dots: false,
    lazyLoad: "ondemand" as const,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section id="team" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
          Our Team
        </h2>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {team.map((member, index) => (
              <div key={index} className="px-2">
                <Card className="bg-white border-blue-200">
                  <CardContent className="p-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-center text-blue-700">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 text-center mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-700 text-center mb-4">
                      {member.bio}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">
                          LinkedIn profile of {member.name}
                        </span>
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                      >
                        <Twitter className="w-6 h-6" />
                        <span className="sr-only">
                          Twitter profile of {member.name}
                        </span>
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
