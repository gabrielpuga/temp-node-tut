//cosnt fs = require('fs')  // estructurado
//fs.read
const { readFileSync, writeFileSync } = require('fs') //de-estructurado
console.log('Inicio')
const first = readFileSync('./content01/first.txt', 'utf-8') //lee
const second = readFileSync('./content01/second.txt', 'utf-8') //lee
console.log(first) //a pantalla
console.log(second) //a pantalla
writeFileSync(
  './content01/result-sync.txt',
  `here is the result: ${first}, ${second}`, //sobreescribe
  { flag: 'a' } //appends
)
console.log('escribe (append) fin tarea')
console.log('inicia sig. tarea')
