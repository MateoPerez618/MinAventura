import ControlledCarousel from "../ControlledCarousel2";

function Carrusel2() {
  const slidesData = [
    { image:"images/carrusel1.png", titulo: "Tienda de recuerdos", text : "Un espacio acogedor donde los visitantes pueden adquirir artesanías, souvenirs y productos únicos hechos con caolín, como figuras de cerámica y joyería."},
    { image:"images/carrusel2.png", titulo: "Taller de alfarería", text : "Un lugar interactivo donde los turistas pueden aprender a modelar el barro y crear sus propias piezas de cerámica utilizando caolín, con la guía de expertos artesanos."},
    { image:"images/carrusel3.png", titulo: "Museo de caolín", text : "Un recorrido educativo que muestra la historia y el proceso de extracción y transformación del caolín, con exhibiciones interactivas y piezas históricas."},
    { image:"images/carrusel4.png", titulo: "Restaurante", text : "Un acogedor establecimiento donde los visitantes pueden degustar platillos típicos de la región, con un ambiente rústico que combina elementos mineros y naturales."},
    { image:"images/carrusel5.png", titulo: "Muelle", text : "Un hermoso espacio junto al agua donde los turistas pueden relajarse, disfrutar de la vista y tomar fotografías del entorno natural que rodea la mina."},
    { image:"images/carrusel6.png", titulo: "Estatua emblemática", text : "Un monumento representativo de la historia y el legado minero de la zona, que rinde homenaje a los trabajadores y la cultura local."},
    { image:"images/carrusel7.png", titulo: "Mirador panorámico", text : "Un punto alto estratégico desde donde se puede apreciar una vista impresionante del paisaje minero y sus alrededores."},
    { image:"images/carrusel8.png", titulo: "Zona pequeños mineros", text : "Un área diseñada para que los niños experimenten de manera divertida y segura cómo era el trabajo en la mina, con herramientas y actividades interactivas."},
  ];

  return (
    <section>
      <ControlledCarousel slides={slidesData} />
    </section>
  );
}

export default Carrusel2;