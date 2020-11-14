var fs = require('fs');
const data = require('./data.json');

function exportToJs(data) {
  fs.writeFileSync('data.js', `let data = ${JSON.stringify(data)}`);
}

const myData = data.data;
function app() {
  const _data = Object.entries(myData);
  const dataToExport = _data.map((e) => {
    return {
      name: e[1].name,
      img: e[1].image.full
    };
  });
  exportToJs(dataToExport);
}

app();
