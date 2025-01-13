// components/HeroTitle.jsx
import React from "react";
import { motion } from "framer-motion";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 }
};

export const heroText = [
  { name: "We", color: "white" },
  { name: "build", color: "white" },
  { name: "products", color: "#60a6e7" },
  { name: "that", color: "white" },
  { name: "shape", color: "white", keepTogether: true },
  { name: "a", color: "white" },
  { name: "better", color: "white" },
  { name: "future", color: "white" }
];

const HeroTitle = ({ allChars }) => {
  return (
    <div className="min-h-[180px]">
      <motion.h1
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] text-white font-normal leading-[1] mb-7 whitespace-pre-wrap"
      >
        {heroText.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            className="inline-flex whitespace-nowrap"
            style={{
              marginRight: wordIndex < heroText.length - 1 ? "0.3em" : 0
            }}
          >
            {word.name.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={charVariants}
                transition={{ duration: 0.2 }}
                style={{
                  color: word.color,
                  display: "inline-block"
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default HeroTitle;
