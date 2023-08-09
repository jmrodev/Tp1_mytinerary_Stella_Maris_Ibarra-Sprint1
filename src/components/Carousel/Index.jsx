import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { data } from '../../utlis/enums'


const CarouselImag = styled.img`
  max-width: 500px;
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
  aling-content: center;
  flex-direction: row;
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
  ];
  const [selectdIndex, setSelecIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectdIndex < images.length - 1
        : selectdIndex > 0;
      const nextIndex = next
        ? (condition
          ? selectdIndex + 1
          : 0)
        : condition
        ? selectdIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelecIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectdIndex, images, false);
  };
  const next = () => {
    selectNewImage(selectdIndex, images);
  };

  return (
    <>
      <CarouselImag
        src={`${selectedImage}`}
        alt=""
        className=  {loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
      
      <CarouselButtonContainer>
        <CarouselButton onClick={previous}>{"<"}</CarouselButton>
        <CarouselButton onClick={next}>{">"}</CarouselButton>
      </CarouselButtonContainer>
    </>
  );
}
