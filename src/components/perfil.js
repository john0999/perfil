import React from 'react';
import profileImage from '../images/LOGO3.png';
import programmerGif from '../images/codigo.gif';
import sideImage from '../images/lenguajes.webp';
import logos from '../images/LOGO3.png';

const Profile = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#sobre-mi" className="profile-link">
                  <img src={logos} alt="Johnny" className="profile-img" />
                  JOHNNY
                </a>
              </li>
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
              Soy un apasionado Desarrollador de Software originario del Carmen, Chilón, Chiapas, México, con 4 años de experiencia en la creación de interfaces atractivas y funcionales. Mi enfoque abarca tanto el Front-End como el Back-End, además de tener experiencia en desarrollo móvil.<br/><br/>

              <b></b><br></br>
            
              Mi objetivo es crear soluciones que no solo sean funcionales, sino que también ofrezcan una experiencia de usuario intuitiva y optimizada.

              Soy un aprendiz constante, siempre dispuesto a explorar nuevas tecnologías y mejorar mis habilidades. Mi pasión por la usabilidad me motiva a trabajar en cada detalle para ofrecer productos que realmente marquen la diferencia.
            </p>
          </section>
          <section id="portafolio">
            <h1>Portafolio</h1>

            <p><strong>1. Desarrollo Profesional</strong></p>
            <p>
              • Desarrollo Full Stack de la aplicación web <a href="https://www.veronicacorzo.com/" target="_blank">veronicacorzo.com</a>,
              como parte de mi experiencia laboral en <a href="https://teknologix.mx/" target="_blank">Teknologix</a> durante el periodo de enero a abril.
            </p>

            <p><strong>2. Proyectos Personales</strong></p>
            <ul>
              <li>
                Aplicación móvil multiplataforma desarrollada con Kotlin Multiplatform, compatible con iOS, Android y Windows.
                El código está disponible para desarrolladores interesados.
                🔗 Repositorio: <a href="https://github.com/john0999/NotasJM.git" target="_blank">NotasJM</a>
              </li>
              <li>
                Proyecto básico en ASP.NET que facilita la creación de un CRUD, ideal para programadores que buscan una base eficiente y reutilizable.
                🔗 Repositorio: <a href="https://github.com/john0999/AppSocial.git" target="_blank">AppSocial</a>
              </li>
              <li>
                Aplicación para Google TV que permite consultar videos desde YouTube utilizando Retrofit y la API oficial de YouTube.
                🔗 Repositorio: <a href="https://github.com/john0999/TVJohn.git" target="_blank">TVJohn</a>
              </li>
              <li>
                Plataforma web para la gestión y carga local de videos, desarrollada en Laravel.
                🔗 Repositorio: <a href="https://github.com/john0999/videos.git" target="_blank">videos</a>
              </li>
            </ul>

            <p><strong>3. Proyectos Académicos e Integradores</strong></p>
            <ul>
              <li>
                Plataforma web “Socialert” para la gestión de usuarios, alertas, reportes y visualización de ubicaciones en tiempo real.
                🔒 Repositorio no disponible por derechos de autor.
              </li>
              <li>
                Aplicación móvil “Socialert” para el registro de usuarios, envío de alertas y localización en tiempo real.
                🔒 Repositorio no disponible por derechos de autor.
              </li>
              <li>
                Aplicación móvil para Android que permite la autenticación de usuarios a través de su cuenta de X (anteriormente Twitter).
                🔗 Repositorio: <a href="https://github.com/john0999/RedAutenApp.git" target="_blank">RedAutenApp</a>
              </li>
            </ul>
          </section>

          <section id="habilidades">
            <h1>Habilidades</h1>
            <ul>
              <li>Lenguajes de programación: PHP, JavaScript, C#, Kotlin, Dart, Python y Java</li>
              <li>Frameworks: Laravel, Flutter, Jetpack Compose, ASP .NET y React</li>
              <li>Base de datos: MySQL, MongoDB y SQL Server</li>
            </ul>
          </section>
          <section id="educacion">
            <h1>Educación</h1>
            <ul>
              <li><p href="#">TSU en Desarrollo De software Multiplataforma | Universidad Tecnológica de la Selva | 2021 - 2023</p></li>
              <li><p href="#">ING en Desarrollo y Gestión de software | Universidad Tecnológica de la Selva | 2023 - 2025</p></li>
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
            <p>Teléfono: <a href="tel:6633273423">Llamar</a> | WhatsApp: <a href="https://wa.me/5219191150285" target="_blank">Enviar mensaje</a></p>
            <p>FaceBook: <a href="https://web.facebook.com/johnny.moralesgonez" target="_blank">Johnny Morales</a></p>
            <p>GitHub: <a href="https://github.com/john0999" target="_blank">john0999</a></p>
          </section>
        </main>
        <footer style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>&copy; {currentYear} Johnny Morales Gómez</p>
        </footer>
      </body>
    </div>
  );
};

export default Profile;