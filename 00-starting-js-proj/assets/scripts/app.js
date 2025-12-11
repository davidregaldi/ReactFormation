// import { apikey } from "./util.js";
// import apikey from "./util.js";
// import { apikey, abc as content } from "./util.js";
// import * as util from "./util.js";

// console.log(apikey);
// console.log(util.apikey, util.abc, util.default);
// console.log(content);

// let userMessage = "Hello World !";
// const userMessage2 = "Hello World !!";
// console.log("hello world !");
// console.log(userMessage);
// console.log(userMessage2);

// console.log(10 * 5);
// console.log("hello" + "world");
// console.log(10 === 5);
// console.log(10 === 10);
// console.log(10 >= 5);
// if (10 === 10) {
//     console.log("works !");
// }

// function createUserGreeting(userName, message = "Hello !") {
//     if (userName !== undefined) {
//         return `${userName}. ${message}`;
//     } else {
//         return message;
//     }
// }
// console.log(createUserGreeting());
// console.log(createUserGreeting("Max", "Hello, what's up ?"));
// console.log(createUserGreeting("Manuel", "Hello !"));
// const greeting1 = createUserGreeting("Julie", "Coucou !");
// console.log(greeting1);

// function combine(a, b, c) {
//     if (![a, b, c].every(Number.isFinite) || c === 0) {
//         return "Invalid input !";
//     }
//     return a * b / c;
// }
// console.log(combine(10, 5, 0));
// console.log(combine("10", "fgdgdf", 1));
// console.log(combine(10, 50, 8));

// export default (userName, message) => {
//     console.log('Hello');
//     return userName + message;
// }

// const user = {
//     name: "Max",
//     age: 34,
//     isMonster: true,
//     greet() {
//         let message = ""
//         if (this.isMonster) {
//             message = "You are a monster !";
//         }
//         console.log(`Hello! ${this.name}. ${message}`);
//     }
// };
// user.greet();
// user.name = "Manuel";
// user.isMonster = false;
// user.greet();
// console.log(user.name, user.age, user.isMonster);

// class User {
//     constructor(name, age, monster) {
//         this.name = name;
//         this.age = age;
//         this.monster = monster;
//     }
//     greet() {
//         console.log(`Hello! ${this.name}. ${this.monster ? "You are a monster !" : "You are not a monster !"}`);
//     }
// }
// const user1 = new User("Michel", 34, true);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies);
// console.log(hobbies[2]);
// hobbies.push("Swimming");
// console.log(hobbies);
// console.log(hobbies[3]);
// const index = hobbies.findIndex((item) => {
//     return item === "Sports";
// })
// // const index = hobbies.findIndex(item => item === "Sports");
// console.log(index);
// // const editedHobbies = hobbies.map((item) => item + "!")
// const editedHobbies = hobbies.map((item) => ({ name: item }))
// console.log(editedHobbies);

// function transformToObjects(numberArray) {
//     return numberArray.map((item) => ({ val: item }));
// }
// const numberArray = [1, 2, 3];
// const transformedArray = transformToObjects(numberArray);
// console.log(transformedArray);

// const [firstName, lastName] = ["max", "Scharzmuller"];
// console.log(firstName);
// console.log(lastName);
// const { name: userName, age } = {
//     name: "max",
//     age: 34,
// }
// console.log(userName, age);

// const hobbies = ["sports", "cooking"];
// const newHobbies = ["reading"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);
// const user = {
//     name: "Max",
//     age: 34,
// }
// const extendedUser = {
//     isAdmin: true,
//     ...user
// }
// console.log(extendedUser);

// const password = prompt("Enter your password");
// if (password === "hello") {
//     console.log("hello works");
// } else if (password === "world") {
//     console.log("world works");
// } else {
//     console.log("Acces not granted");
// }
// const hobbies = ["sports", "cooking", "reading", "traveling"];
// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

function handleTimeout() {
    console.log("Timeout!");
}
const handleTimeout2 = () => {
    console.log("Timeout ... again !");
}
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => { console.log("More timing out...") }, 4000)

function greeter(greetFn) {
    greetFn();
}
greeter(() => console.log("Hi"));


