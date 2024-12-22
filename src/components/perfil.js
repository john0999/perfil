import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <img src="url_de_imagen" alt="Profile Picture" />
      <h1>JOHNNY MORALES GÓMEZ</h1>
      <p>Biografía o descripción breve</p>
      <h3>Redes Sociales</h3>
      <ul>
        <li><a href="https://web.facebook.com/johnny.moralesgonez">Facebook</a></li>
        <li><a href="url_de_twitter">Twitter</a></li>
        <li><a href="url_de_linkedin">LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default Profile;
