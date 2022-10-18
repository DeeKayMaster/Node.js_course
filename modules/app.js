const names = require('./names') // import names from names.js
const sayHi = require('./utils')
const data = require('./alternative-flavor')
console.log(data)
sayHi('Simon')
sayHi(names.carl)
sayHi(names.david)