// components/Footer.tsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding / Name */}
        <div className="text-lg text-slate-300 font-semibold">Aina Ayobami</div>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Ayobami9698"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ayobami-aina-9443883b4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-300">
          &copy; {new Date().getFullYear()} Aina Ayobami. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
