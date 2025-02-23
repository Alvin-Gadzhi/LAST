document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const tariffButtons = document.querySelectorAll(".tariff-btn");
    const tariffInput = document.getElementById("tariff-name");
    const form = document.getElementById("modal-form");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const nameError = document.getElementById("name-error");
    const phoneError = document.getElementById("phone-error");
    const formStatus = document.getElementById("form-status");

    // Маска для телефона
    phoneInput.addEventListener("input", function (e) {
        let x = phoneInput.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        phoneInput.value = !x[2] ? x[1] : "+7 (" + x[2] + (x[3] ? ") " + x[3] : "") + (x[4] ? "-" + x[4] : "") + (x[5] ? "-" + x[5] : "");
    });

    // Открытие модального окна
    tariffButtons.forEach(button => {
        button.addEventListener("click", function () {
            tariffInput.value = this.getAttribute("data-tariff");
            modal.style.display = "block";
        });
    });

    // Закрытие модального окна
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Валидация формы
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        if (!nameInput.value.trim()) {
            nameError.style.display = "block";
            valid = false;
        } else {
            nameError.style.display = "none";
        }

        if (!phoneInput.value.match(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/)) {
            phoneError.style.display = "block";
            valid = false;
        } else {
            phoneError.style.display = "none";
        }

        if (valid) {
            formStatus.textContent = "Отправка...";
            formStatus.style.color = "blue";

            setTimeout(() => {
                // Симуляция успешной отправки
                formStatus.textContent = "Заявка отправлена!";
                formStatus.style.color = "green";

                setTimeout(() => {
                    modal.style.display = "none";
                    form.reset();
                    formStatus.textContent = "";
                }, 2000);
            }, 1500);
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    const closeBtn = document.querySelector('.modal .close');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const moreBtn = document.querySelector('.more-btn');

    // URL видео (автозапуск добавляется через параметр autoplay=1)
    const videoURL = "https://www.youtube.com/embed/OfgTsDAm784?autoplay=1";

    // Обработчик клика по элементу портфолио
    portfolioItems.forEach(item => {
        item.addEventListener('click', function () {
            // Устанавливаем URL в iframe, что запустит видео автоматически
            iframe.src = videoURL;
            modal.style.display = 'block';
        });
    });

    // Обработчик закрытия модального окна
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        // Очищаем src для остановки видео
        iframe.src = "";
    });

    // Закрытие модального окна при клике вне контента
    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
            iframe.src = "";
        }
    });

    // Обработчик кнопки "УВИДЕТЬ БОЛЬШЕ"
    moreBtn.addEventListener('click', function () {
        // Показываем все элементы с классом "extra-item"
        document.querySelectorAll('.extra-item').forEach(el => {
            el.style.display = 'block';
        });
        // Если кнопка больше не нужна, можно её скрыть или удалить:
        moreBtn.style.display = 'none';
    });
});
