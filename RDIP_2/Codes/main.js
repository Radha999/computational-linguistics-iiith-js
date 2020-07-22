var pos = require('pos');

function check(p)
{
    var words = new pos.Lexer().lex(p);
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);
    tags = [];
    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
        console.log(word + " /" + tag);
        tags.push(tag);
    }
    return tags;
}

window.check = check;

// As the npm modules don't work in the browser directly, I used 'browserify' to change this file (main.js) to use.js, which can be used in the browser without any issues.
