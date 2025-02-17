import ControlledCarousel from "../ControlledCarousel2";

function Carrusel2() {
  const slidesData = [
    { image:"images/Imagen2.jpeg", text : "imagen1"},
    { image:"images/Imagen3.jpeg", text : "imagen2"},
    { image:"images/Imagen4.jpeg", text : "imagen3"},
    { image:"images/Imagen6.jpeg", text : "imagen4"},
  ];

  return (
    <section>
      <ControlledCarousel slides={slidesData} />
    </section>
  );
}

export default Carrusel2;