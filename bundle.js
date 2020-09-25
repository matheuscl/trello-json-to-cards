const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer/init');

// clear();

console.log(
  chalk.yellow(
    figlet.textSync('Trello - JSON to Cards', { horizontalLayout: 'full' })
  )
);



const run = async () => {
  try {
    await inquirer.promptQuestions()
  } catch (error) {
    console.error(chalk.red('Error: ') + error.message);
  }
}

run()
