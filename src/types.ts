export interface AnimalStructure {
  name: string;
  age: number;
  weight: number;
  eat(food: string): string;
}

export type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type FearLevel = 1 | 2 | 3 | 4 | 5;

export interface MovingAnimalStructure extends AnimalStructure {
  movementMode: string;
  move(distanceInMeters: number): string;
  setSpeed(speed: Speed): void;
}

export interface NotMovingAnimalStructure extends AnimalStructure {
  fixMode: string;
  fix(fixation: string): string;
}

export interface TurtleStructure extends MovingAnimalStructure {
  isHidden: boolean;
  hideInShell(): string;
}
