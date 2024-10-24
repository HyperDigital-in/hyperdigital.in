"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  const [text, setText] = useState("");
  const fullText = "Elevate Your";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

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
    <div className="flex justify-center bg-black">
      <div className="relative h-screen w-full max-w-7xl overflow-hidden bg-black text-white">
        {/* Floating shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full bg-purple-500 opacity-50"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 h-24 w-24 rounded-lg bg-blue-500 opacity-50"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 h-20 w-20 rounded-full bg-green-500 opacity-50"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Main content */}
        <div className="flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.h1
            className="mb-6 text-4xl font-bold md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {text} {displayedText || ""}
          </motion.h1>
          <motion.p
            className="mb-8 max-w-2xl text-lg text-gray-300 glossy-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering creators with cutting-edge AI tools and platforms.
          </motion.p>
          <motion.button
            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
      <style jsx>{`
        .glossy-text {
          background: linear-gradient(
            to right,
            #ffffff 20%,
            #55c3f2 30%,
            #5587f2 70%,
            #ffffff 80%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          background-size: 200% auto;
          animation: shine 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
