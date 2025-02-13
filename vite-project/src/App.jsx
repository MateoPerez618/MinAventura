import "./App.css";
import ControlledCarousel from "./Carousel";
import Boton from "./Boton";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col snap-y snap-mandatory">
      {/* Sección 1 - Carrusel con Textos */}
      <header className="customHeader">
        <img src="/images/Logo.png" alt="First slide" />
      </header>
      <section className="section-1">
        <div className="TextoSuperior">
        <h2>¡Tour a la Union Antioquia!</h2>
        </div>
        {/* Contenedor para alinear verticalmente */}
        <div className="flex flex-col items-center w-full max-w-4xl text-center text-white">
          {/* Carrusel */}
          <div className="w-full flex justify-center">
            <div className= "carrusel max-w-[100%] w-full">
              <ControlledCarousel />
            </div>
          </div>
          {/* Texto inferior */}
          <div className="mt-4 w-3/4">
          <h2 className="text-xl font-bold">¡Descubre la mina de caolín en la Unión, Antioquia!</h2>
          <p className="text-base mt-2">
            ¿Listo para una aventura inolvidable? Ven a explorar la mina de caolín, un tesoro oculto en la Unión, Antioquia,
            donde la naturaleza y la historia se combinan en un paisaje impresionante.
          </p>
          </div>
          <div className="w-full flex justify-center">
            <div className= "Boton">
              <Boton />
            </div>
          </div>
          </div>
  
      </section>

      {/* Sección 2 */}
      <section className="section-2">
        {/* Sección izquierda con texto */}
        <div className="section-left">
          <h1 className="TituloS2">¿Qué te espera en la Unión?</h1>
          <ul className="ListaS2">
            <li>Caminata guiada por senderos naturales</li>
            <li>Exploración de la impresionante mina de caolín</li>
            <li>Paisajes únicos para fotos espectaculares</li>
            <li>Conexión con la historia minera de la región</li>
          </ul>
        </div>
        {/* Sección derecha */}
        <div className="section-right flex justify-center items-center">
          <div className="Imagen1">
            <img src="/images/imagen2.jpg" alt="First slide" />
          </div>
          <div className="Imagen2">
            <img src="/images/imagen1.jpg" alt="First slide" />
          </div>
          </div>
      </section>


      {/* Sección 3 */}
      <section className="section-3 h-screen flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-4xl font-bold">Sección 3</h1>
        <p className="text-white text-lg">Seccion de precios y lugares de salida.</p>
      </section>

      {/* Sección 4 */}
      <section className="section-4 h-screen flex flex-col items-center justify-center bg-yellow-500">
        <h1 className="text-white text-4xl font-bold">Sección 4</h1>
        <p className="text-black text-lg">Seccion de preguntas frecuentes</p>
      </section>

      {/* Sección 5 */}
      <section className="section-5 h-screen flex flex-col items-center justify-center bg-yellow-500">
        <h1 className="text-white text-4xl font-bold">Sección 5</h1>
        <p className="text-black text-lg">Seccion de testimonios</p>
      </section>
      
    </div>
  );
}
