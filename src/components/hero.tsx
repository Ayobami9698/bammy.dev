import { motion } from "framer-motion";
import next from "next";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Footer from "./footer";

export default function Hero() {
  return (
    //

    <section className="min-h-screen px-5 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:px-4 lg:pt-[25vh] bg-[radial-gradient(circle_at_15%_20%,#EDE9FE,transparent_35%),radial-gradient(circle_at_85%_15%,#DBEAFE,transparent_30%)]">
      <div className="absolute top-6 left-4 md:top-8 md:left-4 rounded-full shadow-lg shadow-blue-950">
        <Image
          src="/Images/myLogo.png"
          alt="bammyDev Logo"
          width={300}
          height={300}
          className="w-24 h-auto md:w-32 lg:w-40"
        />
      </div>

      {/* Top section - Left and Right */}
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between items-start justify-between md:gap-8 mt-14">
        {/* Left side */}
        <div className="md:w-1/2 w-full">
          <p className="text-sm text-[#584b8c] m-0 font-bold text-[12px] sm:text-xs ">
            &bull;AVAILABLE FOR WORK
          </p>

          <h1 className="text-5xl leading-[1.05] mt-4 text-[#24222d] font-extrabold text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px]">
            Creative Developer
            <br />
            based in Lagos,
            <br />
            Nigeria
          </h1>
          <Link href="/About">
            <button className="text-[#fafafa] rounded-full bg-black px-4 text-sm py-2 mt-4 transition hover:scale-105">
              Developer profile
            </button>
          </Link>
        </div>

        {/* Right side */}
        <div className="w-full md:max-w-[350px]">
          <p className="sm:text-base text-sm text-[#24222d] leading-relaxed m-0 font-medium">
            Hi, I'm Ayobami. I'm a passionate Frontend Developer who enjoys
            turning ideas and designs into responsive, user-friendly web
            experiences.
          </p>
          <Link href="/projects">
            {" "}
            <button className="text-[#fafafa] rounded-full bg-black px-4 text-sm py-2 mt-2 transition hover:scale-105">
              see my works{" "}
              <span className="rounded-full bg-white px-2 text-black">
                &rarr;
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex justify-center sm:mt-10 md:absolute md:left-1/2 md:top-[50%] md:mt-10 md:-translate-x-1/2 md:-translate-y-1/2 ">
        <Image
          src="/Images/Ayobami.png"
          alt="Ayobami"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* NEW SECTION BELOW */}
      <div className="flex flex-col gap-2 sm:mt-20 md:flex-row md:justify-between md:gap-0 lg:mt-32 items-start mt-16 md:mt-32">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold lg:text-[104px] text-[#24222d] leading-none sm:text-[60px] md:text-[70px]">
            AYOBAMI
          </h2>
        </div>

        <div className="w-full md:w-[350px]">
          <h2 className="text-3xl font-bold lg:text-[104px] text-[#24222d] leading-none sm:text-[60px] md:text-[70px]">
            AINA
          </h2>
        </div>
      </div>
    </section>
  );
}
