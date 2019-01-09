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

  permute: function(arr) {

  },

  fibonacci: function(n) {
    if (n <= 0) return 0
    if (n === 1 ) return 1
    return this.fibonacci(n-1) + this.fibonacci (n-2)
  },

  validParentheses: function(n) {
    
  }
};
