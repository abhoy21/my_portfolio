import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

type EducationDetailsProps = {
  type: string;
  time: string;
  place: string;
  info: string;
};

const Details: React.FC<EducationDetailsProps> = ({
  type,
  time,
  place,
  info,
}) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-full flex flex-col items-start justify-start mx-auto md:w-[80%] lg:w-[75%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold !text-3xl sm:text-xl xs:text-lg'>
          {type}
        </h3>
        <span className='capitalize font-medium text-gray-700/75  xs:text-small'>
          {time} | {place}
        </span>
        <p className='font-medium w-full md:text-small'>{info}</p>
      </motion.div>
    </li>
  );
};

const EducationDetails = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className='mt-32'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-7xl xs:text-4xl md:mb-16'>
          Education
        </h2>
        <div
          ref={ref}
          className='w-[75%] h-[650px] mx-auto relative lg:w-[75%] md:w-full'
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-12 top-0 w-[4px] h-full bg-black origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'
          />
          <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
            <Details
              type={"Bachelor of Technology in Computer Science Engineering"}
              time={"2021-2025"}
              place={"University of Engineering and Management, Kolkata (UEMK)"}
              info={
                "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence & Machine Learning."
              }
            />

            <Details
              type={"Indian School Certificate (ISC)"}
              time={"2021"}
              place={"St Stephen's School"}
              info={"Computer Science background with 91.7% scored."}
            />

            <Details
              type={"Indian Certificate of Secondary Education (ICSE)"}
              time={"2019"}
              place={"St Stephen's School"}
              info={"Class 10 Boards passed with 84.8% scored."}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default EducationDetails;
