document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rsvpForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('attendance', document.getElementById('attendance').value);
        formData.append('message', document.getElementById('message').value);

        const status = document.getElementById('status');
        status.textContent = 'Отправка...';
        status.style.color = '#666';

        try {
            // Замените YOUR_FORM_ID на ID из Formspree
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { 
                method: 'POST', 
                body: formData 
            });
            
            if (response.ok) {
                status.textContent = '✅ Спасибо! Ответ принят.';
                status.style.color = 'green';
                this.reset();
            } else {
                throw new Error('Серверная ошибка');
            }
        } catch (error) {
            status.textContent = '❌ Ошибка отправки. Попробуйте позже.';
            status.style.color = 'red';
        }
    });
});
