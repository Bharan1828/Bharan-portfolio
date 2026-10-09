import React from "react";
import Header from "./Header";

const MainContainer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="relative min-h-screen bg-amber-100 bg-gradient-to-b from-amber-200 via-amber-100 to-amber-100">
      <div>
        <Header />
      </div>
      <div className="absolute  left-1/2 -translate-x-1/2 whitespace-nowrap">
        <h1 className="text-[16rem] font-black tracking-widest bg-gradient-to-r from-amber-300/30 via-amber-200/40 to-amber-300/30 bg-clip-text text-transparent ">
          BHARAN
        </h1>
      </div>
      <div className="absolute bottom-16 left-0 px-10 text-8xl font-bold text-blue-950">
        <h1>
          <span className="text-5xl px-2">Java</span>
          <br />
          Full Stack
          <br />
          Developer<span className="text-5xl">.</span>
        </h1>
      </div>
      <div className="absolute bottom-28 right-16 flex gap-4">
        <button
          onClick={() => scrollToSection("Projects")}
          className="px-6 py-3 text-white bg-blue-950 rounded-full"
        >
          Explore Work →
        </button>

        <a
          href="/Bharan_Resume (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-blue-950 bg-amber-200 rounded-full font-semibold"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default MainContainer;
