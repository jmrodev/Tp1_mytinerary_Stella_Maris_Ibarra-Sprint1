import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "../utlis/enums";


export default function Index() {
  const images = [
    data[0].href,
    data[1].href,
    data[2].href,
    data[3].href,
    data[4].href,
    data[5].href,
    data[6].href,
    data[7].href,
    data[8].href,
    data[9].href,
  ];

  const [startIndex, setStartIndex] = useState(0);

  const previous = () => {
    const newStartIndex = (startIndex - 4 + images.length) % images.length;
    setStartIndex(newStartIndex);
  };

  const next = () => {
    const newStartIndex = (startIndex + 4) % images.length;
    setStartIndex(newStartIndex);
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 p-6 m-auto align-middle">
        {Array.from({ length: 2 }).map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {Array.from({ length: 2 }).map((_, colIndex) => {
              const index =
                (startIndex + rowIndex * 2 + colIndex) % images.length;
              return (
                <img
                  key={colIndex}
                  src={images[index]}
                  alt=""
                  className=" loaded aspect-video"
                />
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-14 ">
        <button
          className="px-4 py-2 m-1 text-white bg-purple-600 rounded-full shadow-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
          onClick={previous}
        >
          {"<"}
        </button>
        <button
          className="px-4 py-2 m-1 text-white bg-purple-600 rounded-full shadow-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
          onClick={next}
        >
          {">"}
        </button>
      </div>
    </>
  );
}
