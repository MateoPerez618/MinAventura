import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    
    <div className="carousel-container2">
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel2">
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-image-container2">
              <img src={`${import.meta.env.BASE_URL}${slide.image}`} alt={`Slide ${i + 1}`}/>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      
      {/* Texto dinámico */}
      <p className="carousel-text2">
        {slides[index].text}
      </p>
    </div>
  );
}

export default ControlledCarousel;