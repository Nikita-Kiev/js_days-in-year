function daysInYear(year) {
  try {
    if(!Number.isInteger(year)) {
    throw new Error (`Year isn't correct`);
  } 
    return (new Date(`${year+1}`) - new Date(`${year}`))/86400000;
  } catch(err) {
    return false;
  }
} 

console.log(daysInYear(2019)); // 365
console.log(daysInYear('2019')); // exception
console.log(daysInYear(2020)); // 366
console.log(daysInYear(2020.2)); // exception
console.log(daysInYear(2100)); // 365
console.log(daysInYear({year: 2100})); // exception
