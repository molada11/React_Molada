import React from 'react';

const DondeEncontrarnos = () => {
  return (
    <div>
      <h2 id="dondeEncontrarnos">¿Dónde encontrarnos?</h2>
      <div className="ubicacion">
        <div id="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.7923395902186!2d-3.370079271385439!3d38.99985763529031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd69145d3eaff593%3A0xf7ad33a0e7bd91fe!2sAntonio%20Hernanz%20Cl%C3%ADnica%20Dental%20-%20Manzanares!5e0!3m2!1ses!2ses!4v1704995114339!5m2!1ses!2ses"
            title="Ubicación de la Clínica Dental"
            width="100%"
            height="600"
            style={{ border: '2px solid #3498db', borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DondeEncontrarnos;
