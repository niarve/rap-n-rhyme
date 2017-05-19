var request = require("request");

module.exports = function(line) {
  const words = line.split(' ');
  const word = words[words.length - 1];

  request("http://rhymebrain.com/talk?function=getRhymes&word==" + word, (err, response, body) => {
    response = JSON.parse(body);
    rhymes = response.filter(rhyme => rhyme.score >= 300)
      .map(r => console.log(r.word));
  });
}
