"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const finalText = "Akai Space";
  const [displayedText, setDisplayedText] = useState("");
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (animationComplete) return;

    let iteration = 0;
    const totalIterations = 20;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const newText = finalText
          .split("")
          .map((char, index) => {
            if (iteration >= totalIterations) {
              if (index < (iteration - totalIterations) / 2) {
                return finalText[index];
              }
            }
            return getRandomChar();
          })
          .join("");

        return newText;
      });

      iteration++;

      if (iteration > finalText.length * 2 + totalIterations) {
        clearInterval(interval);
        setAnimationComplete(true);
        setShowButton(true);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [finalText, animationComplete]);

  const getRandomChar = () => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#4f4f4f4e_1px,transparent_1px)] [background-size:12px_12px]">
      <main className="flex items-center justify-center min-h-screen flex-col space-y-12">
        <h1 className="text-6xl font-semibold text-white">
          {displayedText}
        </h1>
        <div
          className={`mt-8 transition-opacity duration-1000 ${
            showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Link href={"/dashboard"}className="px-8 py-4 text-lg text-white rounded-md bg-gradient-to-r from-red-900 to-red-600 shadow-lg hover:from-red-700 hover:to-red-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 outline-none">
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
