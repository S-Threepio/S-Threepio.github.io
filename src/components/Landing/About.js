import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";
import Bio from "./Bio";

const About = () => {
  const [shouldEnableScroll, setShouldEnableScroll] = useState(false);

  useEffect(() => {
    function handleResize() {
      const screenHeight = window.innerHeight;
      setShouldEnableScroll(screenHeight < 750);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex-col flex-1 w-screen overflow-y-scroll md:flex-row md:flex scrollbar-hide
      ${shouldEnableScroll ? "md:overflow-y-scroll" : "md:overflow-y-hidden"}`}
    >
      <div className="hidden md:flex h-full w-[40%] lg:bg-secondary "></div>
      <div className="flex flex-col items-center py-4 md:py-0 md:flex-row justify-center pad:right-[10%] pad:relative">
        <CardSection />
        <Bio />
      </div>
    </div>
  );
};

export default About;
