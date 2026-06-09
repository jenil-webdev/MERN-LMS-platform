const features = [
  { icon: "fa-laptop-code",   title: "Live Classes",        desc: "Interactive real-time sessions with expert instructors from anywhere.",      iconBg: "bg-indigo-100",  iconColor: "text-indigo-600" },
  { icon: "fa-certificate",   title: "Certificates",        desc: "Get industry-recognized certificates on course completion.",                  iconBg: "bg-green-100",   iconColor: "text-green-600" },
  { icon: "fa-user-graduate", title: "Expert Instructors",  desc: "Learn from professionals with real-world industry experience.",               iconBg: "bg-amber-100",   iconColor: "text-amber-600" },
  { icon: "fa-headset",       title: "24/7 Support",        desc: "Round-the-clock support to help you through every step of your journey.",    iconBg: "bg-pink-100",    iconColor: "text-pink-600" },
];

const Features = () => {
  return (
    <section id="about" className="py-16 px-14 bg-white">
      <div className="text-center mb-11">
        <h2 className="text-3xl font-bold text-indigo-600">
          Why Choose <span className="text-fuchsia-500">SkillForge?</span>
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="text-center p-8 rounded-2xl border border-indigo-100 hover:shadow-lg hover:shadow-indigo-100 transition-all"
          >
            <div className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <i className={`fa-solid ${f.icon} text-2xl ${f.iconColor}`}></i>
            </div>
            <h3 className="text-sm font-bold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;