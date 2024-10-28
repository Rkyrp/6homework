//1задание
const doubleLetter = (str = '') => str.split('').map(char => char + char).join('');
console.log(doubleLetter('Hello'));
//2задание
const padString = (str, length, symbol, toLeft = false) => {
    if (str.length >= length) {
      return str; 
    }
    return toLeft ? str.padStart(length, symbol) : str.padEnd(length, symbol);
  };
  
  console.log(padString('Hard ', 7, '*'));
  
  //3задание - сложно i don't know , sorry

  