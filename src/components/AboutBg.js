const AboutBg = () => {
  const facts = [
    ["Based in", "Rajahmundry, AP"],
    ["Studying", "B.Tech, CSE"],
    ["Batch", "2022 - 2026"],
    ["Interned at", "TechWing, 2025"],
    ["Focus", "Full Stack - Web Dev"],
  ];

  return (
    <div className="mt-4 w-full min-w-0 sm:mt-6 lg:mt-16 lg:flex-1 xl:ml-4">
      <h1 className="font-serif text-sm text-gray-500">QUICK FACTS</h1>

      <div className="mt-6 sm:mt-8">
        {facts.map(([label, value]) => (
          <div key={label}>
            <p className="mb-4 mt-4 flex items-start justify-between gap-4 text-sm sm:text-base">
              <span className="shrink-0 text-gray-500">{label}</span>
              <span className="text-right font-semibold text-blue-950">
                {value}
              </span>
            </p>

            <hr className="border-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBg;
