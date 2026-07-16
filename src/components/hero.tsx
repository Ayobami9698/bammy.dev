"use client";

import { motion } from "framer-motion";
import next from "next";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 justify-center text-center
    "
    >
      <div className=" flex items-center justify-center">
        <Image
          src="/Images/bammy.jpg"
          alt="image"
          width={400}
          height={400}
          className=" rounded-full p-3 shadow-lg w-[250px] lg:w-[384px] md:w-[288px] bg-gradient-to-r from-gray-500 via-slate-300 to-white animate-spin-slow [background-clip: padding-box]"
        />
      </div>
      <div>
        <h2 className="text-5xl font-bold mb-6 text-slate-50">
          Hi, I'm Ayobami 👋
        </h2>
        <h1 className="font-bold text-2xl">
          <TypeAnimation
            sequence={[
              "I am a web developer from Nigeria",
              1000,
              "building web apps,",
              1000,
              "mobile apps,",
              1000,
              "and several other online experiences for companies and individuals.",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            speed={50}
            repeat={Infinity}
            style={{ color: "#D4AF37" }}
          />
        </h1>
      </div>
    </motion.section>
  );
}
