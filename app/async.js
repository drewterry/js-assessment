exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise ((resolve) => resolve(value))

  },

  manipulateRemoteData: function(url) {
    return new Promise(resolve => {
      $.ajax("/data/testdata.json").then(res => {
        resolve(res.people.map(x => x.name).sort())
      })
    })
  }
};
