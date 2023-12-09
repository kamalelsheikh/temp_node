// moduls

// const names = require('./4-names')
// const sayhi = require("./fun")
// const mul_nums = require("./fun")
// const sum = require("./fun")
// const get_avrage = require("./fun")
// const path = require("path")
// const http = require("http")

// const server = http.createServer( (req,res) => {
//     if(req.url === "/") 
//     {
//         res.end("Welcome To our page")
//     }
//     if(req.url === "/about")
//     {
//         res.end("Hallo , Welcome To our page ")
//     }
//     res.end(

//         `<h1> Oops! </h1>
//         <p> Something Wrong </p>
//         <a href = "/" > Back to home </a>`
//     )
// })

// server.listen(5000)

// sayhi("kamal")
// sayhi(names.k1)
// sayhi(names.k2)
// mul_nums(5,5)
// sum(2,5)
// get_avrage(1,1)
// require("./Sum")
// require("./osModuls")


// console.log(path.sep)

// const filePath = path.join('/content/' , 'subfolder' , 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const abslute = path.resolve(__dirname , 'content' , 'subfolder' , 'test.txt')
// console.log(abslute)


const _ = require("lodash")

const items = [1 , [2 , [3 , [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)