import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="w-full h-[80vh]">
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <div className="carrusel-container">
            <img src={`${import.meta.env.BASE_URL}${image}`} alt={`Slide ${i + 1}`} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
