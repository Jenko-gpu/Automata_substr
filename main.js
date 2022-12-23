string = "колокольчик и колокол"

template = "колокол";



//import {CreateTable, FindSubst} from './funcs.js';
const funcs = require('./funcs.js');


let Table = funcs.CreateTable(template);
console.log(funcs.FindSubst(string, Table));
