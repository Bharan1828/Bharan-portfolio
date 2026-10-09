import React from "react";

const FourthContainer = () => {
  return (
    <section id="Projects" className="min-h-screen bg-sky-200">
      <div className="pt-4 ml-16">
        <p className="text-gray-400 mb-6">03 ──── PROJECTS</p>

        <h1 className="text-5xl text-blue-950 font-bold">Projects</h1>
      </div>

      <div className="flex flex-col gap-6 mt-8 mx-16">
        <div className="flex gap-8">
          <div className="w-1/2 h-64 bg-blue-100 shadow-lg rounded-lg flex overflow-hidden">
            <div className="w-1/2 bg-gradient-to-br from-blue-950 via-purple-900 to-indigo-700 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white">NETFLIX</h1>
                <h2 className="text-2xl font-semibold text-purple-300">GPT</h2>
                <p className="text-gray-200 text-sm mt-3">
                  AI Movie Recommendations
                </p>
              </div>
            </div>

            <div className="w-1/2 p-6">
              <h2 className="text-2xl font-bold text-blue-950">Netflix-GPT</h2>

              <p className="text-gray-600 mt-3 text-sm">
                NetflixGPT is a React-based movie streaming UI using TMDB for
                movie data and GPT-powered search for personalized
                recommendations.
              </p>

              <div className="mt-4">
                <span className="text-blue-950 text-sm font-medium">
                  React • Redux • Firebase
                </span>
              </div>

              <a
                href="https://github.com/Bharan1828/NetFlix-GPT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-950 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-800 transition"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="w-1/2 h-64 bg-blue-100 shadow-lg rounded-lg flex overflow-hidden">
            <div className="w-1/2 bg-gradient-to-br from-orange-100 to-orange-300 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-blue-950">
                  FOOD ORDERING
                </h1>

                <p className="text-blue-950 text-sm mt-3">
                  Full Stack Application
                </p>
              </div>
            </div>

            <div className="w-1/2 p-6">
              <h2 className="text-2xl font-bold text-blue-950">
                Food Ordering
              </h2>

              <p className="text-gray-600 mt-3 text-sm">
                A full-stack food ordering platform with authentication, menu
                browsing, cart management, and order processing.
              </p>

              <div className="mt-4">
                <span className="text-blue-950 text-sm font-medium">
                  Angular • Spring Boot • MySQL
                </span>
              </div>

              <a
                href="https://github.com/Bharan1828/FoodOnlineOrderingSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-950 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-800 transition"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-1/2 h-64 bg-blue-100 shadow-lg rounded-lg flex overflow-hidden">
            <div className="w-1/2 bg-gradient-to-br from-violet-500 via-purple-300 to-fuchsia-300 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">
                  ORDER TRACKING
                </h1>

                <p className="text-purple-100 text-sm mt-3">
                  REST API Application
                </p>
              </div>
            </div>

            <div className="w-1/2 p-6">
              <h2 className="text-2xl font-bold text-blue-950">
                Order Tracking
              </h2>

              <p className="text-gray-600 mt-3 text-sm">
                A Spring Boot REST API for managing customer orders, status
                updates, and order retrieval.
              </p>

              <div className="mt-4">
                <span className="text-blue-950 text-sm font-medium">
                  Java • Spring Boot • MySQL
                </span>
              </div>

              <a
                href="https://github.com/Bharan1828/OrderTrackingSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-950 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-800 transition"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="w-1/2 h-64 bg-blue-100 shadow-lg rounded-lg flex overflow-hidden">
            <div className="w-1/2 bg-gradient-to-br from-emerald-100 via-green-200 to-teal-300 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-blue-950">
                  MEN'S FASHION
                </h1>

                <p className="text-gray-700 text-sm mt-3">HTML • CSS</p>
              </div>
            </div>

            <div className="w-1/2 p-6">
              <h2 className="text-2xl font-bold text-blue-950">E-Commerce</h2>

              <p className="text-gray-600 mt-3 text-sm">
                A responsive men's clothing e-commerce website built with HTML
                and CSS, featuring organized products and smooth navigation.
              </p>

              <div className="mt-4">
                <span className="text-blue-950 text-sm font-medium">
                  HTML • CSS
                </span>
              </div>

              <a
                href="https://github.com/Bharan1828/E-Commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-950 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-800 transition"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthContainer;
