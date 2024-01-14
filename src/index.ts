import { Turtle } from "./animals/Turtle.js";

const turtle: Turtle = new Turtle(2, 9);

console.log(turtle);

turtle.setSpeed(1);

console.log(turtle);

/*
TODOS: Everything works OK, but there are undefined properties (check the output, age, weight, name...).
Add constructors to Animal, MovingAnimal and NotMovingAnimal classes with required properties. Pass those to respective super() methods in each constructor.  
 */
