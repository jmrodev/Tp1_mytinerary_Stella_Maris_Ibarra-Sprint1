import React, { useState } from "react";
import styled from "styled-components";
import { data } from '../../utlis/enums';

const CarouselGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;

const CarouselImage = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const CarouselButton = styled.button`
  color: white;
  background-color: #eb118a;
  padding: 8px;
  margin: 0 5px;
`;

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
    data[9].href
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

  return (
    <>
      <CarouselGrid>
        {Array.from({ length: 2 }).map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {Array.from({ length: 2 }).map((_, colIndex) => {
              const index = (startIndex + rowIndex * 2 + colIndex) % images.length;
              return (
                <CarouselImage
                  key={colIndex}
                  src={images[index]}
                  alt=""
                  className=" loaded aspect-video"
                />
              );
            })}
          </React.Fragment>
        ))}
      </CarouselGrid>
      
      <CarouselButtonContainer>
        <CarouselButton onClick={previous}>{"<"}</CarouselButton>
        <CarouselButton onClick={next}>{">"}</CarouselButton>
      </CarouselButtonContainer>
    </>
  );
}
