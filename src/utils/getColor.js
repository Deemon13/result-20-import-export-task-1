import { NUMBERS as numbers } from "../variables/numbers";
import { getRandomNumber } from "./getNumbers";

export function getRandomColor() {
  let color = "#";

  for (let i = 0; i < 6; i += 1) {
    color += numbers[getRandomNumber()];
  }

  return color;
}
