exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    
    function removeDuplicates(match, p1) {
      return p1.repeat(amount)
    }

    re = new RegExp(`(.)\\1{${amount},}`, 'g')
    return str.replace(re, removeDuplicates)
  },

  wordWrap: function(str, cols) {
    words = str.split(' ')

    return words.reduce((wrap, word) => {
      if (wrap.length === 0) {
        return [ word ]
      } else {
        line = wrap.pop()
      }

      if ((line.length + word.length) < cols) {
        line += ' ' + word
        wrap.push(line)
      } else {
        wrap.push(line)
        wrap.push(word)
      }

      return wrap
    }, []).join('\n')
  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
