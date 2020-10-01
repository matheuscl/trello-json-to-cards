const inquirer = require('inquirer');
const axios = require('axios');
const chalk = require('chalk');
const CLI = require('clui');
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))
const path = require('path')

module.exports = {
  prompt: async (appKey, appToken, boardId, listId) => {
    let question = {
      name: 'json_file',
      type: 'fuzzypath',
      message: 'Now choose the JSON file',
      excludeFilter: nodePath => !(path.extname(nodePath) === '.json'),
      itemType: 'file',
      rootPath: '.',
      suggestOnly: false,
      depthLimit: 0,
    }
    return inquirer.prompt(question);
  }
}
