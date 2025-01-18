"use strict";
// // variables
// let character = "mario";
// let age = 30;
// let isBlackBelt = false;
// // character = 20;
// character = "luigi";
// // age = "yoshi";
// age = 40;
// // isBlackBelt = "yes";
// isBlackBelt = true;
// // functions
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(2));
// // arrays
// let names = ['luigi', 'mario', 'yoshi'];
// // names = 'hello';
// names.push('toad');
// // names.push(2);
// // names[0] = false;
// let numbers = [10, 20, 30, 40];
// numbers.push(25);
// // numbers.push('sam');
// // numbers[1] = 'false';
// let mixed = ['ken', 4, 'chun-li', 8, 9];
// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;
// // mixed.push(false);
// // objects
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// };
// ninja.age = 40;
// ninja.name = 'ryu';
// // ninja.age = '30';
// // ninja.skills = ['fighting', 'sneaking'];
// // ninja = '';
// // let ninja = {
// //     name: 'yoshi',
// //     belt: 'red',
// //     age: 30,
// //     skills: []
// // };
// // explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// // age = '2';
// age = 30;
// // isLoggedIn = 'f';
// isLoggedIn = true;
// // arrays
// let ninjas: string[] = [];
// // ninjas = [10, 23];
// ninjas.push('shuan');
// // union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(false);
// console.log(typeof mixed);
// let uid: (string | number);
// uid = '123';
// uid = 123;
// // objects
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 20};
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// };
// ninjaTwo = {
//     name: 'mario',
//     beltColour: 'black',
//     age: 30
// };
// // any type
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'luigi'};
// console.log(age);
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);
// let ninja: {name: any, age: any};
// ninja = {
//     name: 'yoshi',
//     age: 25
// };
// console.log(ninja);
// ninja = {
//     name: 25,
//     age: 'yoshi'
// };
// console.log(ninja);
// // Functions
// let greet: Function;
// greet = () => {
//     console.log('hello');
// }
// const add = (a: number, b: number, c: number | string = 10): void => {
//     console.log(a + b);
//     console.log(c);
// }
// add(5, 10, '20');
// const minus = (a: number, b: number): number => {
//     return a - b;
// }
// let result = minus(10, 7);
// // Type Alias
// type stringOrNum = string | number;
// type objWithName = { name: string, uid: stringOrNum };
// const logDetails = (uid: stringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }
// // Function signatures
// // Example 1
// let greet: (a:string, b:string) => void;
// greet = (name:string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
// // Example 2
// let calc: (a:number, b:number, c:string) => number;
// calc = (numOne:number, numTwo:number, action:string) => {
//     if (action == 'add') {
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo;
//     }
// }
// // Example 3
// let logDetails: (obj: {name: string, age: number}) => void;
// type person = {name: string, age: number};
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// }
// // DOM
// const anchor = document.querySelector('a')!;
// // if (anchor) {
// //     console.log(anchor.href);
// // }
// console.log(anchor.href);
// // namespace
// namespace UsersUtils {
//     export class Users {
//         getName(){
//             return 'john';
//         }
//     }
// }
// let u1 = new UsersUtils.Users();
// console.log(u1.getName());
