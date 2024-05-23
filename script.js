// let n = 5;

// for (let i = 0; i < n; i++) {
//     console.log(`Hare Krishna shivam`, i);
// }

// let args = process.argv;

// for (let i = 0; i < args.length; i++) {
//     console.log(`welcome to sanyam ${args[i]} !`);
// }

// const mat = require('./math');
// console.log(mat);

// const user_value = require('./math');
// console.log(user_value);

// const fruits = require('./fruits');
// console.log(fruits);

import { sum, PI } from "./math.js";
import {generate} from "random-words";
console.log(sum(8, 7));
console.log(generate())