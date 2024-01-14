import { type Speed, type MovingAnimalStructure } from "../types";
import { Animal } from "./Animal.js";

export class MovingAnimal extends Animal implements MovingAnimalStructure {
  movementMode: string;
  private speed: Speed;

  move(distanceInMeters: number): string {
    return `Moved ${distanceInMeters} meters`;
  }

  setSpeed(speed: Speed): void {
    this.speed = speed;
  }
}
