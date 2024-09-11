import { motion, useScroll } from "framer-motion";
import React from "react";

type LiIconProps = {
  reference: React.RefObject<HTMLElement>;
};

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className='hidden md:block absolute left-0 stroke-black '>
      <svg
        className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]'
        width='75'
        height='80'
        viewBox='0 0 100 100'
      >
        <circle
          cx='75'
          cy='50'
          r='20'
          className='stroke-sky-500  stroke-1 fill-none'
        />
        <motion.circle
          cx='75'
          cy='50'
          r='20'
          className='stroke-[3px] fill-sky-500'
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx='75'
          cy='50'
          r='10'
          className='stroke-1 fill-white animate-pulse'
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
