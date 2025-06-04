// src/pages/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center" style={{ color: "#FFC300" }}>
        Política de Privacidad
      </h1>

      <p className="text-sm text-right mb-6 text-gray-500">
        <strong>Última actualización:</strong> 18-05-2025
      </p>

      <p className="mb-6">
        En <strong>Minera Phuyu Yuraq II</strong>, nos comprometemos a proteger
        la privacidad de nuestros usuarios. Esta Política de Privacidad explica
        cómo recopilamos, usamos y protegemos la información personal que nos
        proporciona a través del formulario de contacto.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: "#FFC300" }}>
        1. Identidad del responsable del tratamiento
      </h2>
      <p className="mb-4">
        <strong>Razón Social:</strong> Minera Phuyu Yuraq II<br />
        <strong>Dirección:</strong> Jr. Sor Manuela Gil K-2<br />
        <strong>Correo electrónico:</strong> minphuyuii@yahoo.es<br />
        <strong>RUC:</strong> 20224983043
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: "#FFC300" }}>
        2. Datos personales que recopilamos
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Nombre completo</li>
        <li>Dirección</li>
        <li>Número de teléfono</li>
        <li>Correo electrónico</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: "#FFC300" }}>
        3. Finalidad del tratamiento
      </h2>
      <p className="mb-4">
        Usamos los datos exclusivamente para responder consultas enviadas desde
        nuestro formulario de contacto. No se almacenan en bases de datos.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: "#FFC300" }}>
        4. Conservación de los datos
      </h2>
      <p className="mb-4">
        Los datos se conservan solo el tiempo necesario para responder la
        solicitud. El sitio no tiene backend ni almacenamiento de datos.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: "#FFC300" }}>
        5. Confidencialidad
      </h2>
      <p className="mb-4">
        No compartimos ni vendemos datos a terceros. Se mantiene la
        confidencialidad de la información proporcionada.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: "#FFC300" }}>
        6. Derechos del titular
      </h2>
      <p className="mb-4">
        Puedes ejercer tus derechos de acceso, rectificación o cancelación
        enviando un correo a [correo de contacto].
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: "#FFC300" }}>
        7. Aceptación
      </h2>
      <p className="mb-6">
        El uso del formulario implica la aceptación de esta Política de
        Privacidad.
      </p>
    </section>
  );
}
