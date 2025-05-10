// - Encapsulated code (only share minimum)
// - Every file is a module (by deault)

// const names = require('./names');
const {aqib, umar} = require('./names');
const sayHi = require('./utils');
require('./mind-grenade');
// console.log(names);

// sayHi(names.aqib);
// sayHi(names.umar);
sayHi(aqib);
sayHi(umar);
sayHi('Doaa');
