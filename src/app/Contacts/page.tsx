export default function Contact() {
  return (
    <div className="flex justify-center items-center ">
      <div className="py-20 max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <form className="space-y-4">
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Your Name"
          />
          <input className="w-full border p-3 rounded-lg" placeholder="Email" />
          <textarea
            className="w-full border p-3 rounded-lg"
            placeholder="Message"
          />
          <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-slate-500 transition-transform">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
