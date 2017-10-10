var helper = require('../helper/random-stuff.js');

function Stock(code, company, originalPrice, volumn){
	this.code = code;
	this.company = company;
	this.originalPrice = originalPrice;	
	this.currentPrice = this.originalPrice;		
	this.volumn = volumn;	
}

Stock.prototype.getPriceChange = function(){
	return this.originalPrice - this.currentPrice;
}

Stock.prototype.getPriceChangePercent = function(){	
	return (this.getPriceChange() / this.originalPrice * 100);	
}

Stock.prototype.updateCurrentPrice = function(changeInPercent){
	this.currentPrice = parseFloat(this.currentPrice);	
	this.currentPrice += this.currentPrice * changeInPercent / 100;
	this.currentPrice = helper.round2Fixed(this.currentPrice);	
}

Stock.prototype.getValue = function(){
	return this.currentPrice * this.volumn;
}

Stock.prototype.updateVolumn = function(change){
	this.volumn += change;
}

module.exports = Stock;
