// //put  all import in weekdays
// import { weekdays,DATE_OF_BIRTH_YEAR,sayHi ,doAdd} from "./export.js";
// console.log(weekdays);
// console.log(DATE_OF_BIRTH_YEAR);
// (sayHi("welcome to js"));
// doAdd(1,2)


//default export is outside curly brace(doMul)

// import all
import doMul from "./export.js"; //default export cant be done using import all
import * as lwcbootcamp from "./export.js";

lwcbootcamp.sayHi("Hello Atharva");
lwcbootcamp.doAdd(2,5);
doMul(2,4);
