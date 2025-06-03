const grid = document.getElementById('popit-grid');
const popSound = new Audio('assets/pop.mp3');

for (let i = 0; i < 36; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.addEventListener('click', () => {
    bubble.classList.toggle('popped');
    popSound.currentTime = 0;
    popSound.play();
  });
  grid.appendChild(bubble);
}

// Telegram WebApp init (optional)
Telegram.WebApp.ready();
Telegram.WebApp.expand();
