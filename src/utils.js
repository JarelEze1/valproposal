export const playMusic = () => {
  const music = document.getElementById("background-music");
  setTimeout(() => {
    music.play().catch(() => {
      console.log("Autoplay prevented. Music will play on user interaction.");
    });
  }, 3000); // 3s delay to match fade-in
};

export const redirectToWhatsApp = () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    const stickerLink = 'https://wa.me/2348091772541?text=Hey%20love,%20I%20said%20YES!%20❤️%20Check%20this%20sticker%20👉%20https://bit.ly/valentine-sticker';
    window.open(stickerLink, '_blank');
  }, 2000);
};

export const redirectToSocial = () => {
  const socials = [
    "https://www.instagram.com/jareleze"
  ];
  const randomSocial = socials[Math.floor(Math.random() * socials.length)];
  window.open(randomSocial, '_blank');
};
