const ThirdContainer = () => {
  return (
    <section id="Skills" className="min-h-screen bg-indigo-200 pb-20">
      {/* Heading */}
      <div className="pt-24 ml-16">
        <p className="text-gray-400 mb-6">02 ──── SKILLS</p>

        <h1 className="text-5xl text-blue-950 font-bold">Skills</h1>

        <h1 className="text-2xl text-blue-950 font-semibold pt-4">
          Technologies I Worked With
        </h1>
      </div>

      {/* Skill Cards */}
      <div className="flex gap-8 ml-16 mt-20">
        {/* FRONTEND */}
        <div
          className="relative w-72 h-72 bg-blue-100 shadow-lg rounded-lg
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300"
        >
          <h1 className="pt-6 text-center font-semibold text-blue-950">
            FRONTEND
          </h1>

          <hr className="w-40 mx-auto mt-2 border-blue-950 border-t-2" />

          <div className="mt-5 px-8 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="icon"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">React.js</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="icon2"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">JavaScript</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="icon3"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">HTML</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="icon4"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div
          className="relative w-72 h-72 bg-blue-100 shadow-lg rounded-lg
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300"
        >
          <h1 className="pt-6 text-center font-semibold text-blue-950">
            BACKEND
          </h1>

          <hr className="w-40 mx-auto mt-2 border-blue-950 border-t-2" />

          <div className="mt-5 px-10 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="bicon"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">Java</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                alt="bicon2"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">Spring Boot</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg"
                alt="bicon3"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">Hibernate</span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="w-7 h-7 flex items-center justify-center
                               bg-blue-950 text-white rounded text-xs font-bold"
              >
                API
              </span>

              <span className="text-blue-950 font-medium">REST APIs</span>
            </div>
          </div>
        </div>

        {/* DATABASE */}
        <div
          className="relative w-72 h-72 px-4 bg-blue-100 shadow-lg rounded-lg
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300"
        >
          <h1 className="pt-6 text-center font-semibold text-blue-950">
            DATABASE
          </h1>

          <hr className="w-40 mx-auto mt-2 border-blue-950 border-t-2" />

          <div className="mt-5 px-8 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="dicon"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">MySQL</span>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 flex items-center justify-center
                              bg-blue-950 text-white rounded text-xs font-bold"
              >
                SQL
              </div>

              <span className="text-blue-950 font-medium">SQL</span>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div
          className="relative w-72 h-72 bg-blue-100 shadow-lg rounded-lg
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300"
        >
          <h1 className="pt-6 text-center font-semibold text-blue-950">
            TOOLS
          </h1>

          <hr className="w-40 mx-auto mt-2 border-blue-950 border-t-2" />

          <div className="mt-5 px-10 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="ticon"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">Git</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="ticon2"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">GitHub</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                alt="ticon3"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">Postman</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="ticon4"
                className="w-7 h-7"
              />
              <span className="text-blue-950 font-medium">VS Code</span>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 flex items-center justify-center
                              bg-green-600 text-white rounded text-xs font-bold"
              >
                STS
              </div>

              <span className="text-blue-950 font-medium">
                Spring Tool Suite
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdContainer;
