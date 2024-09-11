"use client";
import TransitionEffect from "@/hooks/Transitioneffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/view-3d-boy-using-laptop.jpg";
import AnimatedText from "./AnimatedText";
import CustomLayout from "./CustomLayout";
import EducationDetails from "./Education";
import Skills from "./Skills";

interface AnimatedNumbersProps {
  values: number;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ values }) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(values);
    }
  }, [isInView, values, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      const latestNumber = parseFloat(latest.toFixed(0));
      if (ref.current && latestNumber <= values) {
        ref.current.textContent = latestNumber.toFixed(0);
      }
    });
  }, [springValue, values]);

  return <span ref={ref}></span>;
};

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Abhoy Sarkar | About Page</title>
        <meta
          name='description'
          content='Machine Learning Enthusiast, Full stack developer.'
        />
      </Head>
      <TransitionEffect />
      <main className='w-full flex flex-col items-center justify-center bg-white text-black'>
        <CustomLayout className='pt-16'>
          <AnimatedText
            text='Code is like humor. When you have to explain it, it’s bad.'
            className='!mb-16 lg:!text-7xl sm:!text-5xl xs:!text-3xl sm:mb-8'
          />
          <div className='w-full grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16'>
            <div className='flex flex-col items-start justify-start md:col-span-1 lg:col-span-1'>
              <h2 className='mb-4 text-3xl font-bold uppercase text-black/75'>
                Biography
              </h2>
              <p className='font-medium text-xl text-justify'>
                I&apos;m Abhoy Sarkar, a computer science and engineering
                student pursuing B.Tech. I work diligently, have a growing
                understanding of data structures and algorithms, and have a keen
                interest in both web development and machine learning. Explore
                my latest projects and articles, showcasing my works on machine
                learning and web development.
              </p>
              <p className='my-4 font-medium text-xl text-justify'>
                I believe that design is about more than just making things look
                pretty, it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className='font-medium text-xl text-justify'>
                Whether I&apos;m working on a website, mobile app, a machine
                learning model or other digital product, I bring my commitment
                to design excellence and user-centered thinking to every project
                I work on. I look forward to the opportunity to bring my skills
                and passion to your next project.
              </p>
            </div>
            <div className='relative left-20 h-max rounded-2xl border-2 border-solid border-black bg-white p-4 md:col-span-1 md:mt-14'>
              <div className='absolute top-0 -right-4 -z-10 w-[104%] h-[104%] rounded-[2rem] bg-black' />
              <Image
                src={profilePic}
                alt='Abhoy Sarkar'
                className='w-full h-auto rounded-2xl'
              />
            </div>
            <div className='flex flex-col items-end justify-between gap-8 md:col-span-1 lg:col-span-1'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block lg:text-7xl font-extrabold md:text-5xl sm:text-4xl xs:text-3xl'>
                  <AnimatedNumbers values={500} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-black/75 text-center md:text-lg sm:text-base xs:text-sm'>
                  DSA Problems Solved
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block lg:text-7xl font-extrabold md:text-5xl sm:text-4xl xs:text-3xl'>
                  <AnimatedNumbers values={4} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-black/75 text-center md:text-lg sm:text-base xs:text-sm'>
                  Projects Completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block lg:text-7xl font-extrabold md:text-5xl sm:text-4xl xs:text-3xl'>
                  <AnimatedNumbers values={2} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-black/75 text-center md:text-lg sm:text-base xs:text-sm'>
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <EducationDetails />
        </CustomLayout>
      </main>
    </>
  );
};

export default About;
