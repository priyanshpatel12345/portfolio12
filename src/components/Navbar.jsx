"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion, stagger } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About " },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const middleLine = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(107, 114, 128)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -15,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex ">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center "
        >
          <span className="text-white mr-1">Priyansh</span>
          <span className="bg-white rounded text-black w-12 h-8 flex items-center justify-center">
            Patel
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4  ">
        <Link href="https://github.com/priyanshpatel12345">
          <Image src="/github.png" alt="github_logo" width={30} height={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/patel-priyansh-16b47a257/">
          <Image src="/linkedin.png" alt="_logo" width={30} height={30} />
        </Link>
        <Link href="https://github.com/priyanshpatel12345">
          <Image
            src="/dribbble.png"
            alt="dribbble_logo"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://github.com/priyanshpatel12345">
          <Image src="/instagram.png" alt="_logo" width={30} height={30} />
        </Link>
        <Link href="https://github.com/priyanshpatel12345">
          <Image src="/facebook.png" alt="_logo" width={30} height={30} />
        </Link>
        <Link href="https://.com/priyanshpatel12345">
          <Image src="/pinterest.png" alt="_logo" width={30} height={30} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topLine}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={middleLine}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomLine}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-8 text-4xl bg-black text-white z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
