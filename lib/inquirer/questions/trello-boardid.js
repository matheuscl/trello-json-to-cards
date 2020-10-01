const inquirer = require('inquirer');
const axios = require('axios');
const chalk = require('chalk');
const CLI = require('clui');
const fuzzySearcher = require('../fuzzy-search');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

module.exports = {
  prompt: async (appKey, appToken) => {
    let listBoards = async () => {
      let response = await axios.get('https://api.trello.com/1/members/me/boards', {
        params: {
            fields: 'name,url',
            key: appKey,
            token: appToken
        }
      });

      return response.data;
    };

    const spin = new CLI.Spinner('Getting your boards, please wait...');
    spin.start();

    let boards = await listBoards()
      .finally(() => spin.stop());

    if(boards.length < 1) {
      throw new Error('No boards found!')
    }

    boards = boards.map(board => {
      let name = board.name + ` (${board.url})`
      return {name, value: board.id}
    })

    let question = {
      name: 'trello_boardid',
      type: 'autocomplete',
      message: 'Choose the board u want to add the cards:',
      source: (answers, input) => {
        return fuzzySearcher.fuzzySearch(input, boards);
      },
      validate: function (val) {
        return val ? true : 'Type something!';
      },
    }
    return inquirer.prompt(question);
  }
}
