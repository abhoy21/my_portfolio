"use client";

import Lottie from "lottie-react";
import Head from "next/head";
import Link from "next/link";
import animationData from "../../public/Animation - 1725986819876.json";
import AnimatedText from "../_components/AnimatedText";
import CustomLayout from "../_components/CustomLayout";
import { ContactIcon, LinkArrow, SearchIcon } from "../_components/Icons";

const HomePageComponent: React.FC = () => {
  return (
    <>
      <Head>
        <title>Abhoy Sarkar</title>
        <meta name='description' content="Hi! this Abhoy's portfolio" />
      </Head>

      <main className='flex items-center bg-white text-black w-full min-h-screen '>
        <CustomLayout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
            <div className='w-full lg:w-1/2 hidden lg:block'>
              <Lottie
                animationData={animationData}
                alt='AbhoySarkar'
                className='w-full h-auto'
              />
            </div>
            <div className='w-[100vw] px-6 md:px-0 lg:w-1/2 flex flex-col items-center lg:items-start lg:text-left'>
              <span className='mt-16 text-sm text-[#00b894] font-medium border-2 border-[#55efc4] py-2 px-4 mb-4 rounded-2xl'>
                <div className='flex items-center justify-center gap-2'>
                  <SearchIcon className='!w-6' />
                  I&apos;m open and looking for full-time opportunities and
                  internships
                </div>
              </span>

              <AnimatedText
                text="Hi! I'm Abhoy Sarkar"
                className='lg:!text-6xl md:!text-5xl !text-3xl pb-2 text-center md:text-left '
              />
              <p className='my-4 text-base font-medium md:text-md sm:text-xs text-justify text-gray-500 md:text-gray-700'>
                As a machine learning enthusiast and a full-stack developer who
                is constantly learning, I am dedicated to turning ideas into
                innovative web applications. Explore my latest projects and
                achievements, showcasing my works on machine learning and web
                development.
              </p>
              <div className='flex md:flex-row items-center md:items-start lg:space-x-4'>
                <Link
                  href='https://drive.google.com/file/d/1X3IyFbPGfNw6vlDHOxSjYXaq5k2CLGu0/view?usp=sharing'
                  target={"_blank"}
                  className='flex items-center bg-black text-white p-2.5 px-6 rounded-2xl mx-2 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:text-base'
                  download={true}
                >
                  Resume
                  <LinkArrow className='!w-6 ml-1 mb-1 ' />
                </Link>
                <Link
                  href='mailto:sarkar.ab07@gmail.com'
                  target={"_blank"}
                  className='flex items-center lg:mt-0 ml-0 lg:ml-4 text-lg font-semibold capitalize text-black underline border-2 border-gray-300 border-solid p-3 px-6 rounded-2xl hover:bg-gray-300 hover:text-black hover:border-transparent  md:p-2 md:text-base mx-2'
                >
                  Contact
                  <ContactIcon className='!w-6 ml-1 mb-1' />
                </Link>
              </div>
            </div>
          </div>
        </CustomLayout>
      </main>
    </>
  );
};

export default HomePageComponent;
