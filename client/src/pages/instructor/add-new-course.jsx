import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculum";
import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
import CourseSettings from "@/components/instructor-view/courses/add-new-course/course-settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import {
  addNewCourseService,
  fetchInstructorCourseDetailsService,
  updateCourseByIdService,
} from "@/services";
import { useContext, useEffect } from "react";
import { BarChart, ArrowLeft, Book, LogOut, GraduationCap } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

function AddNewCoursePage() {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCourseId,
    setCurrentEditedCourseId,
  } = useContext(InstructorContext);

  const { auth, resetCredentials } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams();

  console.log(params);

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }

    return value === "" || value === null || value === undefined;
  }

  function validateFormData() {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        return false;
      }
    }

    let hasFreePreview = false;

    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.videoUrl) ||
        isEmpty(item.public_id)
      ) {
        return false;
      }

      if (item.freePreview) {
        hasFreePreview = true; //found at least one free preview
      }
    }

    return hasFreePreview;
  }

  async function handleCreateCourse() {
    const courseFinalFormData = {
      instructorId: auth?.user?._id,
      instructorName: auth?.user?.userName,
      date: new Date(),
      ...courseLandingFormData,
      students: [],
      curriculum: courseCurriculumFormData,
      isPublised: true,
    };

    const response =
      currentEditedCourseId !== null
        ? await updateCourseByIdService(
          currentEditedCourseId,
          courseFinalFormData
        )
        : await addNewCourseService(courseFinalFormData);

    if (response?.success) {
      setCourseLandingFormData(courseLandingInitialFormData);
      setCourseCurriculumFormData(courseCurriculumInitialFormData);
      navigate(-1);
      setCurrentEditedCourseId(null);
    }

    console.log(courseFinalFormData, "courseFinalFormData");
  }

  async function fetchCurrentCourseDetails() {
    const response = await fetchInstructorCourseDetailsService(
      currentEditedCourseId
    );

    if (response?.success) {
      const setCourseFormData = Object.keys(
        courseLandingInitialFormData
      ).reduce((acc, key) => {
        acc[key] = response?.data[key] || courseLandingInitialFormData[key];

        return acc;
      }, {});

      console.log(setCourseFormData, response?.data, "setCourseFormData");
      setCourseLandingFormData(setCourseFormData);
      setCourseCurriculumFormData(response?.data?.curriculum);
    }

    console.log(response, "response");
  }

  useEffect(() => {
    if (currentEditedCourseId !== null) fetchCurrentCourseDetails();
  }, [currentEditedCourseId]);

  useEffect(() => {
    if (params?.courseId) setCurrentEditedCourseId(params?.courseId);
  }, [params?.courseId]);

  console.log(params, currentEditedCourseId, "params");

  // Replace the return statement with this:
  return (
    <div className="flex h-full min-h-screen bg-gray-100">
      {/* Sidebar - desktop */}
      <aside className="w-64 bg-white shadow-md hidden md:block shrink-0">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BarChart className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">Instructor View</h2>
          </div>
          <nav className="space-y-1">
            <Button
              className="w-full justify-start mb-1"
              variant="ghost"
              onClick={() => navigate("/instructor")}
            >
              <BarChart className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              className="w-full justify-start mb-1"
              variant="secondary"
              onClick={() => navigate("/instructor")}
            >
              <Book className="mr-2 h-4 w-4" />
              Courses
            </Button>
            <Button
              className="w-full justify-start mb-2 text-red-500 hover:text-red-600 hover:bg-red-100 border border-red-200 mt-4"
              variant="ghost"
              onClick={() => {
                resetCredentials();
                sessionStorage.clear();
                navigate("/auth");
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 p-4 flex items-center gap-3">
        <GraduationCap className="h-8 w-8" />
        <span className="font-extrabold text-xl">SkillForge</span>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-20 md:pt-0">
        <div className="container mx-auto p-5">
          <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 p-1 rounded-md hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Go Back</span>
        </button>
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-3xl font-extrabold">Create a new course</h1>
            <Button
              disabled={!validateFormData()}
              className="text-sm tracking-wider font-bold px-8"
              onClick={handleCreateCourse}
            >
              SUBMIT
            </Button>
          </div>
          <Card>
            <CardContent>
              <div className="container mx-auto">
                <Tabs defaultValue="curriculum" className="space-y-4 pt-3">
                  <TabsList className="w-full justify-start border overflow-x-auto overflow-y-hidden">
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="course-landing-page">
                      Course Landing Page
                    </TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="curriculum">
                    <CourseCurriculum />
                  </TabsContent>
                  <TabsContent value="course-landing-page">
                    <CourseLanding />
                  </TabsContent>
                  <TabsContent value="settings">
                    <CourseSettings />
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default AddNewCoursePage;