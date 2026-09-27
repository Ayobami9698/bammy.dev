import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const socialLinks = [
  {
    name: "Linkedin",
    handle: "ayobami-aina",
    href: "https://linkedin.com/in/ayobami-aina-9443883b4",
    icon: <FaLinkedin />,
  },
  {
    name: "Github",
    handle: "Ayobami9698",
    href: "https://linkedin.com/in/ayobami-aina-9443883b4",
    icon: <FaGithub />,
  },
  {
    name: "X",
    handle: "ayobami-aina",
    href: "https://linkedin.com/in/ayobami-aina-9443883b4",
    icon: <FaTwitter />,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-[radial-gradient(circle_at_15%_20%,#EDE9FE,transparent_35%),radial-gradient(circle_at_85%_15%,#DBEAFE,transparent_30%)] py-20 px-6">
      <div className=" w-full max-w-xl text-center mx-auto ">
        <h2 className="text-3xl font-extrabold mb-6 text-neutral-900">
          Contact Me
        </h2>
        <form className="space-y-4 mx-auto max-w-md">
          <input
            className="w-full border p-3 rounded-lg border-blue-950"
            placeholder="Your Name"
          />
          <input
            className="w-full border p-3 rounded-lg border-blue-950"
            placeholder="Email"
          />
          <textarea
            className="w-full border p-3 rounded-lg border-blue-950"
            placeholder="Message"
          />
          <button className="bg-neutral-900 text-white px-6 py-3 font-semibold rounded-lg hover:bg-slate-500 transition-transform">
            Send Message
          </button>
        </form>
      </div>

      <div className=" mx-auto  w-full max-w-md mt-12 md:mt-0">
        <div className="flex flex-col gap-5">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center justify-between rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
              >
                <div className=" flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors group-hover:bg-gray-900 group-hover:text-white">
                    {Icon}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-900 sm:text-base">
                      {social.name}
                    </p>
                    <p className="truncate text-xs text-gray-500 sm:text-sm">
                      {social.handle}
                    </p>
                  </div>
                </div>

                <FaLocationArrow className="ml-3 h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-900" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
