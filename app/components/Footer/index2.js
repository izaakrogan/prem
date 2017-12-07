import React from 'react';

const Footer = () => (
  <div className="footer">
    <h1>Contact Premier Road Markings</h1>
    <div className="contact-container">
      <div className="contact">
        <h3>Head Office:</h3>
        <p>131 Salters Lane</p>
        <p>Sedgefield</p>
        <p>Stockton-on-Tees</p>
        <p>Cleveland</p>
        <p>TS21 3EE</p>
      </div>
      <div className="contact">
        <h3>Telephone:</h3>
        <p>01388 817 570</p>
      </div>
      <div className="contact">
        <h3>Email:</h3>
        <p>info@premier-roadmarkings.co.uk</p>
      </div>
    </div>
    <div className="credentials">
      <a href="http://www.chas.co.uk/">
        <img src="assets/imgs/credentials/chasHs-min.jpg" alt="CHAS" />
      </a>
      <a href="http://www.lantra.co.uk/">
        <img src="assets/imgs/credentials/lantraawards-min.jpg" alt="lantra logo" />
      </a>
      <a href="http://www.constructionline.co.uk/static/training5.html">
        <img src="assets/imgs/credentials/constructionLine-min.jpg" alt="construction line" />
      </a>
      <a href="https://www.nqa.com/en-gb/certification/standards/hss">
        <img src="assets/imgs/credentials/nationalHighways-min.jpg" alt="nhss logo" />
      </a>
      <a href="https://www.ukas.com/">
        <img src="assets/imgs/credentials/QAI-min.jpg" alt="QAI" />
      </a>
      <a href="http://www.tmca.org.uk/">
        <img src="assets/imgs/credentials/tmca-min.jpg" alt="tmca" />
      </a>
    </div>
  </div>
);

export default Footer;
