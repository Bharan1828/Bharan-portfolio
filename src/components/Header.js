import React, { useEffect, useState } from "react";
import profilePhoto from "../assests/Profile_pic.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPhoto, setshowPhoto] = useState(false);

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
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex justify-between
    ${scrolled ? "px-8 mt-4" : "px-16 pt-4 pb-2"}`}
    >
      <div
        className={`${
          scrolled ? "bg-amber-100 rounded-full px-6 py-2 shadow-md" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <img
            src={profilePhoto}
            alt="Me"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            onMouseEnter={() => setshowPhoto(true)}
            onMouseLeave={() => setshowPhoto(false)}
          />
          {showPhoto && (
            <img
              src={profilePhoto}
              alt="Profile"
              className="absolute w-64 h-64 top-14 left-14 rounded-full object-cover shadow-xl border-4 border-amber-100"
              onMouseEnter={() => setshowPhoto(true)}
              onMouseLeave={() => setshowPhoto(false)}
            />
          )}

          <h1 className="text-lg font-semibold text-blue-950">
            Bharan Kommula
          </h1>
        </div>
      </div>

      <div
        className={`flex gap-12 text-lg font-semibold text-blue-950
      ${scrolled ? "bg-amber-100 rounded-full px-6 py-2 shadow-md" : ""}`}
      >
        <button onClick={() => scrollToSection("About")}>About</button>
        <button onClick={() => scrollToSection("Skills")}>Skills</button>
        <button onClick={() => scrollToSection("Projects")}>Projects</button>
        <button onClick={() => scrollToSection("Experience")}>
          Experience
        </button>
        <button onClick={() => scrollToSection("Contact")}>Contact</button>
      </div>
    </div>
  );
};

export default Header;
