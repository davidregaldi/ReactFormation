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

export default (userName, message) => {
    console.log('Hello');
    return userName + message;
}




