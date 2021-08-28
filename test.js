"use strict";
const fs = require("fs");
let rawdata = fs.readFileSync("responses.json");
let responses = JSON.parse(rawdata);
// console.log(responses.saudacoesManha);

const found = responses.saudacoesManha.find((element) => "Bom dia" === element);
console.log(found);
