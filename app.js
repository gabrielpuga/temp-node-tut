// npm i lib(instala lib)
// npmjs.com  (proyectos p/descargar)
// npm -v (version)
// manual approach (create package.json in the root, crete properties, etc)
// npm init (step by step, press enter to skip)
// npi init -y (package with everything default)

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
