// // interfaces
// interface IsPerson {
//     name:string;
//     age:number;
//     speak(a:string): void;
//     spend(a:number): number;
// }
// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text:string): void {
//         console.log(text);
//     },
//     spend(amount:number): number {
//         console.log('I spent', amount);        
//         return amount;
//     }
// };
// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// }
// greetPerson(me);
// console.log(me);
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[]= [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instace
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// // GENERICS
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let docOne = addUID({name: 'yoshi', age: 40});
// console.log(docOne.name);
// // with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1, 
//     resourceName: 'person', 
//     data: { name: 'shaun' }
// };
// const docFour: Resource<string[]> = {
//     uid: 2, 
//     resourceName: 'list', 
//     data: ['bread', 'milk']
// };
// console.log(docThree);
// console.log(docFour);
// // ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// }
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.DIRECTOR,
//   data: { title: 'name of the wind' }
// }
// console.log(docOne);
// console.log(docTwo);
// // TUPLES
// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];
// let tup: [string, number, boolean] = ['ryu', 34, true];
// tup[0] = 'ken';
// tup[1] = 23;
// let student: [string, number];
// //student = [23564, 'chun-li'];
// student = ['chun-li', 23564];
// /// <reference path="Utils.ts" />
// namespace UsersUtils {
//     export class Users extends Parent {
//         getName(): string {
//             return this.name;
//         }
//     }
// }
// let u1 = new UsersUtils.Users();
// u1.setName('boss');
// console.log(u1.getName());
