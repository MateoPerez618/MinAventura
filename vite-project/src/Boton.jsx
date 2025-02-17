function Boton() {
    const numeroWhatsApp = "573008589614"; // Reemplaza con tu número
    const mensaje = encodeURIComponent("Prueba");
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  
    return (
      <button
        onClick={() => window.open(urlWhatsApp, "_blank")}
      >
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front text"> ¡Quiero saber más información!
        </span>
      </button>
    );
  }
  
  export default Boton;
  