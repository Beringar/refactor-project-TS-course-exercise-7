import { type FearLevel, type AnimalStructure } from "../types";

export class Animal implements AnimalStructure {
  name: string;
  age: number;
  weight: number;
  protected fearLevel: FearLevel;

  eat(food: string): string {
    return food;
  }
}
