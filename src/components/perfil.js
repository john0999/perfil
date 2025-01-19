import React from 'react';
import profileImage from '../images/image.jpeg';
import programmerGif from '../images/CODIGO.gif';
import sideImage from '../images/lenguajes.webp';

const Profile = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href='#sobre-mi'>JOHN ℳ৻₰</a></li>
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
            <p>¡Holaa!!... Hoy es {currentDate}, ¡es un buen día para aprender algo nuevo! 😁</p> <br />
            <p className='me'>
              Soy un apasionado Desarrollador de Software originario de Carmen, Chilón, Chiapas, MX, con 2 años de experiencia en la creación de interfaces atractivas y funcionales. Mi enfoque abarca tanto el Front-End como el Back-End, además de tener experiencia en desarrollo móvil.<br/><br/>

              <b>Habilidades Técnicas:</b><br></br>
              Front-End: HTML, CSS, JavaScript<br></br>
              Back-End: Laravel, React, .NET<br></br>
              Desarrollo Móvil: Flutter, Kotlin (Jetpack Compose)<br/><br/>
              Mi objetivo es crear soluciones que no solo sean funcionales, sino que también ofrezcan una experiencia de usuario intuitiva y optimizada.

              Soy un aprendiz constante, siempre dispuesto a explorar nuevas tecnologías y mejorar mis habilidades. Mi pasión por la usabilidad me motiva a trabajar en cada detalle para ofrecer productos que realmente marquen la diferencia.
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
          <div style={{ display: 'flex', padding: '20px', gap: '20px', backgroundColor: '#f9f9f9' }}>
            <div style={{ flex: 2 }}>
              <h1>Servicios</h1>
              <p>Ofrezco los siguientes servicios:</p>
              <ul>
                <li>Desarrollo web con tecnologías modernas como React y Laravel.</li>
                <li>Creación de aplicaciones móviles multiplataforma usando Flutter y Kotlin.</li>
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
          </div>

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