var request = require("request");

module.exports = function(line) {
  const words = line.split(' ');
  const word = words[words.length - 1];

  request("https://api.datamuse.com/words?sl=" + word, (err, response, body) => {
    rhymes = JSON.parse(body);
    rhymes.forEach((rhyme) => console.log(rhyme.word));
  });
}
