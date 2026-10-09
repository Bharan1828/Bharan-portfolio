const AboutDesc = () => {
  return (
    <div className="mt-6 w-full min-w-0 sm:mt-10 lg:mt-12 lg:w-[42%] xl:w-[40%]">
      <p className="mb-5 text-sm text-gray-500 sm:mb-6">01 ──── ABOUT</p>

      <h1 className="text-4xl font-bold text-blue-950 sm:text-5xl md:text-6xl xl:text-7xl">
        Hi, I'm <span className="font-serif font-normal">Bharan.</span>
      </h1>

      <p className="mt-4 text-base leading-relaxed text-blue-950 sm:text-lg">
        I’m a Java Full Stack Developer skilled in building scalable
        applications using Java, React, MySQL, and modern backend technologies.
        I’m passionate about turning ideas into clean, functional, and impactful
        applications. I work across frontend, backend, APIs, databases, and
        creative web development to build complete web solutions.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4 xl:mt-16">
        <a
          href="/Bharan_Resume%20(2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-amber-200 px-5 py-3 font-semibold text-blue-950 transition hover:bg-amber-300 sm:px-6"
        >
          📄 Resume
        </a>

        <a
          href="https://github.com/Bharan1828"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-blue-950 bg-lime-100 px-5 py-3 transition hover:bg-lime-300 sm:px-6"
        >
          🐙 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/bharankommula/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-blue-950 bg-lime-100 px-5 py-3 transition hover:bg-lime-300 sm:px-6"
        >
          🔗 LinkedIn
        </a>
      </div>
    </div>
  );
};

export default AboutDesc;
