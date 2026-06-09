import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const links = [
    { name: "Home", icon: "fa-house", href: "#" },
    { name: "Courses", icon: "fa-book-open", href: "#courses" },
    { name: "About", icon: "fa-address-card", href: "#about" },
    { name: "Contact", icon: "fa-envelope", href: "#contact" },
    { name: "My Courses", icon: "fa-bookmark", href: "#" },
  ];

  return (
    <nav className="flex items-center justify-between px-14 py-3 bg-white/85 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 no-underline">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-400 flex items-center justify-center text-white font-extrabold text-sm">
          LMS
        </div>
        <span className="text-xl font-bold text-indigo-600">SkillForge</span>
      </a>

      {/* Nav Links */}
      <div className="flex items-center gap-1">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-all no-underline
              ${active === link.name
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-500 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
          >
            <i className={`fa-solid ${link.icon} text-xs`}></i>
            {link.name}
          </a>
        ))}
      </div>

      {/* Login Button */}
      <button
      onClick={() => navigate("/login")}
      className="bg-gradient-to-r from-indigo-500 to-purple-400 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer border-none"
    >
      Login
    </button>
    </nav>
  );
};

export default Navbar;