require('dotenv').config();
const inquirer = require('inquirer');

module.exports = {
  prompt: () => {
    let question = {
      name: 'trello_app_key',
      type: 'input',
      message: 'Enter your Trello APP Key (https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/):',
      default: process.env.TRELLO_KEY,
      validate: value => {
        if (value.length === 32) {
          return true;
        } else {
          return 'Please enter a valid Key.';
        }
      }
    }
    return inquirer.prompt(question);
  }
}
