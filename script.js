document.getElementById('rsvpForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('attendance', document.getElementById('attendance').value);
    formData.append('message', document.getElementById('message').value);

    const status = document.getElementById('status');
    status.textContent = 'Отправка...';

    try {
        // Вариант 1: EmailJS (бесплатно, без PHP, подключите скрипт: <script src="https://cdn.emailjs.com/dist/email.min.js"></script>)
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this);

        // Вариант 2: Formspree (замените на ваш endpoint)
        const response = await fetch('https://formspree.io/f/xwvwleyd', { method: 'POST', body: formData });
        if (response.ok) {
            status.textContent = 'Спасибо! Ответ принят.';
            status.style.color = 'green';
            this.reset();
        } else {
            throw new Error();
        }
    } catch (error) {
        status.textContent = 'Ошибка отправки. Попробуйте позже.';
        status.style.color = 'red';
    }
});
