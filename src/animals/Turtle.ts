import { type Speed, type FearLevel, type TurtleStructure } from "../types";
import { MovingAnimal } from "./MovingAnimal.js";

export class Turtle extends MovingAnimal implements TurtleStructure {
  isHidden = false;

  constructor(fearLevel: FearLevel, speed: Speed) {
    super();
    this.fearLevel = fearLevel;
    this.setSpeed(speed);
    if (fearLevel > 3) {
      this.hideInShell();
    }
  }

  hideInShell(): string {
    this.isHidden = true;
    return `Turtle is ${this.isHidden ? "" : "not"} hidden`;
  }

  setSpeed(speed: Speed): void {
    this.speed = speed > 5 ? 5 : speed;
  }
}
