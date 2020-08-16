import list from "./WordList.json"

function generateList() {
  var array = [] 
  for (var i = 0; i < 200; i++) {
    array.push(list.Fr[Math.floor(Math.random() * list.Fr.length)])
  }
  return array
}

export {generateList}


class WordManager {
  wordArray = [];
  points = 0; 
  wordCount = 0;

  constructor(nb) {
    for (var i = 0; i < nb; i++) {
      this.wordCount = nb;
      this.wordArray.push(list.Fr[Math.floor(Math.random() * list.Fr.length)]);
    }
  }

  get wordlist() {
    return this.wordArray;
  }
  get points() {
    return this.points;
  }

  // created the method that remov
  compareWord(word) {
    var ensure = word.replace(/\s/g, '');

      if(this.wordArray[0] == ensure) {
        this.wordArray.splice(0, 1);
        this.points += 1;
        //console.log(this.wordArray)
        console.log("true");
        return true
      }
      console.log("false");
      return false
  }
}

export {WordManager}