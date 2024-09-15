"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const words = [
  "Creative Design",
  "Digital Presence",
  "Innovative Solutions",
  "Software Development",
];

const typingSpeed = 100;
const erasingSpeed = 20;
const delayAfterTyping = 2500;
const delayBeforeErasing = 500;

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < words[currentWordIndex].length) {
        timer = setTimeout(() => {
          setDisplayedText(
            words[currentWordIndex].slice(0, displayedText.length + 1)
          );
        }, typingSpeed);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsErasing(true);
        }, delayAfterTyping);
      }
    } else if (isErasing) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, erasingSpeed);
      } else {
        setIsErasing(false);
        setIsTyping(true);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTimeout(() => {}, delayBeforeErasing);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isTyping, isErasing, currentWordIndex]);

  return (
    <div className="relative h-[calc(100vh-180px)] mt-[100px] flex flex-col items-center justify-center bg-gradient-to-bl from-blue-100 via-purple-200 to-indigo-300 bg-cover bg-center bg-no-repeat text-black rounded-lg">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          <span className="w-full text-center text-4xl font-extrabold text-slate-900 md:text-left md:text-4xl lg:w-10/12 xl:text-6xl">
            Elevate Your{" "}
            <span className="py-2 inline-block bg-gradient-to-br from-blue-500 via-purple-700 to-primary bg-clip-text text-transparent animate-blur">
              {displayedText || "\u00A0"}
            </span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 mx-10">
          <span className="inline-block animate-typography">
            Transform your online identity with Hyperdigital, where cutting-edge
            technology meets creative design. Let us build a powerful, engaging
            digital experience that resonates with your audience and drives
            growth.
          </span>
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white hover:shadow-[0_0_5px_4px_rgba(128,0,255,0.5)] transition-shadow duration-300 ease-in-out"
            onClick={() => {
              const aboutElement = document.getElementById("about");
              if (aboutElement) {
                aboutElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Started
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white hover:shadow-[0_0_5px_4px_rgba(0,112,255,0.5)] transition-shadow duration-300 ease-in-out"
            onClick={() => {
              const aboutElement = document.getElementById("contact");
              if (aboutElement) {
                aboutElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Us
          </Button>
        </div>
        {/* Scroll Down Animation */}
        <div className="mt-10">
          <div
            className="text-black animate-bounce cursor-pointer scroll-smooth"
            onClick={() => {
              const aboutElement = document.getElementById("about");
              if (aboutElement) {
                aboutElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            ↓ Scroll Down
          </div>
        </div>
      </div>
    </div>
  );
}
