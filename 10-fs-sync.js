const {readFileSync, writeFileSync} = require('fs')

console.log('====start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log("====reading files", first, second)


writeFileSync(
    './content/result-sync.txt', 
    `First content: ${first}. Second content: ${second}`,
    {flag: 'a'}
)
console.log('====done with task')

console.log('====starting the next task')