import Accordion from 'react-bootstrap/Accordion';

function Acordeon() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Que dias salen los tour?</Accordion.Header>
        <Accordion.Body>
            Nuestros tours salen los dias: Lunes, Martes, Jueves, Viernes, Sabados, Domingos y lunes festivos
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Como puedo reservar?</Accordion.Header>
        <Accordion.Body>
          Puedes acceder a mas informacion desde el boton en la parte superior, escribiendo al whatsapp: <br />
           +57 XXXXXXXXXX o accediendo directamente en la seccion de planes
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Que precio tiene el tour a la union?</Accordion.Header>
        <Accordion.Body>
          El tour tiene precios desde $XXX hasta $XXX dependiendo de plan que decidas reservar
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Que informacion necesito proporcionar para reservar?</Accordion.Header>
        <Accordion.Body>
        Para realizar la reserva es súper sencillo debes enviar los siguientes datos de las personas que van a tomar el Tour:
        <br />
        - Nombres completos <br />
        - Número de identificacion o pasaporte <br />
        - Número de contacto <br />
        ¡Y listo! Después de recibida esta información te confirmamos la reserva por el medio que nos contactaste
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>¿Los niños pagan el mismo precio?</Accordion.Header>
        <Accordion.Body>
          Los niños inferiores a X años tienen un precio de reserva de $XX
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>¿Qué métodos de pago manejan?</Accordion.Header>
        <Accordion.Body>
            Para el Tour a la Union tenemos disponibles los siguientes métodos de pago:
            <br />
            - Transferencia bancaria a cuenta Bancolombia <br />
            - Transferencia desde Nequi a cuenta Bancolombia <br />
            - Pagos con tarjeta débito o crédito <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>¿Algunas recomendaciones para el tour?</Accordion.Header>
        <Accordion.Body>
            - Estar en el punto de encuentro 10 minutos antes <br />
            - Utilizar ropa cómoda para que puedes disfrutar de la mejor manera el recorrido <br />
            - No estar en estado de embriaguez o bajo efectos de sustancias psicoactivas <br />
            - Utilizar bloqueador solar <br />
            - Proteger los diferentes lugares que se visitarán en el tour <br />
            - No extraer ningún tipo de elemento patrimonial del sector <br />
            - Atender a las sugerencias y recomendaciones de los guías <br />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordeon;