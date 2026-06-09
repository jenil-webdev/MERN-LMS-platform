const courses = [
  { title: "LMS Platform",             author: "Hexagon", rating: 4.5, reviews: 4, price: 340,    original: 550,  gradient: "from-indigo-500 to-purple-600",  label: "BUILD LMS Platform" },
  { title: "Dart Programming Course",  author: "Hexagon", rating: 4.5, reviews: 4, price: 1999,   original: 2999, gradient: "from-rose-500 to-red-600",        label: "Flutter & Dart Programming" },
  { title: "Movie Booking",            author: "Hexagon", rating: 4.5, reviews: 4, price: 129,    original: 200,  gradient: "from-slate-800 to-slate-900",     label: "⚛ Movie Booking React",      labelColor: "text-cyan-400" },
  { title: "Task Manager App",         author: "Hexagon", rating: 4.7, reviews: 3, price: 898.97, original: 999,  gradient: "from-gray-900 to-slate-800",      label: "Task Manager MERN Stack" },
  { title: "Food Delivery Website",    author: "Hexagon", rating: 4.8, reviews: 4, price: 199,    original: 399,  gradient: "from-orange-500 to-orange-600",   label: "Food Delivery Website" },
  { title: "Grocery Delivery Web App", author: "Hexagon", rating: 4.7, reviews: 3, price: 333,    original: 444,  gradient: "from-green-600 to-green-700",     label: "Grocery Delivery Web App" },
  { title: "Car Rental Website",       author: "Hexagon", rating: 4.3, reviews: 3, price: 299,    original: 499,  gradient: "from-slate-900 to-gray-900",      label: "Car Rental MERN Stack" },
];

const Stars = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`text-sm ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`}>★</span>
      ))}
    </div>
  );
};

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-2xl shadow shadow-indigo-100 overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-200 transition-all cursor-pointer">
    <div className={`h-36 bg-gradient-to-br ${course.gradient} flex items-center justify-center p-3`}>
      <span className={`text-xs font-bold text-center leading-tight ${course.labelColor || "text-white"}`}>
        {course.label}
      </span>
    </div>
    <div className="p-3.5">
      <p className="text-sm font-semibold text-indigo-600 mb-1">{course.title}</p>
      <p className="text-xs text-gray-400 mb-2">
        <i className="fa-regular fa-user mr-1"></i>{course.author}
      </p>
      <div className="flex items-center gap-1.5 mb-2.5">
        <Stars rating={course.rating} />
        <span className="text-xs text-gray-500">{course.rating} ({course.reviews})</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-bold text-green-500">₹{course.price}</span>
        <span className="text-xs text-gray-400 line-through">₹{course.original}</span>
      </div>
    </div>
  </div>
);

const Courses = () => {
  return (
    <section
      id="courses"
      className="py-16 px-14 bg-gradient-to-b from-indigo-50 to-fuchsia-100"
    >
      <div className="text-center mb-11">
        <h2 className="text-3xl font-bold text-indigo-600">
          ✦ Explore Top <span className="text-fuchsia-500">Courses</span> ✦
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white px-10 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer border-none flex items-center gap-2">
          Discover Courses →
        </button>
      </div>
    </section>
  );
};

export default Courses;