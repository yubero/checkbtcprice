var Bitstamp = require('bitstamp');
var moment = require('moment');

var bitstamp = new Bitstamp;
const maxPrice = 1150;

function getCurrentBtcPrice() {
  bitstamp.ticker('btceur', function(error, result) {
    var currentBtcPrice = result.last;
    var datetime = moment.unix(result.timestamp).format("MM/DD/YYYY HH:mm:ss");

    console.log ("Fecha: " + datetime);
    if (currentBtcPrice < maxPrice) {
      console.log("El precio es menor que " + maxPrice);
      console.log("El precio actual es: " + currentBtcPrice);
    } else {
      console.log("El precio es mayor o igual que " + maxPrice);
    }
  });
}

setInterval(function(){
   getCurrentBtcPrice();
 }, 3000);
