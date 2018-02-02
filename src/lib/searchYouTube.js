var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {q: options.query, part: 'snippet', maxResults: options.max, key: options.key},
    contentType: 'application/json',
    success: function(data) {
      callback(data)
    },
    error: function(data) {
      console.log('err' + data)
    }
  })
};

window.searchYouTube = searchYouTube;
