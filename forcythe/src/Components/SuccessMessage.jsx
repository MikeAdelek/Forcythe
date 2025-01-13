import React from "react";
import { motion } from "framer-motion";

const SuccessMessage = ({ betterAnimationStart }) => {
  return (
    <div className="py-10">
      <div className="min-h-[60px]">
        <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1,  }}
            viewport={{ once: true }}
            transition={{
              delay: betterAnimationStart
            }}
          >
            Success in
            <span className="text-accent"> Motion </span>- Our clients' journey
          </motion.div>
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;
