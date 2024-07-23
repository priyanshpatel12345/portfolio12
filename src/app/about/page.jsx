"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();

  const isExperienceView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIO CONTENT */}
          <div className="flex flex-col justify-center gap-12   ">
            <h1 className="text-4xl font-bold">BIOLOGY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur eligendi natus blanditiis accusamus. Asperiores modi
              quas maxime molestias eveniet aliquam neque aperiam odio qui?
              Quaerat nostrum impedit numquam deleniti debitis.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILL CONTENT */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-3xl"
            >
              SKILL
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <div className="rounded p-2 test-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Javascript
              </div>
              <div className="rounded p-2 test-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                React.js
              </div>
              <div className="rounded p-2 test-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Redux
              </div>
              <div className="rounded p-2 test-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Tailwind CSS
              </div>
              <div className="rounded p-2 test-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Flowbite
              </div>
              <div className="rounded p-2 test-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Node.js
              </div>
              <div className="rounded p-2 test-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Express.js
              </div>
              <div className="rounded p-2 test-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                MongoDB
              </div>
              <div className="rounded p-2 test-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Firebase
              </div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTENT */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* TITLE */}
            <motion.h1
              initial={{ x: "-500px" }}
              animate={isExperienceView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-3xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-500px" }}
              animate={isExperienceView ? { x: 0 } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <motion.div className="flex justify-between h-48">
                {/* LEFT */}
                <div
                  className="w-1/3
"
                >
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    Senior Javascript Engineer
                  </div>
                  {/* JOB desc */}
                  <div className="p-3 text-sm italic">My current Employee</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 test-sm font-semibold ">
                    2024 - present
                  </div>
                  {/* JOB Company */}
                  <div className="p-1 rounded bg-white w-fit font-semibold text-sm">
                    Company
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600  rounded relative flexbox">
                    {/* LINE CIRCLE */}
                    <div className="  absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3"></div>
              </motion.div>

              {/* SECOND PART */}

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600  rounded relative flexbox">
                    {/* LINE CIRCLE */}
                    <div className="  absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    Senior Javascript Engineer
                  </div>
                  {/* JOB desc */}
                  <div className="p-3 text-sm italic">My current Employee</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 test-sm font-semibold ">
                    2024 - present
                  </div>
                  {/* JOB Company */}
                  <div className="p-1 rounded bg-white w-fit font-semibold text-sm">
                    Company
                  </div>
                </div>
              </div>

              {/* THIRD PART */}

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div
                  className="w-1/3
"
                >
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    Senior Javascript Engineer
                  </div>
                  {/* JOB desc */}
                  <div className="p-3 text-sm italic">My current Employee</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 test-sm font-semibold ">
                    2024 - present
                  </div>
                  {/* JOB Company */}
                  <div className="p-1 rounded bg-white w-fit font-semibold text-sm">
                    Company
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600  rounded relative flexbox">
                    {/* LINE CIRCLE */}
                    <div className="  absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3  sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
