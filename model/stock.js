var helper = require('../helper/random-stuff.js');

function Stock(code, company, originalPrice, volumn){
	this.code = code;
	this.company = company;
	this.originalPrice = originalPrice;	
	this.currentPrice = this.originalPrice;		
	this.volumn = volumn;
	this.priceChange = 0;
	this.priceChangePercent = 0;
	this.value = this.currentPrice * this.volumn;
}

Stock.prototype.updatePriceChange = function(){
	this.priceChange = +(this.currentPrice - this.originalPrice).toFixed(2);
}

Stock.prototype.updatePriceChangePercent = function(){		
	this.priceChangePercent = +(this.priceChange / this.originalPrice * 100).toFixed(2);
}

Stock.prototype.updateCurrentPrice = function(changeInPercent){		
	this.currentPrice = +(this.currentPrice + (this.currentPrice * changeInPercent / 100)).toFixed(2);		
}

Stock.prototype.updateValue = function(){
	this.value = +(this.currentPrice * this.volumn).toFixed(2);
}

Stock.prototype.updateVolumn = function(change){
	this.volumn += change;
}

module.exports = Stock;
