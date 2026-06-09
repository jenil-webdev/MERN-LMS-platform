const testimonials = [
  {
    course:  "React Masterclass",
    name:    "Aarav Patel",
    role:    "Frontend Learner",
    initials:"AP",
    rating:  4,
    text:    "The React Masterclass helped me land my first internship. Projects were practical, and the instructor explained complex topics simply.",
    year:    2025,
  },
  {
    course:  "Advanced UI Design",
    name:    "Maya Singh",
    role:    "UI/UX Designer",
    initials:"MS",
    rating:  4,
    text:    "Design thinking modules were brilliant — hands-on tasks made the concepts stick. The UI examples were gorgeous and practical.",
    year:    2025,
  },
  {
    course:  "Fullstack Bootcamp",
    name:    "Rohan Verma",
    role:    "Fullstack Student",
    initials:"RV",
    rating:  4,
    text:    "I built a production-ready portfolio in 6 weeks. The community and project feedback pushed me forward — highly recommended.",
    year:    2025,
  },
];

const Stars = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map((s) => (
      <span key={s} className={`text-sm ${s <= rating ? "text-amber-400" : "text-gray-300"}`}>★</span>
    ))}
  </div>
);

const TestiCard = ({ t }) => (
  <div className="bg-white rounded-2xl p-6 shadow shadow-indigo-100">
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span>
        {t.course}
      </div>
      <span className="text-gray-200 text-3xl leading-none">"</span>
    </div>

    {/* User */}
    <div className="flex items-center gap-3 mb-3">
      <div className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0">
        {t.initials}
      </div>
      <div>
        <p className="text-sm font-bold text-gray-800">{t.name}</p>
        <p className="text-xs text-indigo-500">{t.role}</p>
      </div>
      <div className="ml-auto">
        <Stars rating={t.rating} />
      </div>
    </div>

    {/* Text */}
    <p className="text-xs text-gray-500 leading-relaxed mb-4">"{t.text}"</p>

    {/* Footer */}
    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
      <span className="flex items-center gap-1 text-xs text-green-500">
        <i className="fa-solid fa-circle-check"></i> Verified Student
      </span>
      <span className="flex items-center gap-1 text-xs text-gray-400">
        <i className="fa-regular fa-calendar"></i> {t.year}
      </span>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 px-14 bg-gradient-to-b from-indigo-50 to-fuchsia-100">
      <div className="text-center mb-11">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs text-gray-500 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span>
          Student Testimonials
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
          Voices of Success
        </h2>
        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          Discover how our learners transformed their careers with hands-on projects and<br />expert mentorship.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <TestiCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;