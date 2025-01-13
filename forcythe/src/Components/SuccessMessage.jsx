import React from "react";
import { motion } from "framer-motion";

const SuccessMessage = ({ betterAnimationStart }) => {
  return (
    <section
      className="py-10"
      aria-label="Success message highlighting our clients' journey"
    >
      <div className="min-h-[60px]">
        <p className="text-2xl leading-[2.5rem] sm:text-3xl sm:leading-[2.5rem] lg:text-4xl lg:leading-[3rem] mb-12 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: betterAnimationStart
            }}
          >
            Success in
            <span className="text-accent">
              {""} Motion {""}
            </span>
            - Our clients' journey
          </motion.h2>
        </p>
      </div>
    </section>
  );
};

export default SuccessMessage;
