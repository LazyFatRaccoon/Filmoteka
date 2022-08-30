// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Выбираем настройки темы из localStorage
const currentTheme = localStorage.getItem("theme");
// Если текущая тема в localStorage равна "dark"…
if (currentTheme == "dark") {
  // …тогда мы используем класс .dark-theme
  document.body.classList.add("dark-theme");
  btn.classList.toggle("btn-toggle--toggle");
}

// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function(e) {
  // Переключаем класс .dark-theme при каждом щелчке
  document.body.classList.toggle("dark-theme");
  // Допустим, тема светлая
 

  let theme = "light";
  // Если <body> содержит класс .dark-theme…
  if (document.body.classList.contains("dark-theme")) {
    // …тогда делаем тему тёмной
  
    theme = "dark";
  }
  // После чего сохраняем выбор в localStorage
  localStorage.setItem("theme", theme);
  localStorage.setItem("btnToggle", btnToggle);

});


document.querySelector(".btn-toggle").addEventListener("click", function(e) {
  
  e.target.closest(".btn-toggle").classList.toggle("btn-toggle--toggle");

})