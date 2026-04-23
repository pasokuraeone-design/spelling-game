const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('1.不規則動詞変化表_中1.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(console.error);
