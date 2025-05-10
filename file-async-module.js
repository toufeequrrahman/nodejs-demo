const { readFile, writeFile } = require('node:fs');

readFile('./content/first.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
  const first = data;
  readFile('./content/second.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    const second = data;
    writeFile('./content/result-async.txt', `${first + second}`, {flag: 'a'}, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
    });
});
