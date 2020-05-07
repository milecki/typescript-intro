const isOpen: boolean = false;
const myName: string = 'Scott';
const myAge: number = 32;
const list: number[] = [0, 1, 2];
// tuple:
const me: [string, number, boolean] = ['Mike', 32, false];
// enum:
enum Job {
  WebDev,
  WebDesigner,
  PM,
}
const job: Job = Job.WebDev;
// any
const phone: any = 'Pixel';
const tablet: any = 3;
// never
// const homes: never = 3;
const homes: any = 3;

// Functions in TypeScript

// 1)
// const sayWord = (word: string): string => {
//   console.log(word);
//   return word;
// };
// sayWord('Mike');

// 2)
// add "?" to set parameter as optional

// const sayWord = (word?: string): string => {
//   console.log(word || 'Hello');
//   return word || 'Hello';
// };
// sayWord();

//3)
// you can also set a default value
// in that case you don't have to specify the type
// const sayWord = (word = 'Hello'): string => {
//   console.log(word);
//   return word;
// };
// sayWord();

// 4)
// you can also use rest parameters
// const sayWord = (word = 'Hello', ...otherStuff: string[]): string => {
//   console.log(otherStuff);
//   return word;
// };
// sayWord('Mike', 'Lisa', 'Danny');

// Implicit Types in TS

// let newName = 'Mark';
// newName = 'Johnny';
// newName = 10;
// console.log(newName);

// Gets type from initial declaration
// let newNameTwo = newName;
// newNameTwo = 10;

// union types (with |)
// the type here is one of three - string, number or boolean
// let newName: string | number | boolean = 'Mark';
// newName = 'Johnny';
// newName = 10;
// newName = false;
// console.log(newName);

// let newNameTwo = newName;
// newNameTwo = 39;
// console.log(newNameTwo);

// union types in functions
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px;`;
};

makeMargin(10);
makeMargin('Miao');
// makeMargin(true);

// Null types (and undefined are automatically added to your standard types)
let dog: string;
dog = null;
console.log('dog', dog);
dog = 'Lucie';
dog = undefined;
dog = 10;
dog = false;
