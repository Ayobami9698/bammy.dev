// import SkillBadge from "../../components/SkillBadge";
"use client";
import Skills from "@/components/skills";
import Link from "next/link";

// import SkillBadge from "../../components/skillBadge";
// import { motion } from "framer-motion";

// type SkillCircleProps = {
//   skill: string;
//   percentage: number;
//   color: string;
// };

export default function About() {
  // const certifications = [
  //   {
  //     title: "Entry level Java-script programmer",
  //     issuer: "OpenEDG",
  //     year: "2024",
  //     link: "https://verify.openedg.org/?id=LM95.oMAh.zTvw",
  //   },
  // ];

  // const skills = [
  //   { name: "HTML", percentage: 95, color: "#3B82F6" },
  //   { name: "CSS", percentage: 90, color: "#10B981" },
  //   { name: "JavaScript", percentage: 80, color: "#A855F7" },
  //   { name: "Next.js", percentage: 75, color: "#D4AF37" },
  //   { name: "React.js", percentage: 75, color: "#A855F7" },
  // ];

  // const SkillCircle = ({ skill, percentage, color }: SkillCircleProps) => {
  //   const radius = 90;
  //   const stroke = 12;
  //   const normalizedRadius = radius - stroke * 0.5;
  //   const circumference = normalizedRadius * 2 * Math.PI;
  //   const strokeDashoffset = circumference - (percentage / 100) * circumference;

  //   return (
  //     <div className="flex flex-col items-center relative">
  //       <svg height={radius * 2} width={radius * 2}>
  //         {/* Background circle */}
  //         {/* <circle
  //           stroke="#374151"
  //           fill="transparent"
  //           strokeWidth={stroke}
  //           r={normalizedRadius}
  //           cx={radius}
  //           cy={radius}
  //         /> */}
  //         {/* Progress circle */}
  //         <motion.circle
  //           stroke={color}
  //           fill="transparent"
  //           strokeWidth={stroke}
  //           strokeDasharray={circumference}
  //           r={normalizedRadius}
  //           cx={radius}
  //           cy={radius}
  //           transform={`rotate(-90 ${radius} ${radius})`}
  //           initial={{ strokeDashoffset: circumference }}
  //           animate={{
  //             strokeDashoffset:
  //               circumference - (percentage / 100) * circumference,
  //           }}
  //           transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
  //         />
  //         <text
  //           className="text-slate-300 font-bold text-lg"
  //           x="50%"
  //           y="50%"
  //           textAnchor="middle"
  //           dy=".3em"
  //         >
  //           {percentage}%
  //         </text>
  //       </svg>

  //       {/* Percentage text */}
  //       {/* <motion.div
  //         className="relative text-white font-bold text-lg"
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ delay: 0.5 }}
  //       >
  //         {percentage}%
  //       </motion.div> */}

  //       {/* Skill name */}
  //       <p className="text-gray-300 mt-2 font-bold text-lg">{skill}</p>
  //     </div>
  //   );
  // };

  return (
    <section
      id="about"
      className="
    min-h-screen
    bg-[radial-gradient(circle_at_15%_20%,#EDE9FE,transparent_35%),radial-gradient(circle_at_85%_15%,#DBEAFE,transparent_30%)]
    text-black
    px-6 sm:px-10 md:px-16 lg:px-24
    py-20 md:py-28
    flex flex-col
    justify-center
  "
    >
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#24222d]">
          About Me
        </h2>

        {/* Pink underline */}
        <div className="w-5 h-1 bg-black rounded-full mx-auto mt-2" />
      </div>

      {/* Content */}
      <div
        className="
      max-w-5xl
      mx-auto
      w-full
      flex flex-col-reverse md:flex-row
      items-center md:items-center
      justify-between
      gap-10 md:gap-16
    "
      >
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left font-semibold">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 text-[#584b8c]">
            Hey! This is Ayobami
          </h3>

          <p className="text-sm sm:text-base text-[#24222d] leading-7">
            Ayobami Aina is a passionate Frontend Developer
            <br />
            with a strong interest in creating beautiful,
            <br />
            responsive and interactive websites.
          </p>

          <p className="text-sm sm:text-base text-[#24222d] leading-7 mt-4">
            I enjoy working with HTML, CSS, JavaScript,
            <br />
            React, Next.js and Tailwind CSS.
          </p>

          <p className="text-sm sm:text-base text-[#24222d] leading-7 mt-4">
            I am always learning, building and improving
            <br />
            my skills through real-world projects.
          </p>

          <p className="mt-8 text-sm sm:text-base  text-[#584b8c] font-bold">
            Let's connect and collaborate!
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div
            className="
          w-40 h-40
          sm:w-60 sm:h-60
          md:w-65 md:h-65
          overflow-hidden
          
        "
          >
            <img
              src="/Images/about-image.png"
              alt="Profile"
              className="w-full h-full w-300 h-300 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-4 sm: justify-center md:justify-center lg:justify-center items-center my-12">
        <Link href="/Contacts">
          <button className="text-neutral-950 hover:text-white rounded-full bg-slate-100 border-black text-sm  mt-4 transition hover:scale-105 shadow-lg shadow-blue-950 inline-flex items-center gap-2 px-12 py-4 font-medium duration-300 hover:bg-gray-800">
            Connect
          </button>
        </Link>
        <a
          href="/CURRICULUM VITAE.docx"
          download
          className="text-[#fafafa] rounded-full bg-black text-sm  mt-4 transition hover:scale-105 hover:bg-slate-100 shadow-lg shadow-blue-950 inline-flex items-center gap-2 px-6 py-3  font-medium duration-300 hover:text-black "
        >
          Download CV
          <span className="text-lg">↓</span>
        </a>
      </div>
      <Skills />
    </section>
  );
}
