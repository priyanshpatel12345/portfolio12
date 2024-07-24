"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2 ">
          <Image
            src="/hero.png"
            alt="hero_Image"
            fill
            className="object-contain"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center  justify-center">
          {/* Title */}
          <h1 className="text-3xl md:text-6xl font-bold">
            Transforming Ideas into Digital Masterpieces
          </h1>
          {/* Desc */}
          <p className="md:text-xl">
           I'm Priyansh Patel, a passionate MERN stack developer specializing
            in crafting dynamic and user-friendly web applications. With
            expertise in React, Node.js, and Firebase, I bring innovative ideas
            to life through clean code and intuitive design. Let's build
            something amazing together.
          </p>
          {/* Button */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
