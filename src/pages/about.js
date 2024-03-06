import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/view-3d-boy-using-laptop.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/hooks/TransitionEffect";

const AnimatedNumbers = ({ values }) => {
  const ref = useRef(null);

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
      if (ref.current && latest.toFixed(0) <= values) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, values]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Abhoy Sarkar | About Page</title>
        <meta
          name="description"
          content="Machine Learning Enthusiast, Full stack developer."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Code is like humor. When you have to explain it, it’s bad."
            className="mb-16 lg:!text-7xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />
          <div className="w-full grid grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium text-lg">
                I&apos;m Abhoy Sarkar, a computer science and engineering
                student pursuing a B.Tech. I work diligently, have a growing
                understanding of data structures and algorithms, and have a keen
                interest in both web development and machine learning. Explore
                my latest projects and articles, showcasing my works on machine
                learning and web development.
              </p>
              <p className="my-4 font-medium text-lg">
                I believe that design is about more than just making things look
                pretty,it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium text-lg">
                Whether I&apos;m working on a website, mobile app, a machine
                learning model or other digital product, I bring my commitment
                to design excellence and user-centered thinking to every project
                I work on. I look forward to the opportunity to bring my skills
                and passion to your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Abhoy Sarkar"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers values={300} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  DSA Problems Solved
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers values={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers values={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Education />
          {/* <Experience /> */}
        </Layout>
      </main>
    </>
  );
};

export default about;
