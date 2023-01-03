const fs = require('fs');
const inputData = fs.readFileSync(0,'utf8').toString().trim().split(' ').map(Number) 

const blackNum = [1,1,2,2,2,8]

const result = blackNum.map((ele,idx) => ele - inputData[idx]); 

console.log(result.join(' ')) 