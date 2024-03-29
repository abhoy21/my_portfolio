import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-4 px-8 text-lg shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold mt-64 text-8xl w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] md:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <Skill name="C++" x="0vw" y="0vw" />
        <Skill name="CSS" x="-25vw" y="2vw" />
        <Skill name="JAVASCRIPT" x="-4vw" y="10vw" />
        <Skill name="NUMPY" x="-5vw" y="-10vw" />
        <Skill name="DJANGO" x="22vw" y="6vw" />
        <Skill name="GRAPHQL" x="-20vw" y="-15vw" />
        <Skill name="PANDAS" x="15vw" y="-12vw" />
        <Skill name="TENSERFLOW" x="32vw" y="-5vw" />
        <Skill name="PYTHON" x="0vw" y="-20vw" />
        <Skill name="HTML" x="-35vw" y="-8vw" />
        <Skill name="TAILWIND CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
