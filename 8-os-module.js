const os = require('os')


console.log(os.userInfo());
console.log(`the os has been running for ${os.uptime() / 60 / 60} hours`);

const osInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(osInfo)