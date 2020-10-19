const { isConstructorDeclaration } = require("typescript");

'use strict';

const fs = require('fs');

fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let jsondata = JSON.parse(data);
    console.log(jsondata);
});



/*let data = JSON.parse(rawdata);
console.log(data.count);*/

