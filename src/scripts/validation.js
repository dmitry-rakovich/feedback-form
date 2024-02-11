import Inputmask from "inputmask";
const form = document.getElementById("form");
const inputName = form["name"];
const inputEmail = form["email"];
const inputPhone = form["phone"];
const inputMessage = form["message"];

const messageRegex = /^\s*$/g;

new Inputmask("+375(99)999-99-99", {}).mask(inputPhone);

inputName.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.nextElementSibling.innerText =
      "Имя должно быть не короче 2 символов и состоять только из символов а-яА-Яa-zA-Z.";
  } else {
    e.target.nextElementSibling.innerText = "";
  }
});

inputEmail.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.nextElementSibling.innerText =
      "Email должен соответствовать формату example@example.xx и состоять из латиницы";
  } else {
    e.target.nextElementSibling.innerText = "";
  }
});

inputPhone.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.nextElementSibling.innerText =
      "Введите номер телефона в формате +375(25|29|33|44)XXX-XX-XX";
  } else {
    e.target.nextElementSibling.innerText = "";
  }
});

inputMessage.addEventListener("input", (e) => {
  if (e.target.value.trim().match(messageRegex)) {
    e.target.value = "";
    e.target.nextElementSibling.innerText =
      "Поле не должно быть пустым и состоять только из пробелов";
  } else {
    e.target.nextElementSibling.innerText = "";
    return;
  }
});
