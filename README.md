# ![#red](https://via.placeholder.com/15/f03c15/000000?text=+) Important ![#red](https://via.placeholder.com/15/f03c15/000000?text=+)
This isn't a official app for Trello, use it at your own risk.

# Create Trello cards using JSON file
This's a very very simple Trello importer that I made to solve a little problem and decided to share. xD

## Instalation Guide
Just run `npm install -g trello-json-to-cards` =)

## Usage
You only need to run `trello-json-to-cards` from the location of the JSON file that u want to import and follow the CLI step-by-step "setup".

## JSON file pattern (the JSON **MUST** be in this format)
```json
[
  {
    "name": "Testing trello-json-to-cards",
    "desc": "Lorem ipsum dolor sit amet..."
  }
]
```

## Contributing
Feel free to fork or open an issue.

# Todos
- [x] Make this a full cli integration =)
- [ ] Move to TS
- [ ] Add linter
- [ ] Improve the code quality kkk (will be better when I move this to TS)
- [ ] Improve error messaging
- [x] Implements [inquire-fuzzy-path](https://github.com/adelsz/inquirer-fuzzy-path)

*This's a work in progress*
