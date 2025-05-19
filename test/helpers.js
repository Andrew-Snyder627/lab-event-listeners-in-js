// Helpers for setting up the testing environment
// const { JSDOM } = require('jsdom')
// const fs = require('fs')

// const html = fs.readFileSync('index.html', 'utf8')

// const dom = new JSDOM(html)
// const document = dom.window.document

// global.document = document

// module.exports = {
//   document,
// }


const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const dom = new JSDOM(html);

global.document = dom.window.document;
global.window = dom.window;
module.exports = { document };