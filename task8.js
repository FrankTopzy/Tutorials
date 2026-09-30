"use strict";
function processString(value, callback) {
    return callback(value);
}
const result = processString("frank", value => value.toUpperCase());
console.log(result);
