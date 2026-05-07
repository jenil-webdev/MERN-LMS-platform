import { GraduationCap, TvMinimalPlay, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth-context";
import { useLocation } from "react-router-dom";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="border-b bg-white relative">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/home" className="flex items-center hover:text-black">
          <GraduationCap className="h-8 w-8 mr-2" />
          <span className="font-extrabold md:text-2xl text-[16px]">
            SkillForge
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
            className="text-[16px] font-medium"
          >
            Explore Courses
          </Button>
          <div
            onClick={() => navigate("/student-courses")}
            className="flex cursor-pointer items-center gap-2"
          >
            <span className="font-extrabold text-xl">My Courses</span>
            <TvMinimalPlay className="w-6 h-6" />
          </div>
          <Button onClick={handleLogout}>Sign Out</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-2 shadow-md">
          <button
            className={`w-full text-left px-3 py-2 rounded-md font-medium ${location.pathname.includes("/courses")
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
              }`}
            onClick={() => {
              setMenuOpen(false);
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
          >
            Explore Courses
          </button>
          <button
            className={`w-full text-left px-3 py-2 rounded-md font-medium ${location.pathname.includes("/student-courses")
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
              }`}
            onClick={() => {
              setMenuOpen(false);
              navigate("/student-courses");
            }}
          >
            My Courses
          </button>
          <button
            className="w-full text-left px-3 py-2 rounded-md text-red-500 hover:bg-red-100 font-medium border border-red-400"
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
}

export default StudentViewCommonHeader;