const grid = document.getElementById('popit-grid');
const popSound = new Audio('assets/pop it.mp3');
popSound.volume = 0.5; // Можно регулировать громкость

for (let i = 0; i < 36; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.addEventListener('click', () => {
    bubble.classList.toggle('popped');
    popSound.currentTime = 0; // Сброс звука, чтобы можно было "клацать" быстро
    popSound.play();
  });
  grid.appendChild(bubble);
}

Telegram.WebApp.ready();
Telegram.WebApp.expand();
