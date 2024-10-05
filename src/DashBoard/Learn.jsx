import React, { useState, useRef, useEffect } from "react";
import Tiles from "../Buttons/StepTiles";
import FloatingButton from "../Buttons/FloatingButton";

const Learn = () => {
  const activeStar =
    "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg";
  const jumpHere =
    "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/5e4203031e39fc43d94371565fd0d369.svg";

  const data = {
    sections: [
      {
        id: 1,
        sectionName: "SECTION 1",
        unitName: "Discuss traveling solo",
        head: {
          content: "START",
          completed: false,
        },
        color: "tile-green",
        path: [
          {
            type: "star",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg",
            completed: false,
          },
          {
            type: "star",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg",
            completed: false,
          },
          {
            type: "chest",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/b841637c196f5be786d8b8578a42ffbf.svg",
            completed: false,
          },
          {
            type: "trophy",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/7d84afaa096ff1f1d3f8c86d6c2c9542.svg",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        sectionName: "SECTION 1",
        unitName: "Order food delivery",
        color: "tile-purple",
        head: {
          content: "JUMP HERE?",
          completed: false,
        },
        path: [
          {
            type: "star",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg",
            completed: false,
          },
          {
            type: "star",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg",
            completed: false,
          },
          {
            type: "chest",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/b841637c196f5be786d8b8578a42ffbf.svg",
            completed: false,
          },
          {
            type: "trophy",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/7d84afaa096ff1f1d3f8c86d6c2c9542.svg",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        sectionName: "SECTION 1",
        unitName: "Describe a day in college",
        color: "tile-caribbean-green",
        head: {
          content: "JUMP HERE?",
          completed: false,
        },
        path: [
          {
            type: "star",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg",
            completed: false,
          },
          {
            type: "star",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg",
            completed: false,
          },
          {
            type: "chest",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/b841637c196f5be786d8b8578a42ffbf.svg",
            completed: false,
          },
          {
            type: "trophy",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/7d84afaa096ff1f1d3f8c86d6c2c9542.svg",
            completed: false,
          },
        ],
      },
      {
        id: 4,
        sectionName: "SECTION 1",
        unitName: "Discuss your work experience",
        head: {
          content: "JUMP HERE?",
          completed: false,
        },
        color: "tile-pink",
        path: [
          {
            type: "star",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg",
            completed: false,
          },
          {
            type: "star",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg",
            completed: false,
          },
          {
            type: "chest",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/b841637c196f5be786d8b8578a42ffbf.svg",
            completed: false,
          },
          {
            type: "trophy",
            url: "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/7d84afaa096ff1f1d3f8c86d6c2c9542.svg",
            completed: false,
          },
        ],
      },
    ],
  };

  const [currentSection, setCurrentSection] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        console.log("scrolled");
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col w-[592px] mt-4 bg-white scroll-smooth">
      {/* Sticky Header */}
      <div className="sticky top-8 mt-9 w-full z-10">
        <div
          style={{
            backgroundColor: `var(--${data.sections[currentSection].color})`,
          }}
          className="text-white p-4 rounded-xl transition-colors duration-300"
        >
          <div className="flex">
            <img
              draggable={false}
              src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/e013fd27fc6bd1d2fea85fe707b615cd.svg"
            />
            <h2 className="font-bold font-din-round text-white opacity-75 text-[16px] ml-2">
              {data.sections[currentSection].sectionName}, UNIT{" "}
              {data.sections[currentSection].id}
            </h2>
          </div>
          <h3 className="text-[22px] font-din-round tracking-normal mt-1">
            {data.sections[currentSection].unitName}
          </h3>
        </div>
      </div>

      {/* Scrollable Tiles Section */}
      <div className="pt-20 w-full overflow-y-hidden">
        {data.sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="mb-40 h-[500px]"
          >
            <div className="flex flex-col justify-center items-center relative space-y-10 mt-6">
              <div className="relative flex flex-col items-center">
                <FloatingButton
                  color={section.color}
                  content={section.head.content}
                />
                <Tiles
                  color={section.color}
                  url={section.head.content === "START" ? activeStar : jumpHere}
                />
              </div>

              {/* Smooth S-Pattern Alignment */}
              <div className="flex flex-col justify-center items-center space-y-10">
                {section.path.map((step, idx) => {
                  // Alternate left and right for the S pattern
                  const sPatternClass =
                    idx % 2 === 0
                      ? "ml-auto pr-24" // Align to the right
                      : "mr-auto pl-24"; // Align to the left

                  return (
                    <div
                      key={idx}
                      className={`relative w-full ${sPatternClass}`}
                    >
                      {step.type === "chest" ? (
                        <img
                          draggable="false"
                          className="w-20 h-26"
                          src={`${step.url}`}
                        />
                      ) : (
                        <Tiles color={"tile-grey"} url={step.url} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

      
              {data.sections[index + 1] && (
                <div className="flex items-center justify-center w-full mt-10">
                    <div className="border-t-2 opacity-60 border-gray-300 flex-grow"></div>
                  <p className="text-[16px] mx-2 font-din-round text-[#AFAFAF] font-bold whitespace-nowrap">
                    {data.sections[index + 1]
                      ? `${data.sections[index + 1].unitName}`
                      : ""}
                  </p>
                  <div className="border-t-2 opacity-60 border-gray-300 flex-grow"></div>
                </div>
              )}
            </div>
          
        ))}
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 bg-white ml-[550px]  text-white p-4 rounded-xl border-2 border-[#E5E5E5] shadow-[0_3px_0_#E5E5E5] active:shadow-none active:translate-y-[5px] hover:bg-gray-100 transition"
        >
          <img src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/6a4aeae39e2054b3d9a33cc8e5a05816.svg" />
        </button>
      )}
    </div>
  );
};

export default Learn;
