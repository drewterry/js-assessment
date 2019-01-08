exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var ref

    (function output(count) {
      console.log(count)
      
      if (count !== end) {
        ref = setTimeout(output, 100, ++count)
      }
    })(start)

    return {
      cancel: () => clearTimeout(ref)
    }
  }
};
