const inquirer = require('inquirer');

module.exports = {
  prompt: () => {
    let question = {
      name: 'trello_app_token',
      type: 'input',
      message: 'Enter your Trello APP Token:',
      validate: value => {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a valid Token.';
        }
      }
    }
    return inquirer.prompt(question);
  }
}
