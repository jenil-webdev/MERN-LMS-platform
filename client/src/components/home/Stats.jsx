const stats = [
  { number: "12,000+", label: "Active Students" },
  { number: "150+",    label: "Total Courses" },
  { number: "45+",     label: "Expert Instructors" },
  { number: "98%",     label: "Success Rate" },
];

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 py-9 px-14 flex justify-center">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`text-center flex-1 max-w-[220px] px-5 ${
            i !== stats.length - 1 ? "border-r border-white/25" : ""
          }`}
        >
          <div className="text-3xl font-extrabold text-white">{stat.number}</div>
          <div className="text-sm text-white/80 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;