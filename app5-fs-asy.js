//cosnt fs = require('fs')  // estructurado
//fs.read
const { readFile, writeFile } = require('fs') //de-estructurado
console.log('inicia tarea')
readFile('./content01/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content01/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content01/result-sync.txt',
      `here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('fin tarea (sobreescribe)')
      }
    )
  })
})
console.log('empezando otra tarea')
