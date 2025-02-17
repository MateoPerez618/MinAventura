import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel1({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <div className="carrusel-container">
            <img src={`${import.meta.env.BASE_URL}${image}`} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel1;