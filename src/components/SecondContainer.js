import AboutBg from "./AboutBg";
import AboutDesc from "./AboutDesc";
import Card from "./Card";

const SecondContainer = () => {
  return (
    <section id="About" className="min-h-screen bg-lime-200 flex">
      <AboutDesc />
      <Card />
      <AboutBg/>
    </section>
  );
};

export default SecondContainer;
