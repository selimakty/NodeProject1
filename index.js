// Odev1

const pi = Math.PI

let radius = process.argv.slice(2)[0]*1 ;

const area = pi * Math.pow(radius,2) 

console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
