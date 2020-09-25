require('dotenv').config();
const inquirer = require('inquirer');
const axios = require('axios');
const chalk = require('chalk');
const CLI = require('clui');

module.exports = {
  prompt: async (appKey, appToken) => {
    let listBoards = async () => {
      try {
        let response = await axios.get('https://api.trello.com/1/members/me/boards', {
          params: {
              fields: 'name,url',
              key: process.env.TRELLO_KEY,
              token: process.env.TRELLO_TOKEN
          }
        });

        return response.data;
      } catch (error) {
        console.error(chalk.red('Error: ') + error.message);
      }
    };

    const status = new CLI.Spinner('Getting your boards, please wait...');
    status.start();
    let boards = await listBoards();

    status.stop();


    let question = {
      name: 'trello_boardid',
      type: 'list',
      message: 'Chose the board u want to add the cards:',
      choices: boards.map(board => {
        let name = board.name + ` (${board.url})`
        return {name, value: board.id}
      }),
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
