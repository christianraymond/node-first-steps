const chalk = require('chalk');
const greet = require('./greet');

 const styledMessage = chalk.bgGreen.black(greet('Xola,'));
 const styledMessage1 = chalk.bgGreen.black(greet('Christian,'));
 const styledMessage2 = chalk.bgGreen.black(greet('Ngubana.'));

 console.log(styledMessage);
 console.log(styledMessage1);
 console.log(styledMessage2);



