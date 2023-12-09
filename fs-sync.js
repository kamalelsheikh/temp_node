const {readFileSync , writeFileSync, readFile, writeFile} = require("fs")
const fs = require("fs")

const first = readFileSync('./content/first.txt' , 'utf-8')
const second = readFileSync('./content/second.txt' , 'utf-8')

console.log(fs.readFileSync("./content/first.txt" , "utf-8"))

console.log(first,second)
writeFileSync("./content/result-Sync.txt" , `Here is the result : ${first} , ${second}` , {flag : "a"} )