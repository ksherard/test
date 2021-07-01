// module = encapsulated code (only share minimum)
// every file in node is a module(by default)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-export')
 
require('./7-mind-grenade')
// logs what's included in the names import
// console.log(names)

// logs what's included in the utils import
// console.log(sayHi)

// logs what's included in the alternative import file
// console.log(data)



// sayHi('susan')
// sayHi(names.john)
