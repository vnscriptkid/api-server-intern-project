var companies = ['Apple','Express','Boeing','Caterpillar','Cisco','Chevron','Coca-Cola','DuPont',	
'ExxonMobil','General Electric','Goldman Sachs','Home Depot','IBM','Intel','Johnson & Johnson','JPMorgan Chase',
'McDonald','3M Company','Merck','Microsoft','Nike','Pfizer','Procter & Gamble','The Travelers',	
'UnitedHealth','United Technologies','Visa','Verizon','Wal-Mart','Walt Disney'];

function randomChar() {	
  	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  	return possible.charAt(Math.floor(Math.random() * possible.length));
}

function roundNumber(num, scale) {
  if (Math.round(num) != num) {
    if (Math.pow(0.1, scale) > num) {
      return 0;
    }
    var sign = Math.sign(num);
    var arr = ("" + Math.abs(num)).split(".");
    if (arr.length > 1) {
      if (arr[1].length > scale) {
        var integ = +arr[0] * Math.pow(10, scale);
        var dec = integ + (+arr[1].slice(0, scale) + Math.pow(10, scale));
        var proc = +arr[1].slice(scale, scale + 1)
        if (proc >= 5) {
          dec = dec + 1;
        }
        dec = sign * (dec - Math.pow(10, scale)) / Math.pow(10, scale);
        return dec;
      }
    }
  }
  return num;
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
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
    return +(Math.random() * (high - low) + low).toFixed(2);
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
	roundNumber
}

module.exports.companies = companies;


