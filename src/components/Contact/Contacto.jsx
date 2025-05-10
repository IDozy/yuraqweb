import React from "react";
import "./Contacto.css";

export default function Contacto() {
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
        <form>
          <div className="form-grid">
            <input type="text" placeholder="Nombre y Apellido*" required />
            <input type="text" placeholder="Dirección*" required />
            <input type="email" placeholder="Correo*" required />
            <input type="tel" placeholder="Teléfono*" required />
            <textarea rows="4" placeholder="Mensaje"></textarea>
            <button type="submit">ENVIAR</button>
          </div>
        </form>
      </section>
    </main>
  );
}
