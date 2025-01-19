import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../images/image.jpeg';
const Profile = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href='#sobre-mi'>John L-JS</a></li>
              <li><Link to="/servicios">Servicios</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="profile-container">
            <img src={profileImage} alt="Foto de Johnny Morales Gómez" className="profile-photo" />

          </div>
          <h1 className='name'>JOHNNY MORALES GÓMEZ</h1>
          <section id="sobre-mi">
            <h1>Sobre mí</h1>
            <p>¡Holaa!!... Hoy es {currentDate}, ¡es un buen día para aprender algo nuevo! 😁</p> <br/>
            <p className='me'>Originario del Carmen, Chilón, Chiapas, MX, soy Desarrollador de software con 2 años de
              experiencia creando interfaces atractivas y
              funcionales, complementada con
              habilidades en Back-End y desarrollo
              móvil. Experto en HTML, CSS, JavaScript
              y Laravel, además de experiencia en
              aplicaciones móviles con Flutter y
              Kotlin (Jetpack Compose).
              Apasionado por la usabilidad y la
              optimización, enfocado en crear
              soluciones que mejoren la experiencia
              del usuario. Abierto a aprender nuevas
              tecnologías.
            </p>
          </section>
          <section id="habilidades">
            <h1>Habilidades</h1>
            <ul>
              <li>Lenguajes de programación: PHP, JavaScript, .NET, Kotlin, Python y Java</li>
              <li>Frameworks: Laravel, Flutter, Jetpack Compose y React</li>
              <li>Base de datos: MySQL, MongoDB y SQL Server</li>
            </ul>
          </section>
          <section id="educacion">
            <h1>Educación</h1>
            <ul>
              <li><p href="#">TSU en Desarrollo De software Multiplataforma | Universidad Tecnológica de la Selva | 2021 - 2023</p></li>
              <li><p href="#">ING en Desarrollo y Gestión de software | Universidad Tecnológica de la Selva | 2023 - Actual</p></li>
            </ul>
          </section>
          <section id="contacto">
            <h1>Contacto</h1>
            <p>Correo electrónico: <a href="mailto:moralesgomezjohnny@gmail.com">moralesgomezjohnny@gmail.com</a></p>
            <p>Teléfono: <a href="tel:6633273423">6633273423</a> | WhatsApp: <a href="tel:9191150285">9191150285</a></p>
            <p>FaceBook: <a href="https://web.facebook.com/johnny.moralesgonez" target="_blank">Johnny Morales</a></p>
            <p>GitHub: <a href="https://github.com/john0999" target="_blank">john0999</a></p>
          </section>
        </main>
        <footer style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>&copy; {currentYear} Johnny Morales Gómez - {currentDate}</p>
        </footer>
      </body>
    </div>
  );
};

export default Profile;