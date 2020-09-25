const inquirer = require('inquirer');
const _ = require('lodash');
const fuzzy = require('fuzzy');

module.exports = {
  fuzzySearch: (input, data) => {
    input = input || '';
    return new Promise(function (resolve) {
      setTimeout(() => {
        var fuzzyResult = fuzzy.filter(input, data, {extract: el => el.name});
        const results = fuzzyResult.map(function (el) {
          return el.original;
        });

        results.push(new inquirer.Separator());
        resolve(results);
      }, _.random(30, 500));
    });
  }
}
