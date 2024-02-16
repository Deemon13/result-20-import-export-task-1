import { NUMBERS as numbers } from "../variables/numbers";

export function getRandomNumber() {
  return Math.floor(Math.random() * numbers.length);
}
