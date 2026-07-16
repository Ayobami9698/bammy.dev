// import SkillBadge from "../../components/SkillBadge";
"use client";

import SkillBadge from "../../components/skillBadge";
import { motion } from "framer-motion";

export default function About() {
  const certifications = [
    {
      title: "Entry level Java-script programmer",
      issuer: "OpenEDG",
      year: "2024",
      link: "https://verify.openedg.org/?id=LM95.oMAh.zTvw",
    },
  ];

  const skills = [
    { name: "HTML", percentage: 95, color: "#3B82F6" },
    { name: "CSS", percentage: 90, color: "#10B981" },
    { name: "JavaScript", percentage: 80, color: "#A855F7" },
    { name: "Next.js", percentage: 75, color: "#D4AF37" },
    { name: "React.js", percentage: 75, color: "#A855F7" },
  ];

  const SkillCircle = ({ skill, percentage, color }) => {
    const radius = 90;
    const stroke = 12;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center relative">
        <svg height={radius * 2} width={radius * 2}>
          {/* Background circle */}
          {/* <circle
            stroke="#374151"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          /> */}
          {/* Progress circle */}
          <motion.circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset:
                circumference - (percentage / 100) * circumference,
            }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          />
          <text
            className="text-slate-300 font-bold text-lg"
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
          >
            {percentage}%
          </text>
        </svg>

        {/* Percentage text */}
        {/* <motion.div
          className="relative text-white font-bold text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {percentage}%
        </motion.div> */}

        {/* Skill name */}
        <p className="text-gray-300 mt-2 font-bold text-lg">{skill}</p>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 mt-6"
    >
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4 px-4">About Me</h2>
        <p className="text-base lg:text-lg text-slate-100 font-semibold sm:text-lg px-4">
          I am a web developer with a passion for creating interactive and
          responsive web applications. I have experience working with
          JavaScript, React, Next.js, Html, CSS, Git, nodejs etc. I am a quick
          learner and I am always looking to expand my knowledge and skill set.
          I am a team player and I am excited to work with others to create
          amazing applications.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-8 text-center text-white mt-10 ">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((s) => (
          <SkillCircle
            key={s.name}
            skill={s.name}
            percentage={s.percentage}
            color={s.color}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8 ">
        <a
          href="/CURRICULUM VITAE.docx"
          download
          className=" inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white text-xl transition-all duration-300 hover:scale-105 hover:bg-blue-700 shadow-md shadow-yellow-50"
        >
          <span>Download CV</span>
          <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </a>
      </div>

      <div className="grid place-items-center items-center mt-12 bg-black/50">
        <div>
          <h2 className="text-white font-bold text-2xl my-5">Certifications</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 justify-evenly">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6 my-8"
            >
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>

              <p className="mt-2 text-slate-50">{cert.issuer}</p>

              <p className="mt-1 text-sm text-slate-50">{cert.year}</p>

              <a
                href={cert.link}
                target="_blank"
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                View Credential →
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
