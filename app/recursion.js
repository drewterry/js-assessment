exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    if (dirName) data.files = data.files.filter((file) => file.dir === dirName)

    return data.files.reduce((list, file) => {
      if (typeof file === "string") list.push(file)
      else list = list.concat(this.listFiles(file))
      return list
    }, [])
  },

  permute: function(arr, isValid = (arr) => {return true}) {

    return arr.reduce((results, el, i) => {
      // Swap elements
      var tmp = arr.slice()
      tmp[0] = el
      tmp[i] = arr[0]

      if (tmp.length > 2) {
        // Recurse down array and add to results
        var sub = this.permute(tmp.slice(1), isValid).map(x => { 
          x.unshift(tmp[0]); 
          return x 
        })

        return results.concat(sub)
      }
      
      // Return arrays <= 2
      results.push(tmp)
      return results
    }, [])
  },

  fibonacci: function(n) {
    if (n <= 0) return 0
    if (n === 1 ) return 1
    return this.fibonacci(n-1) + this.fibonacci (n-2)
  },

  validParentheses: function(n) {
    var parens = '()'.repeat(n).split('')
    
    function validParens(arr) {
      var parens = 0
      order = arr.reduce((valid, x) => {
        if (x === '(') parens++
        if (x === ')') parens--
        return valid && parens >= 0
      }, true)
      return order && parens === 0;
    }

    return this.permute(parens, validParens)
            .filter(x => validParens(x))
            .map(x =>  x.join(''))
            .filter((x, i, arr) => arr.indexOf(x) === i)
  }
};
