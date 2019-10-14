// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
    var cardArr = cardNumber.split('');
    for (var i=0; i<cardArr.length; i++) {
        cardArr[i] = parseInt(cardArr[i]);
    }
    var prefix3 = Number(cardNumber.slice(0,3));
    var prefix4 = Number(cardNumber.slice(0,4));
    var prefix5 = Number(cardNumber.slice(0,5));
    var prefix6 = Number(cardNumber.slice(0,6));
    if (cardArr.length === 14 && (cardArr[1] === 8 || cardArr[1] === 9)) {
            return 'Diner\'s Club';
    } else if (cardArr.length === 15 && (cardArr[1] === 4 || cardArr[1] === 7)) {
            return 'American Express';
    } else if (cardArr.length === 16 && cardArr[0] === 5 && (cardArr[1] === 1 || cardArr[1] === 2 || cardArr[1] === 3 || cardArr[1] === 4 || cardArr[1] === 5)) {
               return 'MasterCard'
    } else if ((cardArr.length === 16 || cardArr.length === 19) && (cardArr[0] === 6 && (cardArr[1] === 0 || cardArr[1] === 5 || cardArr[1] === 4)) && ((cardArr[2] === 1 && cardArr[3] === 1) || (cardArr[2] > 3 && cardArr[2] < 10) || cardArr[1] === 5)){
            return 'Discover';
    } else if ((cardArr.length > 11 && cardArr.length < 20) && (((cardArr[0] === 5 && cardArr[1] === 0) && (cardArr[2] === 1 || cardArr[2] === 3) && (cardArr[3] === 8)) || ((cardArr[0] === 5 && cardArr[1] === 0) && (cardArr[2] === 2) && (cardArr[3] === 0)) || ((cardArr[0] === 6) && (cardArr[1] === 3) && (cardArr[2] === 0) && (cardArr[3] === 4)))) {
        return 'Maestro';
    } else if (((prefix6 >= 622126 && prefix6 <= 622925) || (prefix3 >= 624 && prefix3 <= 626) || (prefix4 >= 6282 && prefix4 <= 6288)) && (cardArr.length >= 16 && cardArr.length <=19)) {
        return 'China UnionPay';
    } else if ((prefix4 === 4903 || prefix4 === 4905 || prefix4 === 4911 || prefix4 === 4936 || prefix6 === 564182 || prefix6 === 633110 || prefix4 === 6333 || prefix4 === 6759) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
        return 'Switch';
    } else if ((cardArr.length === 13 || cardArr.length === 16 || cardArr.length === 19) && (cardArr[0] === 4)) {
      return 'Visa';
    }
    return;
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
