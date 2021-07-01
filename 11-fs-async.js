const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log("error: ", err)
        return null
    }
    console.log("result: ", result)
    const first = result

    readFile('./content/second.txt', 'utf8', (err,result2)=>{
        if(err){
            console.log("error: ", err)
            return null
        }
        console.log("result2: ", result2)
        const second = result2
        writeFile('./content/result-async.txt',`result: ${first} ${second}`, (err,result)=>{
            if (err){
                console.log(err)
            }
            console.log(result)
            console.log('done with this task')
        })
    })
})
console.log('starting next task')