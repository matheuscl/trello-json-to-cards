// just found a cool name for this file, ignore it kkkkkk
const fs = require('fs');
const chalk = require('chalk');
const axios = require('axios');

module.exports = {
  importItems: async (appKey, appToken, listId, jsonFile) => {
    console.log(appKey, appToken, listId, jsonFile)
    try {
      let items = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

      for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let response = await axios.post(`https://api.trello.com/1/cards`, null, {
          params: {
              key: appKey,
              token: appToken,
              idList: listId,
              name: item.name,
              desc: item.desc,
              pos: 'top'
          }
        });

        console.log(chalk.green('Success: ') + chalk.blue('Card: ') + `${response.data.name} (${response.data.shortUrl})`);
      }
    } catch (error) {
      console.error(chalk.red('Error: ') + error.message);
    }
  }
}
