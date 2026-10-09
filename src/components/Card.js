import React, { useState } from "react";
import Id from "../assests/Id.png";

const Card = () => {
  const [isFlipped, setisFlipped] = useState(false);

  return (
    <div
      className="w-80 h-[480px] mt-28 ml-12"
      onMouseEnter={() => setisFlipped(true)}
      onMouseLeave={() => setisFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute w-full h-full bg-blue-100 rounded-2xl shadow-2xl overflow-hidden [backface-visibility:hidden]">
          <div className="bg-blue-950 text-white px-6 py-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-950 font-bold">
                BK
              </div>

              <div>
                <p className="text-2xl font-bold">Developer ID</p>
                <span className="text-sm">Portfolio - 2026</span>
              </div>
            </div>
          </div>

          <div>
            <img
              alt="Profile pic"
              src={Id}
              className="w-44 h-44 rounded-lg ml-16 mt-4 border border-black border-t-2 border-l-2 border-r-2 shadow-2xl"
            />

            <h1 className="text-blue-950 text-xl font-semibold pl-14 pt-2">
              BHARAN KOMMULA
            </h1>

            <p className="text-xs pl-20 pt-1 text-gray-400">
              Java Full Stack Developer
            </p>
          </div>

          <div className="pt-8 ml-6 flex gap-4">
            <p className="text-xs text-gray-400 text-center w-20">
              ID-NO <br />
              <span className="text-black text-lg font-semibold">
                BK-4228
              </span>
            </p>

            <p className="text-xs text-gray-400 text-center w-20">
              DEPT <br />
              <span className="text-black text-lg font-semibold">
                CSE(AIML)
              </span>
            </p>

            <p className="text-xs text-gray-400 text-center w-20">
              BATCH <br />
              <span className="text-black text-lg font-semibold">2026</span>
            </p>
          </div>
        </div>
        <div className="absolute w-full h-full bg-blue-100 rounded-2xl shadow-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="ml-6">
            <h1 className="text-4xl font-bold mt-3 text-blue-950">
              What I am
            </h1>

            <div>
              <p className="text-blue-950 py-4 text-2xl">
                ➜
                <span className="text-2xl font-semibold ml-2">
                  Full Stack Developer
                </span>
              </p>
              <p className="text-xs ml-8 -mt-3">
                React.js • MySQL • Modern Backends
              </p>
            </div>

            <div>
              <p className="text-blue-950 mt-5 text-2xl">
                ➜
                <span className="text-xl font-semibold px-2">
                  Java Developer
                </span>
              </p>
              <p className="text-xs ml-8 mt-1">
                Java • Spring Boot • REST APIs
              </p>
            </div>

            <div>
              <p className="text-blue-950 mt-5 text-2xl">
                ➜
                <span className="text-xl font-semibold px-2">
                  React Developer
                </span>
              </p>
              <p className="text-xs ml-8 mt-1">
                React.js • JavaScript • Responsive UI
              </p>
            </div>

            <div>
              <p className="text-blue-950 mt-5 text-2xl">
                ➜
                <span className="text-xl font-semibold px-2">
                  Software Developer
                </span>
              </p>
              <p className="text-xs ml-8 mt-1">
                Backend Development • APIs • Databases
              </p>
            </div>

            <div>
              <p className="text-blue-950 mt-5 text-2xl">
                ➜
                <span className="text-xl font-semibold px-2">
                  Problem Solver
                </span>
              </p>
              <p className="text-xs ml-8 mt-1">
                Clean Code • Debugging • Logical Thinking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;