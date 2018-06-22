// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "767ce80146174579a3a506a0acd4bcb7",
  'q': "berkeley"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
    document.getElementById('headline').innerHTML = result.response.docs["0"].headline.main;
}).fail(function(err) {
    throw err;
});