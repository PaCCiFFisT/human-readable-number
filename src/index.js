module.exports = function toReadable(number) {
  var single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    dobble = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var numberArr = number.toString().split('');
  if (number < 1) {
    return `zero`;
  } else if (numberArr.length === 1) {
    return (`${single[numberArr]}`)
  } else if (numberArr.length === 2) {
    if (numberArr[0] > 1 && numberArr[1] < 1) {
      return (`${ten[numberArr[0]]}`)
    }
    else if (numberArr[0] > 1 && numberArr[1] > 0) {
      return (`${ten[numberArr[0]]} ${single[numberArr[1]]}`)
    } else {
      return (`${dobble[numberArr[1]]}`)
    }
  } else if (numberArr.length === 3) {
    var hund = `${single[numberArr[0]]} hundred`;
    if (numberArr[0] > 0 && numberArr[1] < 1 && numberArr[2] < 1) {
      return hund;
    } else if (numberArr[1] > 1 && numberArr[2] > 0) {
      var second = `${ten[numberArr[1]]} ${single[numberArr[2]]}`;
    } else if (numberArr[1] > 0 && numberArr[1] < 2) {
      var second = `${dobble[numberArr[2]]}`;
    } else if (numberArr[1] > 0 && numberArr[2] < 1) {
      var second = `${ten[numberArr[1]]}`;
    } else {
      var second = `${single[numberArr[2]]}`;
    }
    return `${hund} ${second}`;
  }
}
