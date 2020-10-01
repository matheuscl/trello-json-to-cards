#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer/init');
const trelloImporter = require('./importItems')

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Trello - JSON to Cards', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  try {
    let {appKey, appToken, listId, jsonFile} = await inquirer.promptQuestions()

    trelloImporter.importItems(appKey, appToken, listId, jsonFile)
  } catch (error) {
    console.error(chalk.red('Error: ') + error.message);
  }
}

run()
