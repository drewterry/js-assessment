exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    str = num.toString(2)
    return parseInt(str.charAt(str.length - bit), 10)
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    return num.toString(2).padStart(8, '0')
  },

  multiply: function(a, b) {
    pres = Math.max(...[a, b].map((x) => {
      x = x.toString().match(/\.([0-9]+)/)
      return x ? x[1].length : 0
    }))

    return parseFloat((a * b).toPrecision(pres), 10)
  }
};
