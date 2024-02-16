import { body } from "../variables/domElements";
import { getRandomColor } from "./getColor";

export function setBackgroundColor() {
  body.style.backgroundColor = getRandomColor();
}
