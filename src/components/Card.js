import React, { useState } from "react";
import Id from "../assests/Id.png";

const Card = () => {
  const [isFlipped, setisFlipped] = useState(false);

  return (
    <div
      className="mx-auto mt-4 h-[450px] w-full max-w-[320px] sm:mt-6 sm:h-[480px] lg:mx-0 lg:mt-12 lg:shrink-0"
      onMouseEnter={() => setisFlipped(true)}
      onMouseLeave={() => setisFlipped(false)}
      onClick={() => setisFlipped(!isFlipped)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute h-full w-full overflow-hidden rounded-2xl bg-blue-100 shadow-2xl [backface-visibility:hidden]">
          <div className="rounded-t-lg bg-blue-950 px-4 py-4 text-white sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-bold text-blue-950">
                BK
              </div>

              <div>
                <p className="text-xl font-bold sm:text-2xl">Developer ID</p>
                <span className="text-sm">Portfolio - 2026</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              alt="Profile pic"
              src={Id}
              className="mt-4 h-40 w-40 rounded-lg border-2 border-black object-cover shadow-2xl sm:h-44 sm:w-44"
            />

            <h1 className="pt-2 text-lg font-semibold text-blue-950 sm:text-xl">
              BHARAN KOMMULA
            </h1>

            <p className="pt-1 text-xs text-gray-500">
              Java Full Stack Developer
            </p>
          </div>

          <div className="mt-7 flex justify-center gap-3 px-3 sm:gap-4">
            <p className="w-20 text-center text-xs text-gray-500">
              ID-NO
              <br />
              <span className="text-lg font-semibold text-black">BK-4228</span>
            </p>

            <p className="w-20 text-center text-xs text-gray-500">
              DEPT
              <br />
              <span className="text-base font-semibold text-black sm:text-lg">
                CSE(AIML)
              </span>
            </p>

            <p className="w-20 text-center text-xs text-gray-500">
              BATCH
              <br />
              <span className="text-lg font-semibold text-black">2026</span>
            </p>
          </div>
        </div>

        <div className="absolute h-full w-full overflow-hidden rounded-2xl bg-blue-100 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="px-4 sm:px-6">
            <h1 className="mt-4 text-3xl font-bold text-blue-950 sm:text-4xl">
              What I am
            </h1>

            <div>
              <p className="py-4 text-xl text-blue-950 sm:text-2xl">
                ➜
                <span className="ml-2 font-semibold">Full Stack Developer</span>
              </p>
              <p className="-mt-3 ml-8 text-xs">
                React.js • MySQL • Modern Backends
              </p>
            </div>

            <div>
              <p className="mt-4 text-xl text-blue-950 sm:text-2xl">
                ➜
                <span className="px-2 text-lg font-semibold sm:text-xl">
                  Java Developer
                </span>
              </p>
              <p className="ml-8 mt-1 text-xs">
                Java • Spring Boot • REST APIs
              </p>
            </div>

            <div>
              <p className="mt-4 text-xl text-blue-950 sm:text-2xl">
                ➜
                <span className="px-2 text-lg font-semibold sm:text-xl">
                  React Developer
                </span>
              </p>
              <p className="ml-8 mt-1 text-xs">
                React.js • JavaScript • Responsive UI
              </p>
            </div>

            <div>
              <p className="mt-4 text-xl text-blue-950 sm:text-2xl">
                ➜
                <span className="px-2 text-lg font-semibold sm:text-xl">
                  Software Developer
                </span>
              </p>
              <p className="ml-8 mt-1 text-xs">
                Backend Development • APIs • Databases
              </p>
            </div>

            <div>
              <p className="mt-4 text-xl text-blue-950 sm:text-2xl">
                ➜
                <span className="px-2 text-lg font-semibold sm:text-xl">
                  Problem Solver
                </span>
              </p>
              <p className="ml-8 mt-1 text-xs">
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
