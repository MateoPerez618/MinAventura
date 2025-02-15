import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="w-full h-[80vh]">
      <Carousel.Item>
        <div className="carrusel-container bg-blue-500">
          <img src={`${import.meta.env.BASE_URL}images/Imagen2.jpeg`} alt="First slide" />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carrusel-container bg-green-500">
          <img src={`${import.meta.env.BASE_URL}images/Imagen3.jpeg`} alt="Second slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carrusel-container bg-red-500">
          <img src={`${import.meta.env.BASE_URL}images/Imagen4.jpeg`} alt="Third slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carrusel-container bg-green-500">
          <img src={`${import.meta.env.BASE_URL}images/Imagen6.jpeg`} alt="Second slide" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
