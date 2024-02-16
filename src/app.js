import { body } from "./variables/domElements";
import { setBackgroundColor } from "./utils/setBackground";

export default function initApp() {
  const btnChangeBack = document.createElement("button");
  btnChangeBack.className = "button";
  btnChangeBack.innerText = "Изменить цвет страницы";

  btnChangeBack.addEventListener("click", setBackgroundColor);
  body.append(btnChangeBack);
}
