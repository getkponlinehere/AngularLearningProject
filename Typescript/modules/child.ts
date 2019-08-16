import { PointerClass } from './module';

let point= new PointerClass(1,2);
console.log(point.x);
point.x=12;
console.log(point.x);
point.draw();

// Use export keyword for every class when it needs to use in another class or module.
// Use import keyword for using modules from outside that program and add relative path to that module.