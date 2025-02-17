import "./App.css";
import Carrusel1 from "./components/Carrusel1";
import Carrusel2 from "./components/Carrusel2";
import Boton from "./Boton";
import Tabla from "./Tabla";
import Carta from "./Carta";
import Acordeon from "./Acordeon";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      {/* Sección 1 - Carrusel con Textos */}
      <header className="customHeader">
        <img src={`${import.meta.env.BASE_URL}images/Logo.png`} alt="First slide" />
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
              <Carrusel1 />
            </div>
          </div>
          {/* Texto inferior */}
          <div>
          <h2 className="descubre">¡Descubre la mina de caolín en la Unión, Antioquia!</h2>
          <p className="descubreP">
            ¿Listo para una aventura inolvidable? Ven a explorar la mina de caolín, un tesoro oculto en la Unión, Antioquia,
            donde la naturaleza y la historia se combinan en un paisaje impresionante.
          </p>
          </div>
          <div>
            <div className= "Boton">
              <Boton />
            </div>
          </div>
          </div>
  
      </section>

      {/* Sección 2 */}
      <section className="section-2">
        <div className="Seccion2ContenedorTitulo">
          <h2 className="Seccion2Titulo">¿Que te espera en la union?</h2>
        </div>
        <div className="carrusel2">
          <Carrusel2 />
          </div>
      </section>


      {/* Sección 3 */}
      <section className="section-3">
        <div className="contenedor">
          {/* Contenedor de la imagen a la izquierda */}
          <div className="imagen-container">
            <img src={`${import.meta.env.BASE_URL}images/Imagen5.jpeg`} alt="Horarios de salida" className="imagen-horarios" />
            </div>
            {/* Contenedor de la tabla a la derecha */}
            <div className="Titulo-Tabla">
              <h2 className="titulo-horarios">Estos son nuestros horarios de salida:</h2>
              <div className="custom-table">
                <Tabla />
              </div>
            </div>
        </div>
      </section>
      {/* Sección 4 */}
      <section className="section-4">
        <Carta/>
      </section>

      {/* Sección 5 */}
      <section className="section-5">
        <div className="map-title">
          <h2>¿Dónde queda ubicado?</h2>
          </div>
          <div className="map-container">
            <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7936.312706839472!2d-75.36686308757321!3d5.9731951465684165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46961598ac13af%3A0x7ea70f9b0c1d7d4c!2sLa%20Uni%C3%B3n%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1739637289681!5m2!1ses-419!2sco"
            width="800"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <div className="map-description">
              <p>La Unión, Antioquia, es un hermoso municipio conocido por su clima fresco y paisajes montañosos.
              La mina de caolín se encuentra a solo 2 horas de Medellín, en un entorno natural,
              se encuentra a una distancia de 2.4 km del parque principal del municipio de La Unión Antioquia, en la vía que conduce a las veredas de las Teresas y San Francisco.
              </p>
              </div>
      </section>

      <section className="section-6">
        <h2 className="titulo-acordeon">Preguntas frecuentes</h2>
        <Acordeon/>
        </section> 
    </div>
  );
}
