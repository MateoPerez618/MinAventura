function Boton() {
    const numeroWhatsApp = "573008589614"; // Reemplaza con tu número
    const mensaje = encodeURIComponent("Prueba");
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  
    return (
      <button
        onClick={() => window.open(urlWhatsApp, "_blank")}
      >
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front text"> ¡Quiero saber más información!
        </span>
      </button>
    );
  }
  
  export default Boton;
  