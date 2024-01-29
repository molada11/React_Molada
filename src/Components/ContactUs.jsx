import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Recopilar todos los valores del formulario
    const formData = new FormData(form.current);
    const data = {};
    form.current.querySelectorAll("input, textarea").forEach((field) => {
      data[field.name] = field.value;
    });

    // Enviar el formulario
    try {
      const result = await emailjs.send('service_bqmm7os', 'template_fc7llf5', data, '2B-3QO1cNzyfiYkYC');
      console.log(result.text);
      setMensajeEnviado(true); // Marcar como mensaje enviado con éxito
    } catch (error) {
      console.error(error.text);
      setMensajeEnviado(false); // Marcar como fallo en el envío del mensaje
    }
  };

  return (
    <div className="contacto-background">
      <br />
      <br />
      <br />
      <br />
      <section id="contacto" className="contacto-section mi-clase-de-fondo">
        <div className="contacto-container">
          <h2 className="contacto">Contacto</h2>

          <div className="formulario-contacto">
            {mensajeEnviado ? (
              <div>
                <p>Mensaje enviado con éxito</p>
                <img
                src='Imagenes/tick.jpg'
                alt="Tick"
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              />
                {/* Puedes agregar más contenido o redirigir a otra página aquí */}
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} id="formularioContacto">
                <div className="campo-formulario">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                  />
                </div>

                <div className="campo-formulario">
                  <label htmlFor="apellidos">Apellidos:</label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    required
                  />
                </div>

                <div className="campo-formulario">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div className="campo-formulario">
                  <label htmlFor="mensaje">Mensaje:</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                  ></textarea>
                </div>

                {/* Agregar más campos según sea necesario */}

                <button type="submit" className="boton-enviar">
                  <b>Enviar Mensaje</b>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ContactUs;

