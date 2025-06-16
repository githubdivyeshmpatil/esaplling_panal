import { useEffect, useState } from "react";
import CountUp from "react-countup";

const StatsCounter = () => {
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => prev + 1); // restart counter every 4s
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-center py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-Inter md:text-5xl font-bold text-black mb-2">
          <CountUp
            key={trigger}
            start={0}
            end={5}
            duration={3}
            delay={0}
          />{" "}
          Years in Business with
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          more than 1000 projects developed
        </p>
      </div>
    </section>
  );
};

export default StatsCounter;
