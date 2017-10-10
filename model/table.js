var helper = require('../helper/random-stuff.js');

function Table(stocks){
	this.stocks = stocks;
	this.gainers = [];
	this.losers = [];	
}

Table.prototype.sortArray = function(){
	this.stocks.sort(function(a, b){
		return a.getValue() - b.getValue();
	});
}

Table.prototype.updateDataAndSort = function(){	
	setInterval(() => {		
		this.stocks.forEach(function(stock){
			stock.updateCurrentPrice(helper.randomPriceChangePercent());
			stock.updateVolumn(helper.randomCommon(10, 30));
		});
		this.sortArray();
		this.updateGainers(10);
		this.updateLosers(10);		
	}, 5000);
}

Table.prototype.updateGainers = function(topX){
	var i = 0;
	var maxIndex = this.stocks.length - 1;
	while(i < topX){
		this.gainers[i] = this.stocks[maxIndex--];
		i++;
	}	
}

Table.prototype.updateLosers = function(topX){
	for (var i = 0; i < topX; i++){
		this.losers[i] = this.stocks[i];
	}
}

module.exports = Table;
