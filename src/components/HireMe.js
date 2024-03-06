import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="absolute left-4 bottom-1 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative font-semibold md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />

        <Link
          href="mailto:sarkar.ab07@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full hover:bg-light hover:text-dark
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light md:w-14 md:h-14 md:text-[10px] ease-in duration-300"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
