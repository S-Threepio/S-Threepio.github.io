import React, { useEffect, useState, useRef } from "react";
import CardSection from "./CardSection";
import Bio from "./Bio";

const About = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const [cardSectionHeight, setCardSectionHeight] = useState(0);
  const [bioSectionHeight, setBioSectionHeight] = useState(0);
  const [parentSectionHeight, setparentSectionHeight] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);
  const scala = 0.5;

  useEffect(() => {
    const parentHeight = parentRef.current.offsetHeight;

    // Check if any child component has a greater height than the parent
    if (cardSectionHeight > parentHeight || bioSectionHeight > parentHeight) {
      // Calculate the scale factor to fit the child components within the parent
      const newScaleFactor =
        parentHeight / Math.max(cardSectionHeight, bioSectionHeight);
      setScaleFactor(newScaleFactor * 0.95);
    } else {
      // Reset the scale factor if the child components fit within the parent
      setScaleFactor(1);
    }
  }, [cardSectionHeight, bioSectionHeight]);

  useEffect(() => {
    const parentObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const parentHeight = entry.contentRect.height;
        setparentSectionHeight(parentHeight);
      }
    });

    if (parentRef.current) {
      parentObserver.observe(parentRef.current);
    }

    return () => {
      parentObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={` flex-col sm:mt-0 md:flex-1 w-screen sm:overflow-y-scroll  md:flex-row md:flex scrollbar-hide
     `}
    >
      <div className="absolute hidden md:flex md:bg-secondary md:w-[40%] lg:w-[42%]  md:h-[100vh]"></div>
      <div
        ref={parentRef}
        className={`flex z-10 flex-col py-4 md:py-0 md:flex-row md:justify-center items-center`}
        style={{ transform: `scale(${scaleFactor})` }}
      >
        <CardSection
          setCardSectionHeight={setCardSectionHeight}
          scaleFactor={scaleFactor}
        />
        <Bio
          setBioSectionHeight={setBioSectionHeight}
          scaleFactor={scaleFactor}
        />
      </div>
    </div>
  );
};

export default About;
