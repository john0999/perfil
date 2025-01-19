import React from 'react';
import { Link } from 'react-router-dom';
import programmerGif from '../images/CODIGO.gif';
import sideImage from '../images/lenguajes.webp';

const Servicios = () => {
  return (
    <div>
      <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: '#fff', borderBottom: '2px solid #444' }}>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginRight: '15px' }}>
              <a href="/" style={{ textDecoration: 'none', color: '#fff' }}>Perfil</a>
            </li>
            <li>
              <Link to="/servicios" style={{ textDecoration: 'none', color: '#fff' }}>Servicios</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main style={{ display: 'flex', padding: '20px', gap: '20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ flex: 2 }}>
          <h1>Servicios</h1>
          <p>Ofrezco los siguientes servicios:</p>
          <ul>
            <li>Desarrollo web con tecnologías modernas como React y Laravel.</li>
            <li>Creación de aplicaciones móviles multiplataforma con Flutter y Kotlin.</li>
            <li>Optimización de bases de datos con MySQL, MongoDB y SQL Server.</li>
            <li>Consultoría técnica y soporte en proyectos de software.</li>
          </ul>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <img
            src={programmerGif}
            alt="Animación de programador"
            style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px' }}
          />
          <img
            src={sideImage}
            alt="Imagen lateral"
            style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px' }}
          />
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '15px', backgroundColor: '#2c3e50', color: '#fff', borderTop: '2px solid #444' }}>
        <p>&copy; {new Date().getFullYear()} Johnny Morales Gómez - {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
};

export default Servicios;
