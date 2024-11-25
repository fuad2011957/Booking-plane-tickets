const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');
    const registerForm = document.getElementById('registerForm');
    const spinner = document.getElementById('spinner');

    // Открытие модального окна
    loginBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Закрытие при клике вне окна
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('active');
      }
    });

    // Обработка формы
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Останавливаем стандартное действие формы
      spinner.style.display = 'block'; // Показываем спиннер

      setTimeout(() => {
        spinner.style.display = 'none'; // Прячем спиннер через 5 секунд
        alert('Registration successful!'); // Уведомление об успехе
        modal.classList.remove('active'); // Закрываем окно
      }, 5000); // 5 секунд
    });


////////////////////////////////////////////////////////////////////////

function openModal_2() {
      document.getElementById('paymentModal_2').style.display = 'block';
      document.getElementById('overlay_2').style.display = 'block';
    }

    function buyTicket_2() {
      // Скрываем форму и показываем спиннер
      document.getElementById('formSection_2').style.display = 'none';
      document.getElementById('loadingSpinner_2').style.display = 'block';

      // Имитируем задержку перед завершением оплаты
      setTimeout(() => {
        document.getElementById('loadingSpinner_2').style.display = 'none';
        document.getElementById('successMessage_2').style.display = 'block';
      }, 5000); // 5 секунд задержки
    }

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Закрытие модального окна при клике вне его
    document.getElementById('overlay_2').addEventListener('click', () => {
  document.getElementById('paymentModal_2').style.display = 'none';
  document.getElementById('overlay_2').style.display = 'none';
});