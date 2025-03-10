const themeToggleButton = document.getElementById('switch');
const sidePanel = document.querySelector('.side-panel'); // Получаем элемент панели

// Проверяем сохраненную тему в localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  themeToggleButton.checked = true;
  document.body.style.color = "white";
  document.body.style.backgroundImage = "url(nr/blackback.jpg)";
  sidePanel.style.backgroundColor = "#333"; // Темный фон для панели
  sidePanel.style.color = "white"; // Белый текст для панели
} else {
  themeToggleButton.checked = false;
  document.body.style.color = "black";
  document.body.style.backgroundImage = "url(nr/whiteback.jpg)";
  sidePanel.style.backgroundColor = "#FFF"; // Светлый фон для панели
  sidePanel.style.color = "inherit"; // Стандартный цвет текста для панели
}

// Функция для переключения темы
function toggleTheme() {
  if (themeToggleButton.checked) {
    document.body.style.color = "white";
    document.body.style.backgroundImage = "url(nr/blackback.jpg)";
    sidePanel.style.backgroundColor = "#333"; // Темный фон для панели
    sidePanel.style.color = "white"; // Белый текст для панели
    localStorage.setItem('theme', 'dark'); // Сохраняем тему в localStorage
  } else {
    document.body.style.color = "black";
    document.body.style.backgroundImage = "url(nr/whiteback.jpg)";
    sidePanel.style.backgroundColor = "#FFF"; // Светлый фон для панели
    sidePanel.style.color = "inherit"; // Стандартный цвет текста для панели
    localStorage.setItem('theme', 'light'); // Сохраняем тему в localStorage
  }
}

// Добавляем обработчик события для переключателя темы
themeToggleButton.addEventListener('change', toggleTheme);


//загрузка сайта 
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
});