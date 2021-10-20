const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profDataArgs = process.argv.slice(2);
const [name, github] = profDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete!');
})