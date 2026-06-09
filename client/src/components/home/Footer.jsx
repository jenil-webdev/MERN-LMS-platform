const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-slate-50 to-indigo-50 pt-14 pb-7 px-14">
      <div className="grid grid-cols-4 gap-10 max-w-5xl mx-auto mb-10">

        {/* Brand */}
        <div>
          <a href="#" className="flex items-center gap-2 no-underline mb-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-400 flex items-center justify-center text-white font-extrabold text-xs">
              LMS
            </div>
            <span className="text-lg font-bold text-indigo-600">SkillForge</span>
          </a>
          <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
            Transform your learning journey with interactive courses and cutting-edge educational technology designed for modern learners.
          </p>
          <div className="flex gap-2.5 mt-5">
            {[
              { icon: "fa-twitter",    href: "#" },
              { icon: "fa-instagram",  href: "#" },
              { icon: "fa-linkedin-in",href: "#" },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 text-sm hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all no-underline"
              >
                <i className={`fa-brands ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-arrow-right text-indigo-500"></i> Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Courses",  icon: "fa-book-open",  href: "#courses"  },
              { label: "About Us", icon: "fa-users",      href: "#about"    },
              { label: "Faculty",  icon: "fa-user-tie",   href: "#faculty"  },
              { label: "Contact",  icon: "fa-envelope",   href: "#contact"  },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="flex items-center gap-2 text-xs text-gray-500 hover:text-indigo-600 no-underline transition-colors">
                  <i className={`fa-solid ${l.icon} text-purple-400`}></i>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-headset text-indigo-500"></i> Support
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Help Center",      icon: "fa-circle-question"  },
              { label: "Privacy Policy",   icon: "fa-shield-halved"    },
              { label: "Terms of Service", icon: "fa-file-lines"       },
              { label: "FAQs",             icon: "fa-circle-question"  },
            ].map((l) => (
              <li key={l.label}>
                <a href="#" className="flex items-center gap-2 text-xs text-gray-500 hover:text-indigo-600 no-underline transition-colors">
                  <i className={`fa-solid ${l.icon} text-purple-400`}></i>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-phone text-indigo-500"></i> Contact Us
          </h4>
          <div className="space-y-3.5">
            {[
              { icon: "fa-location-dot", bg: "bg-indigo-100", color: "text-indigo-600", text: "123 Triveni Nagar\nLucknow" },
              { icon: "fa-phone",        bg: "bg-blue-100",   color: "text-blue-600",   text: "+91 8299431275\nMon-Fri, 9AM-6PM" },
              { icon: "fa-envelope",     bg: "bg-green-100",  color: "text-green-600",  text: "hexagonsservices@gmail.com" },
            ].map((c) => (
              <div key={c.icon} className="flex items-start gap-3">
                <div className={`w-8 h-8 ${c.bg} ${c.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <i className={`fa-solid ${c.icon} text-sm`}></i>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-indigo-100 pt-5 max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-xs text-gray-400">© 2025 SkillForge. All rights reserved.</p>
        <div className="text-xs text-gray-500 bg-white border border-gray-200 px-4 py-2 rounded-lg">
          Design by <span className="text-indigo-600 font-semibold">HexagonDigitalServices</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;