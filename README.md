# ![#red](https://via.placeholder.com/15/f03c15/000000?text=+) Important ![#red](https://via.placeholder.com/15/f03c15/000000?text=+)
This isn't a official app for Trello, use it at your own risk.

# Create Trello cards using JSON file
This's a very very simple Trello importer that I made to solve a little problem and decided to share. xD

## Instalation Guide
Just run `yarn install` =)

## Configuring our environment
Get your api Key and Token provided by [Trello](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/#authentication-and-authorization).

With API Key and Token in hands create a `.env` file configure it in specified variables:
```
TRELLO_KEY={{{API_KEY_GOES_HERE}}}
TRELLO_TOKEN={{{API_TOKEN_GOES_HERE}}}
```

## Choosing our Trello board
Run `yarn get-boards` and you'll see all the boards that you're in, choose one and copy'n'paste the id in `.env` file at:
```
TRELLO_BOARD_ID={{{CHOOSEN_BOARD_ID_GOES_HERE}}}
```

## Choosing our Trello list
Run `yarn get-board-lists` and you'll see all the lists from the board you had chosen, choose one and copy'n'paste the id in `.env` file at:
```
TRELLO_LIST_ID={{{CHOSEN_BOARD_ID_GOES_HERE}}}
```

## Selecting the file that you want to import
Go to `.env` again and paste the full or the relative path of the JSON file and paste in this variable:
```
JSON_FILE_PATH=./your-file-path.json
```

## Specify the json attribute for name and description of the card
...
```
CARD_NAME_JSON_ATTRIBUTE={{{JSON_NAME_ATTRIBUTE}}}
CARD_DESC_JSON_ATTRIBUTE={{{JSON_DESCRIPTION_ATTRIBUTE}}}
```

## Finally importing items to Trello
After all these steps you just need to run `yarn import-items` and wait till finish. =)

## Contributing
Feel free to fork or open an issue.

# Todos
- [ ] Make this a full cli integration =)
- [ ] Move to TS
- [ ] Improve the code quality kkk (will be better when I move this to TS)
- [ ] Improve error messaging
- [ ] Implements [inquire-fuzzy-path](https://github.com/adelsz/inquirer-fuzzy-path)

*This's a work in progress*
