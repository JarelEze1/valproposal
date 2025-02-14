window.onload = () => {
    const music = document.getElementById('background-music');
    
    // Ensure music plays as the page loads
    music.play().catch(() => {
      console.log('Autoplay prevented. Music will play on user interaction.');
    });
  };
  
  function showChoices() {
    document.querySelector('.btn').style.display = 'none';
    document.querySelector('.choice-buttons').style.display = 'block';
  }
  
  function redirectToWhatsApp() {
    confetti({
      particleCount: 500,
      spread: 200,
      origin: { y: 0.6 }
    });
  
    setTimeout(() => {
      const stickerLink = 'https://wa.me/2348091772541?text=Hey%20love,%20I%20said%20YES!%20❤️';
      window.open(stickerLink, '_blank');
    }, 2000);
  }
  
  function redirectToSocial() {
    const socials = [
      'https://www.instagram.com/jareleze'
    ];
    const randomSocial = socials[Math.floor(Math.random() * socials.length)];
    window.open(randomSocial, '_blank');
  }
  