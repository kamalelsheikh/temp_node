// info about current user
const os = require('os')
console.log(os.userInfo())

// method returnS he system up time in seconds
console.log('The System uptime is' , os.uptime() , "seconds")
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOs =
{
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs)