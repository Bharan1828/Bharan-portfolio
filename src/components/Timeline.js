const Timeline = () => {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-blue-950 sm:block"></div>

      <div className="relative mb-12 grid grid-cols-1 items-center gap-4 sm:mb-24 sm:grid-cols-2 sm:gap-0">
        <div className="pr-0 text-left sm:pr-8 sm:text-right">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-6xl">
            2020
          </h1>
        </div>

        <div className="relative pl-0 sm:pl-8">
          <div className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 sm:block"></div>

          <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
              Intermediate (MPC)
            </p>
            <h2 className="text-xl font-bold text-gray-900">
              Aditya Junior College
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Rajahmundry, Andhra Pradesh
            </p>
            <div className="mt-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-950">
                Score: 80.3%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-12 grid grid-cols-1 items-center gap-4 sm:mb-24 sm:grid-cols-2 sm:gap-0">
        <div className="relative order-2 pl-0 sm:order-1 sm:pr-8">
          <div className="absolute -right-2 top-1/2 hidden h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 sm:block"></div>

          <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
              Education
            </p>
            <h2 className="text-xl font-bold text-gray-900">
              B.Tech in CSE (AI & ML)
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Godavari Institute of Engineering and Technology
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Velugubanda, Andhra Pradesh
            </p>
            <p className="mt-3 text-sm font-semibold">2022 – 2026</p>
            <div className="mt-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-950">
                CGPA: 8/10
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 pl-0 sm:order-2 sm:pl-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-6xl">
            2022
          </h1>
        </div>
      </div>

      <div className="relative grid grid-cols-1 items-center gap-4 sm:grid-cols-2 sm:gap-0">
        <div className="pr-0 text-left sm:pr-8 sm:text-right">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-6xl">
            2025
          </h1>
        </div>

        <div className="relative pl-0 sm:pl-8">
          <div className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 sm:block"></div>

          <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
              Experience
            </p>
            <h2 className="text-xl font-bold text-gray-900">
              Java Full Stack Development Trainee
            </h2>
            <p className="mt-2 text-sm text-gray-500">TechWing</p>
            <p className="mt-3 text-sm font-semibold text-gray-800">Skills</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Angular", "Spring Boot", "Core Java", "MySQL"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-950"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
