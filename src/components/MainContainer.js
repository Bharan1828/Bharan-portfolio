import Header from "./Header";

const MainContainer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-amber-100 bg-gradient-to-b from-amber-200 via-amber-100 to-amber-100">
      <Header />

      <div className="absolute left-1/2 top-28 -translate-x-1/2 whitespace-nowrap">
        <h1 className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[16rem] font-black tracking-widest bg-gradient-to-r from-amber-300/30 via-amber-200/40 to-amber-300/30 bg-clip-text text-transparent">
          BHARAN
        </h1>
      </div>

      <div className="absolute bottom-36 left-5 right-5 text-5xl font-bold text-blue-950 sm:bottom-40 sm:left-8 sm:text-6xl md:bottom-16 md:left-10 md:right-auto md:text-8xl">
        <h1>
          <span className="px-1 text-3xl sm:text-4xl md:text-5xl">Java</span>
          <br />
          Full Stack
          <br />
          Developer<span className="text-3xl sm:text-4xl md:text-5xl">.</span>
        </h1>
      </div>

      <div className="absolute bottom-8 left-5 right-5 flex flex-wrap gap-3 sm:left-8 sm:right-8 md:bottom-28 md:left-auto md:right-10 md:justify-end">
        <button
          onClick={() => scrollToSection("Projects")}
          className="rounded-full bg-blue-950 px-5 py-3 text-sm text-white transition hover:bg-blue-900 sm:px-6 sm:text-base"
        >
          Explore Work →
        </button>

        <a
          href="/Bharan_Resume%20(2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-amber-200 px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-amber-300 sm:px-6 sm:text-base"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default MainContainer;
