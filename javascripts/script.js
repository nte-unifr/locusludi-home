$(function () {
  // bs tooltip
  $('[data-toggle="tooltip"]').tooltip()

  // instafeed config
  var feed = new Instafeed({
    get: 'user',
    userId: '***REMOVED***',
    accessToken: '***REMOVED***.***REMOVED***.***REMOVED***',
    sortBy: 'most-recent',
    limit: 2
  });
  feed.run();
})