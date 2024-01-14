import { type Speed, type MovingAnimalStructure } from "../types";
import { Animal } from "./Animal.js";

export abstract class MovingAnimal
  extends Animal
  implements MovingAnimalStructure
{
  movementMode: string;
  protected speed: Speed;

  move(distanceInMeters: number): string {
    return `Moved ${distanceInMeters} meters`;
  }
  abstract setSpeed(speed: Speed): void;
}
