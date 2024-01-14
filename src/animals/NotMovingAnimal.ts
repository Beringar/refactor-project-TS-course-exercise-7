import { type NotMovingAnimalStructure } from "../types";
import { Animal } from "./Animal.js";

class NotMovingAnimal extends Animal implements NotMovingAnimalStructure {
  fixMode: string;

  fix(fixation: string): string {
    return `Is fixed in ${fixation}`;
  }
}
