"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = [
  "Creative Design",
  "Digital Presence",
  "Innovative Solutions",
  "Software",
];

const typingSpeed = 100;
const erasingSpeed = 20;
const delayAfterTyping = 2500;
const delayBeforeErasing = 1500;

interface TypingAnimationProps {
  words: string[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ words }) => {
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
  }, [displayedText, isTyping, isErasing, words, currentWordIndex]);

  return <>{displayedText || "\u00A0"}</>;
};

const FloatingShapes = () => (
  <>
    <motion.div
      className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full bg-purple-500 opacity-50"
      animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute top-3/4 right-1/4 h-24 w-24 rounded-lg bg-blue-500 opacity-50"
      animate={{ x: [0, -150, 0], y: [0, 100, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute bottom-1/4 left-1/3 h-20 w-20 rounded-full bg-green-500 opacity-50"
      animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />
  </>
);

export function Hero() {
  return (
    <div className="flex justify-center bg-black">
      <div className="relative h-screen w-full max-w-7xl overflow-hidden bg-black text-white">
        <FloatingShapes />
        <div className="flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.h1
            className="mb-6 text-4xl font-bold md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your <TypingAnimation words={words} />
          </motion.h1>
          <motion.p
            className="mb-8 max-w-2xl text-lg text-gray-300 glossy-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering your business with cutting-edge technology and AI tools.
          </motion.p>
          <motion.p
            className="mb-8 max-w-7xl text-lg text-gray-300 glossy-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your online identity with Hyperdigital, where technology
            meets creative design. Let us build a powerful, engaging digital
            experience that resonates with your audience and drives growth.
          </motion.p>
          <div className="flex flex-row">
            <motion.button
              className="rounded-md bg-[#8457CD] px-8 py-3 mx-2 md:mx-10 font-semibold text-white transition-colors duration-500 hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                const aboutElement = document.getElementById("about");
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="rounded-md bg-[#1E4ED8] px-8 py-3 mx-2 md:mx-10 font-semibold text-white transition-colors duration-500 hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                const aboutElement = document.getElementById("about");
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
