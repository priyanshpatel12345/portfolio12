"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const lists = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "MERN Blog Project",
    desc: "A blog website with an admin panel created using the MERN stack. This project involves creating and managing blog posts with user authentication and image hosting through Firebase. Deployed on LinkedIn to showcase skills.",
    img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://blog-application-10.onrender.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "College Portal",
    desc: "A comprehensive college portal for study materials with an admin panel, developed using React, Tailwind CSS, Express.js, Node.js, MongoDB, and Firebase. Created within 48 hours during the Ingenious Hackathon in collaboration with a team of four.",
    img: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://academicnest.onrender.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Company Service",
    desc: "A dynamic website with an admin panel developed using the MERN stack and the useContext hook. The project includes various functionalities for admin and user interactions and demonstrates a robust understanding of web development using modern technologies.",
    img: "https://stl.tech/wp-content/uploads/2023/02/Network-services-scaled.webp",
    link: "https://your-mern-website-link",
  },
  {
    id: 4,
    color: "from-purple-300 to-pink-300",
    title: "YouTube Clone",
    desc: "A YouTube clone with features such as live comments, like, subscribe, trendVideo, subscriptionVideo, and randomVideo. Developed using modern web technologies to mimic the core functionalities of YouTube.",
    img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://youtube-clone-mzc4.onrender.com/signin",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky flex  top-0 h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex ">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {lists.map((list) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${list.color}`}
                key={list.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                    {list.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[300px] ">
                    <Link href={list.link} className="cursor-pointer">
                      <Image
                        src={list.img}
                        fill
                        alt="list_image"
                        className="rounded-lg"
                      />
                    </Link>
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {list.desc}
                  </p>
                  <Link href={list.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded ">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16  items-center justify-center text-center">
        <h1 className="text-8xl pt-20">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Dev & Back-end Dev
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
