require('dotenv').config();
const inquirer = require('inquirer');

module.exports = {
  prompt: () => {
    let question = {
      name: 'trello_app_key',
      type: 'input',
      message: 'Enter your Trello APP Key:',
      default: process.env.TRELLO_KEY,
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a valid Key.';
        }
      }
    }
    return inquirer.prompt(question);
  }
}
