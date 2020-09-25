const TrelloAppKeyQuestion = require('./questions/trello-app-key')
const TrelloAppTokenQuestion = require('./questions/trello-app-token')
const TrelloBoardIdQuestion = require('./questions/trello-boardid')
const TrelloListIdQuestion = require('./questions/trello-listid')

module.exports = {
  promptQuestions: async () => {
    let {trello_app_key: appKey} = await TrelloAppKeyQuestion.prompt();
    let {trello_app_token: appToken} = await TrelloAppTokenQuestion.prompt();
    let {trello_boardid: boardId} = await TrelloBoardIdQuestion.prompt(appKey, appToken)
    let {trello_listid: listId} = await TrelloListIdQuestion.prompt(appKey, appToken, boardId)
    console.log(appKey, appToken, boardId, listId)
  }
}
