var helper = require('./helper/random-stuff.js');
var Stock = require('./model/stock.js');
var Table = require('./model/table.js');

var stockList = [];

for (let i = 0; i < 30; i++){
	let code = helper.randomCode();
	let company = helper.companies[i];
	let originalPrice = helper.randomPrice(0.01, 99.99);
	let volumn = helper.randomCommon(10, 30);

	let stock = new Stock(code, company, originalPrice, volumn);
	stockList.push(stock);
}

var myTable = new Table(stockList);

// console.log(JSON.stringify(stockList, undefined, 2));

module.exports = myTable;

