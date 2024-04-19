import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/apple_ui.png";
import project2 from "../../public/images/projects/Sensei.png";
import project3 from "../../public/images/projects/Sloka.png";
import project4 from "../../public/images/projects/bytedrop.png";
import project5 from "../../public/images/projects/console.Blog().png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/hooks/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative riunded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
    >
      <div
        className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
       xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'
      />

      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border border-solid border-tranparent dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:border-light
            sm:text-base sm:px-4'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, link, img, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
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
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>
            {title}
          </h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline dark:text-light md:text-base'
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

const projects = () => {
  return (
    <>
      <Head>
        <title>Abhoy Sarkar | Projects Page</title>
        <meta
          name='description'
          content='Machine Learning Enthusiast, Full stack developer.'
        />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16 '>
          <AnimatedText
            text='A well-planned project is a joy to code.'
            className='mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-16 lg:gap-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                summary='Explore the dynamic world of UI design with our Apple UI website project! Delve into cutting-edge techniques using useRef hooks and GSAP animations. This project is an educational journey, crafted solely for learning and experimentation'
                title='Designed the Interactive Apple UI'
                img={project1}
                link='https://apple-ui-khaki.vercel.app/'
                github='https://github.com/abhoy21/apple_ui.git'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Sloka'
                img={project3}
                link='https://sloka-frontend.vercel.app/'
                github='https://github.com/abhoy21/sloka_backend.git'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Sensei'
                img={project2}
                link='https://sensei-frontend-three.vercel.app/'
                github='https://github.com/abhoy21/sensei_backend.git'
                type='Featured Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='Developed a seemless File Sharing Web App'
                summary='Experience seamless file sharing like never before with our revolutionary platform! Say goodbye to cumbersome registrations and logins – effortlessly upload and download files while ensuring anonymity for secure sharing. Simplify your file sharing experience today!'
                img={project4}
                link='https://bytedrop.vercel.app/'
                github='https://github.com/abhoy21/bytedrop.git'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='console.Blog()'
                img={project5}
                link='https://console-blog-frontend.vercel.app/'
                github='https://github.com/abhoy21/console_blog_backend.git'
                type='Featured Project'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
