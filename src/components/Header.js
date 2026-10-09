import React, { useEffect, useState } from "react";
import profilePhoto from "../assests/Profile_pic.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPhoto, setshowPhoto] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between gap-3 transition-all duration-300 ${
        scrolled ? "px-4 pt-3 sm:px-8" : "px-4 pt-4 sm:px-8 md:px-16"
      }`}
    >
      <div
        className={`relative shrink-0 ${
          scrolled
            ? "rounded-full bg-amber-100 px-3 py-2 shadow-md sm:px-6"
            : ""
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={profilePhoto}
            alt="Me"
            className="h-9 w-9 cursor-pointer rounded-full object-cover sm:h-10 sm:w-10"
            onMouseEnter={() => setshowPhoto(true)}
            onMouseLeave={() => setshowPhoto(false)}
            onClick={() => setshowPhoto(!showPhoto)}
          />

          {showPhoto && (
            <img
              src={profilePhoto}
              alt="Profile"
              className="absolute left-0 top-12 z-50 h-40 w-40 rounded-full border-4 border-amber-100 object-cover shadow-xl sm:left-14 sm:top-14 sm:h-64 sm:w-64"
              onMouseEnter={() => setshowPhoto(true)}
              onMouseLeave={() => setshowPhoto(false)}
            />
          )}

          <h1 className="whitespace-nowrap text-sm font-semibold text-blue-950 sm:text-lg">
            Bharan Kommula
          </h1>
        </div>
      </div>

      <div
        className={`hidden items-center gap-5 text-sm font-semibold text-blue-950 lg:flex xl:gap-10 xl:text-lg ${
          scrolled
            ? "rounded-full bg-amber-100 px-5 py-3 shadow-md xl:px-6"
            : ""
        }`}
      >
        <button onClick={() => scrollToSection("About")}>About</button>
        <button onClick={() => scrollToSection("Skills")}>Skills</button>
        <button onClick={() => scrollToSection("Projects")}>Projects</button>
        <button onClick={() => scrollToSection("Experience")}>
          Experience
        </button>
        <button onClick={() => scrollToSection("Contact")}>Contact</button>
      </div>

      <button
        className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-blue-950 shadow-md lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "Close ✕" : "Menu ☰"}
      </button>

      {menuOpen && (
        <div className="absolute right-4 top-full mt-3 flex min-w-40 flex-col gap-1 rounded-2xl bg-amber-100 p-3 text-sm font-semibold text-blue-950 shadow-lg sm:right-8">
          <button
            className="rounded-xl px-4 py-3 text-left hover:bg-amber-200"
            onClick={() => scrollToSection("About")}
          >
            About
          </button>
          <button
            className="rounded-xl px-4 py-3 text-left hover:bg-amber-200"
            onClick={() => scrollToSection("Skills")}
          >
            Skills
          </button>
          <button
            className="rounded-xl px-4 py-3 text-left hover:bg-amber-200"
            onClick={() => scrollToSection("Projects")}
          >
            Projects
          </button>
          <button
            className="rounded-xl px-4 py-3 text-left hover:bg-amber-200"
            onClick={() => scrollToSection("Experience")}
          >
            Experience
          </button>
          <button
            className="rounded-xl px-4 py-3 text-left hover:bg-amber-200"
            onClick={() => scrollToSection("Contact")}
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
