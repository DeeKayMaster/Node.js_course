const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items); // funkcja zamieni tablice wielowymiarową 'items' na jednowymiarowa 'newItems'
console.log(newItems)
