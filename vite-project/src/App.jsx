import "./App.css";
import Carrusel1 from "./components/Carrusel1";
import Carrusel2 from "./components/Carrusel2";
import Boton from "./Boton";
import Tabla from "./Tabla";
import Carta from "./Carta";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col snap-y snap-mandatory">
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
          <div className="mt-4 w-3/4">
          <h2 className="descubre">¡Descubre la mina de caolín en la Unión, Antioquia!</h2>
          <p className="descubreP">
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
        {/* Sección derecha */}
        <div className="carrusel2">
          <Carrusel2 />
          </div>
      </section>
      <section className="section2-bottom">
        <h1 className="TituloS2">¿Qué te espera en la Unión?</h1>
        <ul className="ListaS2">
          <li>Caminata guiada por senderos naturales</li>
          <li>Exploración de la impresionante mina de caolín</li>
          <li>Paisajes únicos para fotos espectaculares</li>
          <li>Conexión con la historia minera de la región</li>
          <li>Creación de cerámicas con material extraído de la mina</li>
          <li>Fotos espectaculares con dron</li>
          <li>Acceso al museo</li>
          <li>Acceso a los miradores</li>
          </ul>
          <p className="NotaImportante">Nota importante: No tenemos ninguna asociación con ningún guía ni persona no autorizada por nuestra empresa.</p>
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
        <h1 className="text-white text-4xl font-bold">Sección 5</h1>
        <p className="text-black text-lg">Seccion de testimonios</p>
      </section>
      
    </div>
  );
}
