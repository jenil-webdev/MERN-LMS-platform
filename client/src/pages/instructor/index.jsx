import InstructorCourses from "@/components/instructor-view/courses";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import { fetchInstructorCourseListService } from "@/services";
import { BarChart, Book, LogOut, Menu, X, GraduationCap } from "lucide-react";
import { useContext, useEffect, useState } from "react";

function InstructorDashboardpage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const { resetCredentials } = useContext(AuthContext);
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    if (response?.success) setInstructorCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  // console.log(instructorCoursesList, "instructorCoursesList");

  return (
    <div className="flex h-full min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BarChart className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">Instructor View</h2>
          </div>
          <nav className="space-y-1">
            {menuItems.map((menuItem) =>
              menuItem.value === "logout" ? (
                <Button
                  key={menuItem.value}
                  className="w-full justify-start mb-2 text-red-500 hover:text-red-600 hover:bg-red-100 border border-red-200 mt-4"
                  variant="ghost"
                  onClick={handleLogout}
                >
                  <menuItem.icon className="mr-2 h-4 w-4" />
                  {menuItem.label}
                </Button>
              ) : (
                <Button
                  className="w-full justify-start mb-1"
                  key={menuItem.value}
                  variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                  onClick={() => setActiveTab(menuItem.value)}
                >
                  <menuItem.icon className="mr-2 h-4 w-4" />
                  {menuItem.label}
                </Button>
              )
            )}
          </nav>
        </div>
      </aside>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-extrabold text-2xl">SkillForge</span>
          </div>
          <button
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="border-t bg-white px-4 py-3 space-y-2 shadow-md">
            {menuItems.map((menuItem) =>
              menuItem.value === "logout" ? (
                <button
                  key={menuItem.value}
                  onClick={() => { setMenuOpen(false); handleLogout(); }}
                  className="w-full text-left px-3 py-2 rounded-md text-red-500 hover:bg-red-50 font-medium border border-red-200"
                >
                  <menuItem.icon className="inline mr-2 h-4 w-4" />
                  {menuItem.label}
                </button>
              ) : (
                <button
                  key={menuItem.value}
                  onClick={() => { setMenuOpen(false); setActiveTab(menuItem.value); }}
                  className={`w-full text-left px-3 py-2 rounded-md font-medium ${activeTab === menuItem.value
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                    }`}
                >
                  <menuItem.icon className="inline mr-2 h-4 w-4" />
                  {menuItem.label}
                </button>
              )
            )}
          </div>
        )}
      </div>
      <main className="flex-1 p-8 overflow-y-auto pb-20 md:pb-8 pt-24 md:pt-8 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-sm text-gray-500">Welcome back! 👋</p>
            <h1 className="text-3xl font-bold">{activeTab === "dashboard" ? "Dashboard" : activeTab === "courses" ? "Courses" : ""}</h1>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((menuItem) => (
              <TabsContent key={menuItem.value} value={menuItem.value}>
                {menuItem.component !== null ? menuItem.component : null}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default InstructorDashboardpage;
