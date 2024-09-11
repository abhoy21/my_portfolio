import Link from "next/link";

const Footer = () => {
  return (
    <footer className='border-t-2 border-solid border-black font-medium text-lg sm:text-base lg:p-8 sm:p-4'>
      <div className='flex items-center justify-between md:flex-row sm:flex-col'>
        <span className='lg:order-1 sm:mb-2'>
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className='flex items-center lg:order-2 sm:py-2'>
          Build with
          <span className='text-sky-500 text-2xl px-1'>&#9825;</span>
          by&nbsp;
          <Link
            href='/'
            target={"_blank"}
            className='underline underline-offset-2'
          >
            Abhoy Sarkar
          </Link>
        </div>
        <Link
          href='/'
          target={"_blank"}
          className='underline underline-offset-2 lg:order-3 sm:mb-2'
        >
          Say Hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
