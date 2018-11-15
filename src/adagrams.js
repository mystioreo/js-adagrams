const Adagrams = {
  drawLetters() {
    let allLetters = [
      'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
      'B', 'B',
      'C', 'C',
      'D', 'D', 'D', 'D',
      'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
      'F', 'F',
      'G', 'G', 'G',
      'H', 'H',
      'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
      'J',
      'K',
      'L', 'L', 'L', 'L',
      'M', 'M',
      'N', 'N', 'N', 'N', 'N', 'N',
      'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
      'P', 'P',
      'Q',
      'R', 'R', 'R', 'R', 'R', 'R',
      'S', 'S', 'S', 'S',
      'T', 'T', 'T', 'T', 'T', 'T',
      'U', 'U', 'U', 'U',
      'V', 'V',
      'W', 'W',
      'X',
      'Y', 'Y',
      'Z'
    ];

    let indices = [];
    while (indices.length < 10) {
      let randomIndex = Math.floor((Math.random() * allLetters.length))
      if (!indices.includes(randomIndex)) {
          indices.push(randomIndex);
      }
    }
    const drawnLetters = indices.map((index) => allLetters[index]);
    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    let valid = true;
    let inputLetters = input.toUpperCase().split("");
    let handCopy = lettersInHand.map(letter => letter);

    inputLetters.forEach((letter) => {
      if((handCopy).includes(letter)) {
        let i = handCopy.indexOf(letter);
        handCopy.splice(i, 1);
      } else {
        valid = false;
      }
    });
    return valid;
  },

  scoreWord(word) {
    if (word != "") {

      let letterValue = {
        "A": 1, "E": 1, "I": 1,"O": 1,"U": 1,"L": 1,"N": 1,"R": 1,"S": 1,"T": 1,
       "D": 2, "G": 2, "B": 3, "C": 3,"M": 3,"P": 3, "F": 4, "H": 4,"V": 4,"W": 4,"Y": 4,
       "K": 5, "J": 8, "X": 8, "Q": 10,"Z": 10}

      let wordArray = word.toUpperCase().split("");
      let scores = wordArray.map(letter => letterValue[letter]);
      let score = scores.reduce((sum, element) => sum + element);

      if (word.length > 6) {
        score += 8;
      }

      return score;

    } else {
      return 0;
    }
  },

  highestScoreFrom(words) {

    let scores = words.map(word => Adagrams.scoreWord(word))

    let bestScore = Math.max(...scores);

    let bestWordList = [];  //account for multiple words with highest score

    for (let i = 0; i < words.length; i++) {
      if (scores[i] == bestScore) {
        bestWordList.push(words[i]);
      }
    }

    let bestWord = bestWordList[0];

    bestWordList.forEach((word) => {
      if(word.length == 10 && bestWord.length != 10) {
        bestWord = word;
      } else if (word.length < bestWord.length && bestWord.length != 10){
        bestWord = word;
      }
    });

    return {"word": bestWord, "score": bestScore}

  },
};



// Do not remove this line or your tests will break!
export default Adagrams;
