// just found a cool name for this file, ignore it kkkkkk
require('dotenv').config();
const chalk = require('chalk');
const axios = require('axios');

if(!process.env.TRELLO_KEY || !process.env.TRELLO_TOKEN) {
  console.error(chalk.red('Error: ') + 'You must create a .env file providing Trello API Key and Token (https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/#authentication-and-authorization).');
}

if(!process.env.TRELLO_BOARD_ID) {
  console.error(chalk.red('Error: ') + 'You must provide a board_id in .env file.');
}

let listLists = async () => {
  try {
    let boardId = process.env.TRELLO_BOARD_ID;
    let response = await axios.get(`https://api.trello.com/1/boards/${boardId}/lists`, {
      params: {
          fields: 'name,url',
          key: process.env.TRELLO_KEY,
          token: process.env.TRELLO_TOKEN
      }
    });

    console.log(chalk.green('Success: \n') + JSON.stringify(response.data,null,'\t'));
  } catch (error) {
    console.error(chalk.red('Error: ') + error.message);
  }
};

listLists();
