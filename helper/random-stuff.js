var companies = ['Apple','Express','Boeing','Caterpillar','Cisco','Chevron','Coca-Cola','DuPont',	
'ExxonMobil','General Electric','Goldman Sachs','Home Depot','IBM','Intel','Johnson & Johnson','JPMorgan Chase',
'McDonald','3M Company','Merck','Microsoft','Nike','Pfizer','Procter & Gamble','The Travelers',	
'UnitedHealth','United Technologies','Visa','Verizon','Wal-Mart','Walt Disney'];

function randomChar() {	
  	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  	return possible.charAt(Math.floor(Math.random() * possible.length));
}

function round2Fixed(value) {
  value = +value;

  if (isNaN(value))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2) : 2)));

  // Shift back
  value = value.toString().split('e');
  return (+(value[0] + 'e' + (value[1] ? (+value[1] - 2) : -2))).toFixed(2);
}

function randomCode() {
  var text = ""; 

  for (let i = 0; i < 3; i++) {
    text += randomChar();  	
  }

  text += '.';

  for (let i = 4; i < 6; i++) {
    text += randomChar();  	
  }

  return text;
}

function randomPrice(low, high) {	
    return round2Fixed(Math.random() * (high - low) + low);
}

function randomPriceChangePercent() {
	let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	let abs = Math.floor(Math.random() * 6);
	return abs == 0 ? 0 : (abs * plusOrMinus);	
}

function randomCommon(low, high) {	
	return Math.floor(Math.random() * (high - low) + low);
}

module.exports = {
	randomPriceChangePercent,	
	randomCommon,
	randomCode,
	randomPrice,
	round2Fixed
}

module.exports.companies = companies;


