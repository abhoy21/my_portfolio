"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import project1 from "../../public/apple_ui.png";
import project6 from "../../public/console_blog_image.png";
import project5 from "../../public/image.png";
import project7 from "../../public/insightx_image.png";
import project2 from "../../public/Sensei.png";
import project4 from "../../public/Sloka.png";
import AnimatedText from "./AnimatedText";
import CustomLayout from "./CustomLayout";
import { GithubIcon } from "./Icons";

const FramerImage = motion(Image);

type ProjectProps = {
  type: string;
  title: string;
  summary?: string;
  img: StaticImageData;
  link: string;
  github: string;
};

const FeaturedProject: FC<ProjectProps> = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article
      className='w-full flex flex-col lg:flex-row items-center justify-between rounded-2xl border border-solid border-black bg-white shadow-2xl p-6 relative 
      rounded-br-2xl lg:p-8 xs:flex-col xs:p-4'
    >
      <div
        className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl 
       xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'
      />

      <Link
        href={link}
        target='_blank'
        className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className='w-full lg:w-1/2 flex flex-col items-start justify-between !pl-6 lg:pl-0 lg:pt-6'>
        <span className='text-sky-500 font-medium text-xl xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left !text-4xl font-bold md:!text-2xl sm:!text-xl'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-gray-700 md:!text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-2xl bg-black text-white p-2 px-6 text-lg font-semibold border border-solid border-tranparent hover:border-light
            sm:text-base sm:px-4'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project: FC<ProjectProps> = ({ title, type, link, img, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative xs:p-4'>
      <div className='absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-black font-medium text-xl lg:text-lg md:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl'>
            {title}
          </h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline md:text-base'
          >
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectsPage: FC = () => {
  return (
    <>
      <Head>
        <title>Abhoy Sarkar | Projects Page</title>
        <meta
          name='description'
          content='Machine Learning Enthusiast, Full stack developer.'
        />
      </Head>

      <main className='w-full h-full flex flex-col items-center justify-center bg-white text-black'>
        <CustomLayout className='pt-16 '>
          <AnimatedText
            text='A well-planned project is a joy to code.'
            className='hidden md:block !mb-16 md:!text-7xl'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-16 lg:gap-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Console.blog(): Blog Website'
                summary='Explore the dynamic world of UI design with our Apple UI website project! Delve into cutting-edge techniques using useRef hooks and GSAP animations. This project is an educational journey, crafted solely for learning and experimentation'
                img={project6}
                link='https://console-blog-mern-frontend.vercel.app/'
                github='https://github.com/abhoy21/console_blog_mern.git'
                type='Featured Project'
              />
            </div>
            <div className='md:col-span-6 col-span-12'>
              <Project
                title='Sloka: Note taking website'
                img={project4}
                link='https://sloka-frontend.vercel.app/'
                github='https://github.com/abhoy21/sloka_backend.git'
                type='Featured Project'
              />
            </div>
            <div className='md:col-span-6 col-span-12'>
              <Project
                title='Sensei: Find your Tutor Website'
                img={project2}
                link='https://sensei-frontend-three.vercel.app/'
                github='https://github.com/abhoy21/sensei_backend.git'
                type='Featured Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='Designed an Intuitive Dashboard for Enhanced User Analytics'
                summary='Explore a state-of-the-art dashboard designed for enhanced user analytics. Our platform offers comprehensive insights drawn from advanced machine learning models analyzing user reviews. Gain actionable data and trends to drive informed decisions, optimize user experience, and elevate your strategies with ease. Discover the power of intuitive design and intelligent analytics today!'
                img={project7}
                link='https://insightx-frontend.vercel.app/'
                github='https://github.com/abhoy21/insightX_frontend.git'
                type='Featured Project'
              />
            </div>
            <div className='md:col-span-6 col-span-12'>
              <Project
                title='Designed the Interactive Apple UI'
                img={project1}
                link='https://apple-ui-khaki.vercel.app/'
                github='https://github.com/abhoy21/apple_ui.git'
                type='Featured Project'
              />
            </div>
            <div className='md:col-span-6 col-span-12'>
              <Project
                title='Bytdrop: Developed a seemless File Sharing Web App'
                img={project5}
                link='https://bytedrop.vercel.app/'
                github='https://github.com/abhoy21/bytedrop.git'
                type='Featured Project'
              />
            </div>
          </div>
        </CustomLayout>
      </main>
    </>
  );
};

export default ProjectsPage;
