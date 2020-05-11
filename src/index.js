"use strict";
exports.__esModule = true;
var isOpen = false;
var myName = 'Scott';
var myAge = 32;
var list = [0, 1, 2];
// tuple:
var me = ['Mike', 32, false];
// enum:
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["PM"] = 2] = "PM";
})(Job || (Job = {}));
var job = Job.WebDev;
// any
var phone = 'Pixel';
var tablet = 3;
// never
// const homes: never = 3;
var homes = 3;
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
// const makeMargin = (x: string | number): string => {
//   return `margin: ${x}px;`;
// };
// makeMargin(10);
// makeMargin('Miao');
// makeMargin(true);
// Null types (and undefined are automatically added to your standard types)
// let dog: string;
// dog = null;
// console.log('dog', dog);
// dog = 'Lucie';
// dog = undefined;
// dog = 10;
// dog = false;
// Interfaces
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
// const sayName = ({ name, age }: Person): Person => {
//   console.log(name);
//   return { name, age };
// };
sayName({
    name: 'Mike',
    age: 32
});
// sayName({
//   age: 32,
//   name: 'Mike',
// });
// sayName({
//   name: 'Mike',
// });
// Enums
// Numeric enum:
// enum Type {
//   Video, // 0
//   BlogPost, // 1
//   Quiz, // 2
// }
// const createContent = (contentType: Type) => {};
// createContent(Type.Quiz);
// createContent(0);
// console.log(Type.Quiz);
// String enum:
// enum Type2 {
//   Video = 'VIDEO',
//   BlogPost = 'BLOG_POST',
//   Quiz = 'QUIZ',
// }
// const createContent2 = (contentType: Type2) => {};
// createContent2(Type2.Quiz);
// createContent2('QUIZ'); // not going to work
// console.log(Type2.Quiz);
// Classes
// class Team {
//   teamName: string;
// public teamName: string; // this is same as above
// private teamName: string; // prevents outside usage
// readonly teamName: string; // prevents from being changed
//   constructor(teamName) {
//     this.teamName = teamName;
//   }
//   score(): string {
//     this.teamName = 'changing';
//     console.log('Gooooooal!');
//     console.log(this.teamName);
//     return 'goal';
//   }
// }
// const redWings = new Team('Red Wings');
// redWings.score();
// console.log(redWings.teamName);
