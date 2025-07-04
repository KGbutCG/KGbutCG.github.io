// script.js
const grid = document.getElementById('popit-grid');

// один заранее созданный <audio>-элемент — для простоты и быстроты
const popSound = new Audio('assets/pop.mp3');
popSound.volume = 0.5;   // при желании можно убавить/прибавить

// единый обработчик, который будет привязан ко всем «пузырькам»
function handlePop(event) {
  const bubble = event.currentTarget;       // именно тот div, по которому тапнули
  bubble.classList.toggle('popped');        // меняем визуальное состояние
  popSound.currentTime = 0;                 // сброс на начало, чтобы звук не «запирался»
  popSound.play();                          // мгновенный старт
}

// создаём 6 × 6 = 36 «пузырьков»
for (let i = 0; i < 36; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // КЛЮЧЕВОЕ: используем pointerdown, а не click,
  // и обязательно ставим запятую перед опциями!
  bubble.addEventListener('pointerdown', handlePop, { passive: true });

  grid.appendChild(bubble);
}

// Telegram Web App API (необязательно, но полезно)
Telegram.WebApp.ready();
Telegram.WebApp.expand();
