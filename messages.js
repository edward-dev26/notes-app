const chalk = require('chalk');

const success = (text) => {
    console.log(chalk.bgGreen.bold(text));
};

const error = (text) => {
    console.log(chalk.bgRed.bold(text));
};

module.exports = {
    success,
    error
};