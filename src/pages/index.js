import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilepic from "../../public/images/profile/view-3d-man-with-tech-device__1_-removebg-preview.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { ContactIcon, LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/hooks/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhoy Sarkar</title>
        <meta name="description" content="Hi! this Abhoy's portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div>
              <Image
                src={profilepic}
                alt="AbhoySarkar"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                si
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi! I'm Abhoy Sarkar"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a machine learning enthusiast and a full-stack developer who
                is constantly learning, I am dedicated to turning ideas into
                innovative web applications. Explore my latest projects and
                achievements, showcasing my works on machine learning and web
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/file/d/1zqbTE2am-znLe56XRd-Jbke8oH1x0-VL/view?usp=sharing"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1 mb-1" />
                </Link>
                <Link
                  href="mailto:sarkar.ab07@gmail.com"
                  target={"_blank"}
                  className="flex items-center ml-4 text-lg font-semibold capitalize text-dark underline border-2 border-dark border-solid p-3 px-6 rounded-lg hover:bg-dark hover:text-light hover:border-transparent dark:text-light hover:dark:bg-light hover:dark:text-dark dark:border-light md:p-2 md:text-base"
                >
                  Contact
                  {/* <ContactIcon className="w-5 ml-1 my-1" /> */}
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-20 md:hidden">
          <Image src={lightBulb} alt="Abhoy Sarkar" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
