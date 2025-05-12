import React from "react";
import "./Contacto.css";

export default function Contacto() {
  const validarFormulario = (e) => {
    const form = e.target;
    const nombre = form.nombre.value.trim();
    const direccion = form.direccion.value.trim();
    const correo = form.correo.value.trim();
    const telefono = form.telefono.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]{6,15}$/;

    if (!nombre || !direccion || !correo || !telefono) {
      alert("Por favor, completa todos los campos requeridos.");
      e.preventDefault();
      return;
    }

    if (!emailRegex.test(correo)) {
      alert("El correo ingresado no es válido.");
      e.preventDefault();
      return;
    }

    if (!telefonoRegex.test(telefono)) {
      alert("El teléfono debe contener entre 6 y 15 dígitos.");
      e.preventDefault();
      return;
    }
  };

  return (
    <main className="contacto-contenedor">
      {/* Información */}
      <section className="contacto-info">
        <h2>¡Contáctanos!</h2>

        <div className="info-item">
          <span className="icono amarillo">📍</span>
          <div>
            <strong>Oficina</strong>
            <p>Jr. Sor Manuela Gil 322, Cajamarca, Perú</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icono amarillo">🏭</span>
          <div>
            <strong>Centro de producción Cumbemayo</strong>
            <p>Carretera a Cumbemayo</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icono amarillo">🏭</span>
          <div>
            <strong>Centro de producción Puyllucana</strong>
            <p>Carretera a Celendín</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icono amarillo">📞</span>
          <div>
            <strong>Teléfonos:</strong>
            <p>976865540 // 978199469</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icono amarillo">✉️</span>
          <div>
            <strong>Correo:</strong>
            <p>minphuyuii@yahoo.es</p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="contacto-formulario">
        <h3>Completa el siguiente formulario y uno de nuestros asesores se comunicará contigo.</h3>
        <form
          action="https://formsubmit.co/dobide8662@hazhab.com"
          method="POST"
          onSubmit={validarFormulario}
        >
          <div className="form-grid">
            <input type="text" name="nombre" placeholder="Nombre y Apellido*" required />
            <input type="text" name="direccion" placeholder="Dirección*" required />
            <input type="email" name="correo" placeholder="Correo*" required />
            <input type="tel" name="telefono" placeholder="Teléfono*" required />
            <textarea name="mensaje" rows="4" placeholder="Mensaje"></textarea>

            {/* Opcionales para control */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

            <button type="submit">ENVIAR</button>
          </div>
        </form>
      </section>
    </main>
  );
}
