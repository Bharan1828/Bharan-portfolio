import AboutBg from "./AboutBg";
import AboutDesc from "./AboutDesc";
import Card from "./Card";

const SecondContainer = () => {
  return (
    <section
      id="About"
      className="flex min-h-screen flex-col gap-10 bg-lime-200 px-5 py-20 sm:px-8 md:px-10 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:px-8 xl:px-12"
    >
      <AboutDesc />
      <Card />
      <AboutBg />
    </section>
  );
};

export default SecondContainer;
