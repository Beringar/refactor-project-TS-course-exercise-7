import { type Speed, type FearLevel, type TurtleStructure } from "../types";
import { MovingAnimal } from "./MovingAnimal.js";

// TODO: do not implement setSpeed in MovingAnimal, make MovingAnimal an abstract class, and implement setSpeed here, in Turtle class
export class Turtle extends MovingAnimal implements TurtleStructure {
  isHidden = false;

  constructor(fearLevel: FearLevel, speed: Speed) {
    super();
    this.fearLevel = fearLevel;
    this.setSpeed(speed > 5 ? 5 : speed); // TODO: this should be inside a setSpeed method implemented inside this class
    if (fearLevel > 3) {
      this.hideInShell();
    }
  }

  hideInShell(): string {
    this.isHidden = true;
    return `Turtle is ${this.isHidden ? "" : "not"} hidden`;
  }
}
