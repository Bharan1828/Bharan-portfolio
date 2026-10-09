import React from "react";

const AboutDesc = () => {
  return (
    <div className="w-[34%] ml-12 mt-28">
      <p className="text-gray-400 mb-6">01 ──── ABOUT</p>
      <h1 className="text-blue-950 font-bold text-7xl">
        Hi, I'm <span className="font-normal font-serif">Bharan.</span>
      </h1>
      <p className="text-blue-950 text-lg mt-4">
        I’m a Java Full Stack Developer skilled in building
        <br />
        scalable applications using Java, React, MySQL, and <br />
        modern backend technologies. I’m passionate about <br />
        turning ideas into clean,functional, and impactful applications.
        <br />
        I work across frontend, backend, APIs, databases, and creative
        <br />
        web development to build complete web solutions.
      </p>
      <div className="flex gap-8 mt-24">
        <a
          href="/Bharan_Resume (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-blue-950 bg-amber-200 rounded-full font-semibold"
        >
          📄 Resume
        </a>
        <a
          href="https://github.com/Bharan1828"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lime-100 rounded-full px-8 py-3 border border-blue-950"
        >
          🐙 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bharankommula/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lime-100 rounded-full px-8 py-3 border border-blue-950"
        >
          🔗 LinkedIn
        </a>
      </div>
    </div>
  );
};

export default AboutDesc;
