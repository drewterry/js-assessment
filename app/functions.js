exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function (str2) { return str + ', ' + str2}
  },

  makeClosures: function(arr, fn) {
    return arr.map(x => {
      return () => { 
        return fn(x) 
      } 
    })
  },

  partial: function(fn, str1, str2) {
    return fn.bind(null, str1, str2)
  },

  useArguments: function(...args) {
    return args.reduce((sum, x) => { return sum + x })
  },

  callIt: function(fn, ...args) {
    return fn(...args)
  },

  partialUsingArguments: function(fn, ...args) {
    return fn.bind(null, ...args)
  },

  curryIt: function(fn) {
    if (fn.length === 1) return fn
    return (x) => this.curryIt(fn.bind(this, x))
  }
};
