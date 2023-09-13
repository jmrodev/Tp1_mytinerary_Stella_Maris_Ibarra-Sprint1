import React from 'react';
import  './style.css'; // Asegúrate de crear este archivo CSS para estilizar la página

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! Parece que te has perdido.</p>
      <p><a href="/">Volver a la página principal</a></p>
    </div>
  );
}

export default NotFound;