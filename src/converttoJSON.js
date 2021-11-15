const fs = require ('fs');
const recipe = require('./fake-data');

const FILE_NAME = 'recipes.json';

fs.writeFileSync(
    FILE_NAME,
    JSON.stringify(recipe),
    'utf-8',
);

console.log('Done!');