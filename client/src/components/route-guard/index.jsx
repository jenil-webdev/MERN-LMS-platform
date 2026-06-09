import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();

  console.log(authenticated, user, "useruser");

  // ✅ "/" hamesha allow - Home page sabko dikhega
  if (location.pathname === "/") {
    return <Fragment>{element}</Fragment>;
  }

  // Login nahi hai aur auth page nahi hai → login pe bhejo
  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" />;
  }

  // Student hai aur instructor ya auth page pe gaya → student home pe bhejo
  if (
    authenticated &&
    user?.role !== "instructor" &&
    (location.pathname.includes("instructor") ||
      location.pathname.includes("/auth"))
  ) {
    return <Navigate to="/student/home" />;
  }

  // Instructor hai aur instructor page pe nahi → instructor dashboard pe bhejo
  if (
    authenticated &&
    user?.role === "instructor" &&
    !location.pathname.includes("instructor")
  ) {
    return <Navigate to="/instructor" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;