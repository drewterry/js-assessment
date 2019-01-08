exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((sum, i) => sum + i)
  },

  remove: function(arr, item) {
    return arr.filter(el => el != item)
  },

  removeWithoutCopy: function(arr, item) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1)
        i--
      }
    }
    return arr  
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    return arr.reduce((count, el) => { 
      return (el == item) ? ++count : count 
    }, 0)
  },

  duplicates: function(arr) {
    return arr.reduce((dups, el) => {
      if (this.count(arr, el) > 1 && !dups.includes(el)) dups.push(el)
      return dups
    }, [])
  },

  square: function(arr) {
    return arr.map(x => Math.pow(x, 2))
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((indices, el, i) => { 
      if (el == target) indices.push(i)
      return indices
    }, [])
  }
};
