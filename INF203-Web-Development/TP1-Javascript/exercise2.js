function wordCount(str){
  var result = {};
  var words = str.split(' ');
  for(let i in words){
    if(result[words[i]]){
      result[words[i]] += 1;
    }else{
      result[words[i]] = 1;
    }
  }
  return result;
}


function WordL(str){

  this.wordsList = wordCount(str);

  this.getWords = function() {
    liste = [];

    for(var i in this.wordsList){
      liste.push(i);
    }

    return liste.sort(function(x,y) {
    return x.toString().localeCompare(y.toString());
  });

  }

  this.getCount = function(word) {
    return this.wordsList[word];
  }

  this.maxCountWord = function() {

    var occurrences = -1;
    var mostOccurred = 0;
    var liste = this.getWords()
    for(var i = 0; i < liste.length; i++){

      if(this.getCount(liste[i])>occurrences){
        occurrences =this. getCount(liste[i]);
        mostOccurred = liste[i];
      }
    }
      return mostOccurred;
    }

    this.minCountWord = function() {

      var occurrences = Number.MAX_SAFE_INTEGER;;
      var leastOccurred = 0;
      var liste = this.getWords()
      for(var i = 0; i < liste.length; i++){

        if(this.getCount(liste[i])<occurrences){
          occurrences = this.getCount(liste[i]);
          leastOccurred = liste[i];
        }
      }
        return leastOccurred;
      }

      this.applyWordFunc = function (f){
        return (this.getWords()).map(f);
    }
  }










exports.wordCount = wordCount;
exports.WordL = WordL;
