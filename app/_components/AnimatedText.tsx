"use client";
import { motion } from "framer-motion";
import React from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 1,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className} dark:text-light`}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className='inline-block'
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
