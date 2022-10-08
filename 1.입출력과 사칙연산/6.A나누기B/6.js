// 6.A나누기B

const fs = require('fs')
const inputData = fs.readFileSync('test.txt').toString().split(' ')

const A = parseInt(inputData[0])
const B = parseInt(inputData[1])

console.log(A/B)