const _ = require('lodash');

const items = ['A', [1, 2, ['B', 'C']], [5, 6], 'Z'];
const newItems = _.flattenDeep(items);
console.log(newItems);
