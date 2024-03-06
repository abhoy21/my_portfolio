import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import certificate1 from "../../public/images/articles/Coursera QRJAA4NCF4EQ_page-0001.jpg";
import Certificate2 from "../../public/images/articles/Introduction_to_Machine-Learning_page-0001.jpg";
import leetcode from "../../public/images/articles/leetcode_profile_SS.png";
import aws_cert from "../../public/images/articles/Coursera U33U3Z5LLM3N_page-0001.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/hooks/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgref = useRef(null);

  function handleMouse(event) {
    imgref.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgref.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        ref={imgref}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative bottom-11 w-full p-6 py-6 px-20 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
      sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 sm:pt-2 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeatureArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:text-light dark:border-light">
      <div className="absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:p-4 md:pt-8" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 md:hidden">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Abhoy Sarkar | Achievements Page</title>
        <meta
          name="description"
          content="Machine Learning Enthusiast, Full stack developer."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Programmers build achievements one algorithm at a time."
            className="mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeatureArticle
              img={certificate1}
              title="crash Course on Python from Google"
              summary="This course is designed to teach you the foundations in order to write simple programs in Python using the most common structures. No previous exposure to programming is needed. By the end of this course, you'll understand the benefits of programming in IT roles; be able to write simple programs using Python; figure out how the building blocks of programming fit together; and combine all of this knowledge to solve a complex programming problem. 

              We'll start off by diving into the basics of writing a computer program. Along the way, you’ll get hands-on experience with programming concepts through interactive exercises and real-world examples. You’ll quickly start to see how computers can perform a multitude of tasks — you just have to write code that tells them what to do."
              time="22 hours (approximately)"
              link="https://www.coursera.org/learn/python-crash-course"
            />
            <FeatureArticle
              img={Certificate2}
              title="
              Introduction to Machine Learning in Production"
              summary="In the first course of Machine Learning Engineering for Production Specialization, you will identify the various components and design an ML production system end-to-end: project scoping, data needs, modeling strategies, and deployment constraints and requirements; and learn how to establish a model baseline, address concept drift, and prototype the process for developing, deploying, and continuously improving a productionized ML application.

              Understanding machine learning and deep learning concepts is essential, but if you’re looking to build an effective AI career, you need production engineering capabilities as well. Machine learning engineering for production combines the foundational concepts of machine learning with the functional expertise of modern software development and engineering roles to help you develop production-ready skills. 
              
              Week 1: Overview of the ML Lifecycle and Deployment
              Week 2: Selecting and Training a Model
              Week 3: Data Definition and Baseline"
              time="11 hours (approximately)"
              link="https://www.coursera.org/learn/introduction-to-machine-learning-in-production?specialization=machine-learning-engineering-for-production-mlops"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Other Achievements
          </h2>
          <ul>
            <Article
              title="Leetcode 300+ Problems Solved!"
              date="2023"
              link="https://leetcode.com/abhoy21/"
              img={leetcode}
            />
            <Article
              title="AWS Cloud Technical Essentials"
              date="2023"
              link="https://www.coursera.org/account/accomplishments/certificate/U33U3Z5LLM3N"
              img={aws_cert}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
