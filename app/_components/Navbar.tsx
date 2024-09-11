"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import Logo from "./Logo";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

interface CustomMobileLinkProps extends CustomLinkProps {
  toggle: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in duration-300
        ${pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
  href,
  title,
  className = "",
  toggle,
}) => {
  const pathname = usePathname();

  const handleClick = () => {
    toggle();
  };

  return (
    <Link href={href} onClick={handleClick}>
      <button className={`${className} relative group text-black my-4`}>
        {title}
        <span
          className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in duration-300
        ${pathname === href ? "w-full" : "w-0"} dark:bg-dark`}
        >
          &nbsp;
        </span>
      </button>
    </Link>
  );
};

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full px-8 py-4 font-medium flex items-center justify-between bg-white text-black z-10 lg:px-16 md:px-12 sm:px-8'>
      <button
        className='flex-col items-center justify-center lg:hidden flex'
        onClick={handleClick}
      >
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className='w-full flex justify-between items-center lg:flex'>
        <nav className='font-mono text-lg'>
          <CustomLink href='/' title='Home' className='mr-4' />
          <CustomLink href='/about' title='About' className='mx-4' />
          <CustomLink href='/projects' title='Projects' className='mx-4' />
          {/* <CustomLink
            href='/achievements'
            title='Achievements'
            className='ml-4'
          /> */}
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a
            href='https://www.linkedin.com/in/abhoy-sarkar-a7b23a201/'
            target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-8 mx-3'
          >
            <LinkedinIcon />
          </motion.a>
          <motion.a
            href='https://github.com/abhoy21'
            target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-8 mx-3'
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href='https://twitter.com/yourflickbong'
            target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-8 mx-3'
          >
            <TwitterIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-gray-800/90 rounded-lg backdrop-blur-md py-8'
        >
          <nav className='flex flex-col items-center justify-center'>
            <CustomMobileLink href='/' title='Home' toggle={handleClick} />
            <CustomMobileLink
              href='/about'
              title='About'
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/projects'
              title='Projects'
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/achievements'
              title='Achievements'
              toggle={handleClick}
            />
          </nav>

          <nav className='flex items-center justify-center flex-wrap mt-4'>
            <motion.a
              href='https://www.linkedin.com/in/abhoy-sarkar-a7b23a201/'
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-8 mx-3'
            >
              <LinkedinIcon />
            </motion.a>
            <motion.a
              href='https://github.com/abhoy21'
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-7 mx-3'
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href='https://twitter.com/yourflickbong'
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-7 mx-3'
            >
              <TwitterIcon />
            </motion.a>
          </nav>
        </motion.div>
      )}

      <div className='absolute left-1/2 top-2 transform -translate-x-1/2'>
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
