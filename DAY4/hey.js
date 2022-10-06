const fs = require('fs')
const data = fs.readFileSync(`hey.txt`, 'utf8')

console.log(data)