let aa =function (message){
console.log(message);
}
aa('akhil');

let bb= (message) => console.log(message);
bb("hi user");

//If a function have only one line definition, we dont need to use function keyword and curley braces, and simply 
//declare it using => symbol. This is called arrow function in typescript.
//When it compiles, node will transpile the ts to js then the arrow function will be converted to normal javascript function.