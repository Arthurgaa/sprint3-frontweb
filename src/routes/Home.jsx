import React, { useState, useEffect } from 'react';

function Home() {
  const images = [
    '/mahindra-banner.jpg',
    '/mahindra-banner2.jpg',
    '/mahindra-banner3.jpg',
    '/mahindra-banner4.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      width: '100%',
      margin: '0 auto',
      fontFamily: '"Gruppo", sans-serif',
      scrollBehavior: 'smooth',
    },
    section: {
      padding: '20px',
      textAlign: 'left',
      color: '#333',
    },
    title: {
      fontSize: '36px', // Aumentei o tamanho da fonte do título
      fontWeight: 'bold',
      color: '#b81d1a',
      marginBottom: '20px',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '26px', // Aumentei o tamanho da fonte do subtítulo
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#b81d1a',
    },
    text: {
      fontSize: '18px', // Aumentei o tamanho da fonte do texto
      lineHeight: '1.7', // Um pouco mais de espaçamento entre linhas
      color: '#333',
      fontWeight: '500', // Deixei a fonte um pouco mais grossa
    },
    pilots: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #ddd',
    },
    pilotCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '5px',
      width: '45%',
    },
    pilotImage: {
      height: '300px',
      marginBottom: '10px',
    },
    pilotName: {
      backgroundColor: '#b81d1a',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '100%',
    },
    aboutSection: {
      border: '1px solid #ddd',
      padding: '30px',
      marginTop: '40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
    },
    aboutTitle: {
      fontSize: '30px', // Aumentei o tamanho do título da seção "Sobre"
      color: '#b81d1a',
      marginBottom: '10px',
      textAlign: 'center',
    },
    aboutContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    aboutText: {
      flex: '1',
      fontSize: '18px', // Aumentei o tamanho do texto
      lineHeight: '1.7', // Mais espaçamento entre linhas
      padding: '15px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      position: 'relative',
      overflow: 'hidden',
      fontWeight: '500', // Fonte mais grossa
    },
    aboutSubtitle: {
      fontSize: '24px', // Aumentei o tamanho do subtítulo
      fontWeight: 'bold',
      color: '#b81d1a',
      marginBottom: '10px',
    },
    aboutIcon: {
      fontSize: '30px',
      color: '#b81d1a',
      position: 'absolute',
      top: '10px',
      right: '10px',
      opacity: '0.2',
    },
    divider: {
      width: '100%',
      height: '2px',
      backgroundColor: '#b81d1a',
      margin: '30px 0',
      opacity: '0.3', // Diminuí a opacidade das linhas divisórias
    },
    slideshowContainer: {
      position: 'relative',
      width: '100%',
      height: '500px',
      overflow: 'hidden',
    },
    slide: {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'all 0.5s ease-in-out',
    },
    prevButton: {
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      color: '#ffffff',
      border: 'none',
      padding: '15px',
      cursor: 'pointer',
      fontSize: '30px',
      borderRadius: '4px',
      opacity: '0',
      transition: 'opacity 0.3s ease, background-color 0.3s ease',
    },
    nextButton: {
      position: 'absolute',
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      color: '#ffffff',
      border: 'none',
      padding: '15px',
      cursor: 'pointer',
      fontSize: '30px',
      borderRadius: '4px',
      opacity: '0',
      transition: 'opacity 0.3s ease, background-color 0.3s ease',
    },
    containerHover: {
      opacity: '1',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  };

  return (
    <div style={styles.container}>
      {/* Slideshow */}
      <div
        id="inicio"
        style={styles.slideshowContainer}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('.prevButton').style.opacity = '1';
          e.currentTarget.querySelector('.nextButton').style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('.prevButton').style.opacity = '0';
          e.currentTarget.querySelector('.nextButton').style.opacity = '0';
        }}
      >
        <div
          style={{
            ...styles.slide,
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        />
        <button
          className="prevButton"
          style={styles.prevButton}
          onClick={prevSlide}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)')}
        >
          &#10094;
        </button>
        <button
          className="nextButton"
          style={styles.nextButton}
          onClick={nextSlide}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)')}
        >
          &#10095;
        </button>
      </div>

      {/* Seção de Pilotos */}
      <div id="pilotos" style={styles.section}>
        <h2 style={styles.title}>Pilotos:</h2>
        <div style={styles.pilots}>
          <div style={styles.pilotCard}>
            <img src="/Nick-Mahindra.png" alt="Nick de Vries" style={styles.pilotImage} />
            <div style={styles.pilotName}>Nick de Vries #21</div>
          </div>
          <div style={styles.pilotCard}>
            <img src="/Edoardo-Mahindra.png" alt="Edoardo Mortara" style={styles.pilotImage} />
            <div style={styles.pilotName}>Edoardo Mortara #48</div>
          </div>
        </div>
      </div>

      {/* Seção de Sobre */}
      <div id="sobre" style={styles.aboutSection}>
        <h2 style={styles.aboutTitle}>Sobre:</h2>
        <div style={styles.aboutContent}>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>Mahindra Racing</h3>
            <i className="fas fa-flag-checkered" style={styles.aboutIcon}></i>
            <p>
              Mahindra Racing é uma equipe de automobilismo indiana de propriedade da fabricante de automóveis indiana Mahindra & Mahindra...
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>Tech Mahindra</h3>
            <i className="fas fa-laptop" style={styles.aboutIcon}></i>
            <p>
              Tech Mahindra é uma empresa multinacional indiana de consultoria e serviços de tecnologia da informação...
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>História</h3>
            <i className="fas fa-history" style={styles.aboutIcon}></i>
            <p>
              A Mahindra & Mahindra iniciou uma joint venture com a British Telecom em 1986 como uma empresa de terceirização de tecnologia...
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>Aquisição da Satyam Computer Services Ltd.</h3>
            <i className="fas fa-handshake" style={styles.aboutIcon}></i>
            <p>
              Após o escândalo Satyam de 2008-09, a Tech Mahindra fez uma oferta pela Satyam Computer Services...
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>Aquisições Recentes</h3>
            <i className="fas fa-globe" style={styles.aboutIcon}></i>
            <p>
              Em 2014, a Tech Mahindra adquiriu a Lightbridge Communications Corporation (LCC)...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
