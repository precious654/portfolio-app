import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section>
      <motion.div className="flex flex-col gap-3 items-start sm:text-sm mt-10 sm:mt-12">
        <h1 className="text-3xl">
          Hi, I'm{" "}
          <span className="tracking-wide uppercase text-[#888888]">
            Precious
          </span>
        </h1>
        <p>Frontend Web Developer/ Technical writer/ Movie Lover</p>
        <p>
          Passionate about bringing beautiful and responsive web applications to
          life.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
