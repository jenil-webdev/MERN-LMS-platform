const FloatingIcon = ({ label, bg, textColor, className }) => (
  <div
    className={`absolute w-14 h-14 rounded-2xl flex items-center justify-center shadow-md animate-bounce ${bg} ${className}`}
    style={{ animationDuration: "3s" }}
  >
    <span className={`text-xs font-extrabold ${textColor}`}>{label}</span>
  </div>
);

const Hero = () => {
  return (
    <section className="min-h-[88vh] bg-gradient-to-br from-indigo-50 via-purple-50 to-fuchsia-100 flex items-center justify-center relative overflow-hidden px-14 py-16">
      {/* Floating Icons */}
      <FloatingIcon label="HTML" bg="bg-orange-100" textColor="text-orange-500" className="left-[5%] top-[18%]" />
      <FloatingIcon label="CSS" bg="bg-blue-100" textColor="text-blue-500" className="right-[4%] top-[20%]" />
      <FloatingIcon label="⚛" bg="bg-slate-800" textColor="text-cyan-400" className="left-[4%] bottom-[18%]" />
      <FloatingIcon label="Docker" bg="bg-sky-100" textColor="text-sky-600" className="right-[4%] bottom-[18%]" />

      {/* Card */}
      <div className="bg-white rounded-3xl px-16 py-14 max-w-5xl w-full flex items-center gap-16 shadow-xl shadow-indigo-100">
        {/* Content */}
        <div className="flex-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs px-4 py-1.5 rounded-full border border-indigo-200 mb-5">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            New Features Available
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold italic leading-tight mb-4 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
            BUILD AMAZING<br />DIGITAL PRODUCTS
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 leading-relaxed italic mb-6">
            Create beautiful, responsive web applications with our<br />
            powerful tools and components. Start building your next<br />
            project today.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            {["Easy to Use", "Fast & Secure", "24/7 Support", "Free Updates"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-green-500 text-base"></i>
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer border-none">
              Get Started
            </button>
            <button className="bg-white text-gray-600 px-8 py-3 rounded-xl font-medium text-sm border border-gray-200 hover:border-purple-300 hover:text-indigo-600 transition-all cursor-pointer">
              View Demo
            </button>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex-shrink-0 w-[340px]">
          <div
            className="w-full h-64 rounded-2xl shadow-2xl shadow-indigo-200 flex items-center justify-center overflow-hidden"
            style={{ transform: "rotate(3deg)", background: "linear-gradient(135deg, #fde8d8, #fcd5b8)" }}
          >
            <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="340" height="260" fill="#fde8d8" />
              <circle cx="170" cy="120" r="65" fill="#f5a473" />
              <circle cx="170" cy="84" r="36" fill="#e8825a" />
              <rect x="134" y="104" width="72" height="52" rx="8" fill="#d4634a" />
              <circle cx="156" cy="82" r="7" fill="white" opacity="0.8" />
              <circle cx="184" cy="82" r="7" fill="white" opacity="0.8" />
              <circle cx="156" cy="82" r="3.5" fill="#333" />
              <circle cx="184" cy="82" r="3.5" fill="#333" />
              <path d="M156 98 Q170 106 184 98" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
              <rect x="70" y="175" width="200" height="26" rx="6" fill="#e8a87c" opacity="0.5" />
              <text x="170" y="235" textAnchor="middle" fill="#c4714d" fontSize="12" fontWeight="600">Learning is Fun! 🎨</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;