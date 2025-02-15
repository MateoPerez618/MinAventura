import ControlledCarousel from "../ControlledCarousel";

function Carrusel2() {
  const imagenesSeccion2 = [
    "images/Imagen2.jpeg",
    "images/Imagen3.jpeg",
    "images/Imagen4.jpeg",
    "images/Imagen6.jpeg",
  ];

  return (
    <section>
      <ControlledCarousel images={imagenesSeccion2} />
    </section>
  );
}

export default Carrusel2;