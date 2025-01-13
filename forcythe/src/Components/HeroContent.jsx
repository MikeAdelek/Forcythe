import React from "react";
import { motion } from "framer-motion";
import { HiPlay } from "react-icons/hi";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 }
};

const HeroContent = ({ subHero, betterAnimationStart }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }} // Changed to 1 so container is visible
      whileInView="reveal"
      viewport={{ once: true }}
    >
      <div className="mb-8 max-w-3xl">
        <div>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            variants={{}} // Empty variants for parent
            transition={{
              staggerChildren: 0.05,
              delayChildren: betterAnimationStart
            }}
            className="text-darkGrey text-base md:text-lg mb-8 leading-7"
          >
            {subHero.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                style={{
                  display: "inline-block",
                  whiteSpace: "pre"
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: betterAnimationStart }}
        className="mb-5"
      >
        <div className="relative w-fit group">
          <button
            className="custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
               bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md"
          >
            Book a call
            <HiPlay className="group-hover:hidden" />
            <HiPlay className="hidden group-hover:block" />
          </button>
          <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
