const inquirer = require('inquirer');
const axios = require('axios');
const chalk = require('chalk');
const CLI = require('clui');
const fuzzySearcher = require('../fuzzy-search');

module.exports = {
  prompt: async (appKey, appToken, boardId) => {
    let listLists = async () => {
      let response = await axios.get(`https://api.trello.com/1/boards/${boardId}/lists`, {
        params: {
            fields: 'name,url',
            key: appKey,
            token: appToken
        }
      });

      return response.data;
    };

    const spin = new CLI.Spinner('Getting your lists, please wait...');
    spin.start();

    let lists = await listLists()
      .finally(() => spin.stop());

    if(lists.length < 1) {
      throw new Error('No lists found in this board!')
    }

    lists = lists.map(list => {
      return {name: list.name, value: list.id}
    })

    let question = {
      name: 'trello_listid',
      type: 'autocomplete',
      message: 'Now choose the list u want to add the cards:',
      source: (answers, input) => {
        return fuzzySearcher.fuzzySearch(input, lists);
      },
    }
    return inquirer.prompt(question);
  }
}
