import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-black items-center py-6 shadow-md shadow-slate-200 px-6  fixed w-full top-0 left-0 z-50">
      <h1 className="font-bold font-serif text-[#D4AF37]">Bammy.dev</h1>
      <div className="space-x-6 text-white">
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/Contacts">Contact</Link>
      </div>
    </nav>
  );
}
