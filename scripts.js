// Переход на страницу теста
function startTest1() {
  // Плавный переход (бесшовно) на другую страницу
  window.location.href = "test.html";
}

// Переход на страницу теста
function startTest2() {
  // Плавный переход (бесшовно) на другую страницу
  window.location.href = "test2.html";
}

// Переход на страницу теста
function startTest3() {
  // Плавный переход (бесшовно) на другую страницу
  window.location.href = "test3.html";
}

// Скрипт для карусели статей
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const articles = document.querySelectorAll(".article");

  // Центрирование статьи при клике
  articles.forEach(article => {
    article.addEventListener("click", () => {
      // Сброс активного состояния у всех статей
      articles.forEach(a => {
        a.classList.remove("open", "animate", "start", "end");
      });

      // Добавление класса 'start' для начальной позиции
      article.classList.add("start");

      // Запуск анимации с небольшой задержкой
      setTimeout(() => {
        article.classList.add("animate"); // Начало анимации
      }, 10);

      // Завершение анимации с добавлением класса 'end' (если нужно)
      setTimeout(() => {
        article.classList.add("end"); // Конечная позиция
      }, 500); // Задержка для завершения анимации (время анимации)

      // Проверка, существует ли уже оверлей
      let existingOverlay = document.querySelector(".overlay");
      if (!existingOverlay) {
        // Создание и добавление затемняющего фона
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.appendChild(overlay);

        // Закрытие статьи при клике на затемнённый фон
        overlay.addEventListener("click", () => {
          article.classList.remove("open", "animate", "start", "end");
          overlay.remove();
        });
      }

      // Добавление класса 'open' для раскрытия статьи
      article.classList.add("open");
    });
  });
});
