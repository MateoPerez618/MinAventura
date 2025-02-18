import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel2({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carrusel2">
      <Carousel activeIndex={index} onSelect={handleSelect} className="carrusel-container2">
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-image-container2">
              <img src={`${import.meta.env.BASE_URL}${slide.image}`} alt={`Slide ${i + 1}`} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Contenedor del título y descripción */}
      <div className="carrusel-text-container2">
        <h2 className="carrusel-title2">{slides[index].titulo}</h2>
        <p className="carrusel-description2">{slides[index].text}</p>
      </div>

    </div>
  );
}

export default ControlledCarousel2;
