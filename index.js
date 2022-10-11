const process = require('process');
let args = process.argv.slice(2);
const args1 = args.join(' ');

const vowelsList = ['a', 'e', 'i', 'o', 'u'];
let vcount = 0;

for (let letter of args1) {
  if (vowelsList.includes(letter)) {
    vcount++;
  }
}
console.log(args1);
console.log('number of arguments is ' + args.length);
console.log(vcount);
