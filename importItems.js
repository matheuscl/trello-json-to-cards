// just found a cool name for this file, ignore it kkkkkk
require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');
const axios = require('axios');

if(!process.env.TRELLO_KEY || !process.env.TRELLO_TOKEN) {
  console.error(chalk.red('Error: ') + 'You must create a .env file providing Trello API Key and Token (https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/#authentication-and-authorization).');
}

if(!process.env.TRELLO_LIST_ID) {
  console.error(chalk.red('Error: ') + 'You must specify list_id in .env file.');
}

let importItems = async () => {
  try {
    let listId = process.env.TRELLO_LIST_ID;
    let jsonFilePath = process.env.JSON_FILE_PATH;

    let items = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      let response = await axios.post(`https://api.trello.com/1/cards`, null, {
        params: {
            key: process.env.TRELLO_KEY,
            token: process.env.TRELLO_TOKEN,
            idList: listId,
            name: item[process.env.CARD_NAME_JSON_ATTRIBUTE],
            desc: item[process.env.CARD_DESC_JSON_ATTRIBUTE],
            pos: 'top'
        }
      });

      console.log(chalk.green('Success: ') + chalk.blue('Card: ') + `${response.data.name} (${response.data.shortUrl})`);

    }
  } catch (error) {
    console.error(chalk.red('Error: ') + error.message);
  }
};

importItems();
