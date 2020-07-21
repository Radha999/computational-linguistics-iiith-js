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