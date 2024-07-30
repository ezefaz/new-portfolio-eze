// Import necessary modules
import React from "react";
import { Button } from "./ui/MovingBorders"; // Ensure this component exists and is correctly imported
import { workExperiences } from "@/data";

// Experience component
const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My work
        <span className="bg-gradient-to-r from-white via-[#AFDBFC] to-[#73BEFA] bg-clip-text text-transparent">
          {" "}
          experience
        </span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperiences.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-white border-2 border-transparent hover:border-sky-800 dark:hover:border-[#73BEFA] transition-colors duration-300"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-white text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
