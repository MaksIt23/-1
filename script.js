// 1. Вывод в консоль (как требуется в задании)
console.log("Привет! Это сообщение из файла script.js. JavaScript работает!");

// 2. Небольшая интерактивность для кнопки на главной странице
const button = document.getElementById("myButton");
if (button) {
  button.addEventListener("click", function () {
    alert("Кнопка была нажата! JavaScript успешно подключен.");
  });
}
