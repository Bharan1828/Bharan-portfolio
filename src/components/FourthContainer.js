const FourthContainer = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen bg-sky-200 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
    >
      <div className="pt-20 sm:pt-24 lg:ml-4">
        <p className="mb-5 text-sm text-gray-500 sm:mb-6">03 ──── PROJECTS</p>

        <h1 className="text-4xl font-bold text-blue-950 sm:text-5xl">
          Projects
        </h1>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 sm:mt-10 xl:grid-cols-2">
        <div className="flex min-h-64 flex-col overflow-hidden rounded-lg bg-blue-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:flex-row">
          <div className="flex min-h-40 w-full items-center justify-center bg-gradient-to-br from-blue-950 via-purple-900 to-indigo-700 p-5 sm:min-h-0 sm:w-2/5">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">NETFLIX</h2>
              <h3 className="text-2xl font-semibold text-purple-300">GPT</h3>
              <p className="mt-3 text-sm text-gray-200">
                AI Movie Recommendations
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
              Netflix-GPT
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              NetflixGPT is a React-based movie streaming UI using TMDB for
              movie data and GPT-powered search for personalized
              recommendations.
            </p>

            <div className="mt-4">
              <span className="text-sm font-medium text-blue-950">
                React • Redux • Firebase
              </span>
            </div>

            <a
              href="https://github.com/Bharan1828/NetFlix-GPT"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-blue-950 px-4 py-2 text-sm text-white transition hover:bg-blue-800"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="flex min-h-64 flex-col overflow-hidden rounded-lg bg-blue-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:flex-row">
          <div className="flex min-h-40 w-full items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300 p-5 sm:min-h-0 sm:w-2/5">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-950">
                FOOD ORDERING
              </h2>
              <p className="mt-3 text-sm text-blue-950">
                Full Stack Application
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
              Food Ordering
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              A full-stack food ordering platform with authentication, menu
              browsing, cart management, and order processing.
            </p>

            <div className="mt-4">
              <span className="text-sm font-medium text-blue-950">
                Angular • Spring Boot • MySQL
              </span>
            </div>

            <a
              href="https://github.com/Bharan1828/FoodOnlineOrderingSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-blue-950 px-4 py-2 text-sm text-white transition hover:bg-blue-800"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="flex min-h-64 flex-col overflow-hidden rounded-lg bg-blue-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:flex-row">
          <div className="flex min-h-40 w-full items-center justify-center bg-gradient-to-br from-violet-500 via-purple-300 to-fuchsia-300 p-5 sm:min-h-0 sm:w-2/5">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">ORDER TRACKING</h2>
              <p className="mt-3 text-sm text-purple-100">
                REST API Application
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
              Order Tracking
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              A Spring Boot REST API for managing customer orders, status
              updates, and order retrieval.
            </p>

            <div className="mt-4">
              <span className="text-sm font-medium text-blue-950">
                Java • Spring Boot • MySQL
              </span>
            </div>

            <a
              href="https://github.com/Bharan1828/OrderTrackingSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-blue-950 px-4 py-2 text-sm text-white transition hover:bg-blue-800"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="flex min-h-64 flex-col overflow-hidden rounded-lg bg-blue-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:flex-row">
          <div className="flex min-h-40 w-full items-center justify-center bg-gradient-to-br from-emerald-100 via-green-200 to-teal-300 p-5 sm:min-h-0 sm:w-2/5">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-950">
                MEN'S FASHION
              </h2>
              <p className="mt-3 text-sm text-gray-700">HTML • CSS</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
              E-Commerce
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              A responsive men's clothing e-commerce website built with HTML and
              CSS, featuring organized products and smooth navigation.
            </p>

            <div className="mt-4">
              <span className="text-sm font-medium text-blue-950">
                HTML • CSS
              </span>
            </div>

            <a
              href="https://github.com/Bharan1828/E-Commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-blue-950 px-4 py-2 text-sm text-white transition hover:bg-blue-800"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthContainer;
