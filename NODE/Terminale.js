/* Exercise 2: Explore with the Node.js REPL

Use the Node.js REPL to list the methods provided by the Node.js core crypto module. Use one of these methods to generate a random ID. */

const crypto = require("crypto");
console.log(crypto);
const id = crypto.randomBytes(16).toString("hex");
console.log(id);
